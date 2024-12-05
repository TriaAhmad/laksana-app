"use client";
import { useState } from "react";
import { FaComments } from "react-icons/fa"; // Ikon untuk chatbot

export default function Chatbot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Untuk menampilkan/menyembunyikan chatbox

  const sendMessage = async () => {
    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {/* Ikon Chatbot */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-cyan-600 text-white rounded-full cursor-pointer shadow-lg hover:bg-cyan-700 transition"
      >
        <FaComments size={24} />
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div className="w-full sm:w-80 max-w-full bg-white shadow-lg rounded-lg p-4 md:p-6 lg:p-8 mt-4 border border-cyan-400">
          <h2 className="text-xl font-semibold text-cyan-600 mb-4 text-center">Chatbot</h2>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-4 border border-cyan-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none min-h-[120px] placeholder-cyan-400"
            placeholder="Tulis pesan Anda..."
          />
          <button
            onClick={sendMessage}
            className="w-full py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition duration-300"
          >
            Kirim
          </button>
          {response && (
            <p className="mt-3 text-cyan-600 text-sm md:text-base text-center">
              {response}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
