import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { CgPushLeft } from "react-icons/cg";
import { IoCheckmarkSharp } from "react-icons/io5";

const NewGroupChat = () => {
    const [imgUpload, setImgUpload] = useState(false);
    const [groupChatName, setGroupChatName] = useState(null);
    const handleGroupChatNameChange = (e) => {
        setGroupChatName(e.target.value);
    }


    return (
        <div className='w-full h-full'>
            <div className='flex space-x-8 bg-[#90c4ff] pt-5 px-5 pb-4 items-center'>
                <CgPushLeft className='cursor-pointer text-3xl'/>
                <p className='text-bold'>&nbsp;&nbsp;&nbsp;&nbsp;Create Group Chat Name</p>
            </div>
            <div className='flex flex-col items-center justify-center my-12'>
                <label
                htmlFor="GroupChatImg"
                className='relative'>
                    <img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="" />
                    {imgUpload && <CircularProgress className='absolute top-[5rem] left-[5rem]'/>}
                </label>
                <input type="file"
                id='GroupChatImg'
                className='hidden'
                onChange={() => {console.log("The GC photo change works")}}/>
                <p className='pl-2 font-bold text-xl'>{groupChatName || "Group Chat Name"}</p>
            </div>
            <div className='w-full py-2 px-5 flex justify-between items-center'>
                <input
                type="text"
                className='w-full outline-none border-b-2 border-orange-400 px-2 bg-[#ffece3] '
                onChange={handleGroupChatNameChange}
                placeholder='Group Chat Name'
                value={groupChatName}/>
            </div>
            {groupChatName && <div className='flex items-center justify-center py-10 bg-[#ffece3] '>
                <button>
                    <div className=' bg-[#3288ff] rounded-full'>
                        <IoCheckmarkSharp className='font-bold text-3xl'/>
                    </div>
                </button>
            </div>}
        </div>
    )
}

export default NewGroupChat;
