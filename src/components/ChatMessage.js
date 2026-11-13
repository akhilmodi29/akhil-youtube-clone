import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center py-1.5 px-2 hover:bg-[#2e2e2e] rounded-lg text-white'>
        <img
          className="h-6 w-6 invert opacity-80 flex-shrink-0"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span className='font-semibold text-xs text-gray-400 px-2 flex-shrink-0'>{name}</span>
        <span className='text-xs text-gray-200'>{message}</span>
    </div>
  )
}

export default ChatMessage;