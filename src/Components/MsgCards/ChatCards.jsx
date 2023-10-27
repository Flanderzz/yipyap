import React from 'react'

export const ChatCards = () => {
  return (
    <div className='flex items-center justify-center py-2 group cursor-pointer'>
        
        <div className='w-[20%]'>
            <img 
            className='h-14 w-14 rounded-full'
            src="https://wallpapers.com/images/hd/basic-default-pfp-pxi77qv5o0zuz8j3.jpg" 
            alt="" />
        </div>
        <div className='pl-5 w-[80%]'>
            <div className='flex justify-between items-center'>
                <p className='text-lg'>username</p>
                <p className='text-sm'>timestamp</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>msg</p>
                <div className='right-10 flex space-x-2 items-center'>
                    <p className='text-xs py-1.5 px-2.5 text-white bg-[#349fc5] rounded-full'>1</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ChatCards;