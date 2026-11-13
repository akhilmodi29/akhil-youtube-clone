import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { useSelector } from 'react-redux';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
        <div className='w-full h-[450px] p-2 border rounded-t-xl border-[#303030] bg-[#181818] overflow-y-scroll flex flex-col-reverse'>
            <div>
            {
                chatMessages.map((c,i) => (
                    <ChatMessage key = {i} name={c.name} message={c.message}/>
                ))
            }
            </div>
        </div>
        <form 
            className='w-full p-2 border border-t-0 border-[#303030] rounded-b-xl flex gap-2 bg-[#1f1f1f]' 
            onSubmit={(e) => {
                e.preventDefault();
                if (!liveMessage.trim()) return;

                dispatch(
                    addMessage({
                        name: "Akhil Modi",
                        message: liveMessage,
                    })
                );    
                setLiveMessage("");
            }}>
            <input 
                type = "text" 
                value={liveMessage}
                placeholder="Chat..."
                className='flex-1 px-3 py-1 bg-[#121212] border border-[#383838] text-white text-sm rounded-full outline-none focus:border-blue-500 placeholder-gray-500' 
                onChange={(e) => {
                    setLiveMessage(e.target.value);
                }} /> 
            <button className='px-4 py-1 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700'>Send</button>
        </form>
    </div>
  );
};

export default LiveChat;
