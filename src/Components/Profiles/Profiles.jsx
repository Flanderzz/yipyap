import React, { useState } from 'react';
import { CgPushLeft } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import { RiEdit2Line } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineCamera } from "react-icons/ai";
 

const Profiles = ({handleBackButton, item}) => {
    const [flag, setFlag]=useState(false);
    const [username, setUsername] = useState(null);
    const handleNameChange = (e) => {
        setUsername(e.target.value);
    }
    const navigation = useNavigate();
    const handleFlag = () => {
        setFlag(true);
    }
    const handleCheckmark = () => {
        setFlag(false);
    }
    // const handleNavigation = () => {
    //     navigation(-1);
    // }

  return (
    <div className='w-full h-full'>
        <div className='flex items-center space-x-10 bg-[#90c4ff]  pt-5 px-5 pb-4 '>
            <CgPushLeft className='cursor-pointer text-3xl' onClick={handleBackButton}/>
            <p className='cursor-text font-semibold'>Edit Profile</p>
        </div>

        <div className='flex flex-col justify-center items-center my-12'>
            
            <AiOutlineCamera className='absolute text-white text-2xl items-center justify-center '/>
            
           <label htmlFor="imgChange">
                <img 
                className='rounded-full w-[15vw] h-[15vw] cursor-pointer'
                src="https://wallpapers.com/images/hd/basic-default-pfp-pxi77qv5o0zuz8j3.jpg" 
                alt="" />
            </label>
            <input type="file" id='imgChange' className='hidden'/>
        </div>
        <div className='bg-[#C3EBFF]'>
            <p className='py-3 underline underline-offset-1'>Edit Name:</p>
            {!flag && <div className='flex justify-between items-center w-full pb-3'>
               <p className='pl-2'>{ username || item.name }</p>
                <RiEdit2Line 
                onClick={ handleFlag }
                className='cursor-pointer text-3xl pr-2'/>  
            </div>}

            {flag && <div className='bg-[#C3EBFF]'>
                <div className='flex justify-between items-center w-full pb-3'>
                    <input 
                    onChange={ handleNameChange }
                    type="text" 
                    className='bg-[#C3EBFF] pl-1 outline-none w-[90%] border-b-2 border-black placeholder-gray-500 text-black ' 
                    placeholder='Username'/>
                    <FcCheckmark
                    onClick={ handleCheckmark }
                    className='cursor-pointer text-3xl pr-2'/>
                </div>
            </div>}
        </div>
    </div>
  );
}

export default Profiles;