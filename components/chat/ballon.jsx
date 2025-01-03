
import MarkdownPreview from '@uiw/react-markdown-preview';
const Ballon = (data) => {

    return (
        <div className={`w-full h-fit p-[20px] flex ${data.isUser ? 'justify-end' : 'justify-start'} items-center`}>
            <div className={`max-w-[50%] h-fit rounded-lg p-[10px] bg-white shadow-lg flex justify-center ${data.isUser ? 'items-start' : 'items-end'} flex-col`}>
                <MarkdownPreview source={data.message} style={{ padding: 0 }} />
                <span className='text-sm text-cyan-500'>
                    {data.time}
                </span>
            </div>
        </div>
    );

};

export default Ballon;