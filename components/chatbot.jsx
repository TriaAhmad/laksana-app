"use client";
import Ballon from "@/components/chat/ballon";
import { useEffect, useRef, useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const Chatbot = _ => {
    const chat_box = useRef(null);
    const container_chat = useRef(null);
    const t = new Date();

    const [chatData, setChatData] = useState([{
        isUser: false,
        message: "Selamat datang dilaksana",
        time: `${t.getHours()}:${t.getMinutes()}`
    }]);
    const [socket, setSocket] = useState(undefined);
    const [text, setText] = useState("");
    const [isChatOpen, setIsChatOpen] = useState(false);
    const ws = new WebSocket("ws://localhost:8000");

    useEffect(() => {
        ws.onopen = _ => {
            setSocket(ws);
        };
        ws.onmessage = e => {
            const data = JSON.parse(e.data);
            const chat = {
                message: data.message,
                time: data.time,
                isUser: false
            };
            setChatData(d => [...d, chat]);
            setTimeout(() => {
                container_chat.current?.scrollTo(0, chat_box.current?.scrollHeight);
            }, 10);
        };
    }, []);

    const handleSendMessage = message => {
        if (message.trim() === "") return;
        const t = new Date();
        const chat = {
            message,
            time: `${t.getHours()}:${t.getMinutes()}`,
            isUser: true
        };
        setChatData(d => [...d, chat]);
        socket.send(JSON.stringify(chat));
        setText("");
        container_chat.current?.scrollTo(0, chat_box.current?.scrollHeight);
    };

    return (
        <>
            <div className="fixed bottom-4 right-4 z-50">
                {!isChatOpen && (
                    <button
                        onClick={() => setIsChatOpen(true)}
                        className="bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-cyan-800">
                        <FaComments size={24} />
                    </button>
                )}

                {isChatOpen && (
                    <div className="w-full max-w-md h-[90vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
                        <div className="bg-cyan-500 text-white p-4 flex justify-between items-center">
                            <h2 className="text-lg font-bold">Chat</h2>
                            <button
                                onClick={() => setIsChatOpen(false)}
                                className="text-white hover:text-gray-400">
                                <FaTimes size={20} />
                            </button>
                        </div>

                        <div
                            ref={container_chat}
                            className="flex-1 overflow-y-auto p-4">
                            <div
                                ref={chat_box}
                                className="flex flex-col gap-2">
                                {chatData.map((d, i) => (
                                    <Ballon
                                        key={i}
                                        message={d.message}
                                        time={d.time}
                                        isUser={d.isUser}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="p-4 bg-slate-100 flex items-center gap-2">
                            <input
                                type="text"
                                value={text}
                                onChange={e => setText(e.target.value)}
                                onKeyDown={e => {
                                    if (e.key === "Enter") handleSendMessage(text);
                                }}
                                className="flex-1 p-2 border rounded-lg"
                                placeholder="Ketik pesan..."
                            />
                            <button
                                onClick={() => handleSendMessage(text)}
                                className="bg-cyan-500 text-white p-2 rounded-lg hover:bg-cyan-800">
                                Kirim
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Chatbot;
