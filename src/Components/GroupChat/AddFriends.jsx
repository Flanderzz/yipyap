import React from 'react'
import { MdOutlineClose } from 'react-icons/md';

const AddFriends = ({handleRemoveFriend, Friends}) => {
    return (
        // very rough, redo the design of it (exp: spacing, img not fitting right, and border around it maybe add shaddow to look cooler)
        <div className='flex items-center justify-between bg-[#ffc37e] rounded-full'>
            <img 
            className="w-7 h-7 rounded-full space-x-3"
            src="https://wallpapers.com/images/hd/basic-default-pfp-pxi77qv5o0zuz8j3.jpg" 
            alt="" />
            <p>username</p>
            <MdOutlineClose 
            onClick={handleRemoveFriend} 
            className='pr-1 text-lg cursor-pointer'/>
        </div>
    )
}

export default AddFriends