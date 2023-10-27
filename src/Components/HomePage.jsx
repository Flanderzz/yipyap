import React, { useState, useEffect } from "react";
import { GoGear,GoSearch } from 'react-icons/go';
import { BsFillChatRightTextFill, BsFilter, BsThreeDotsVertical } from "react-icons/bs";
import ChatCards from "./MsgCards/ChatCards";
import MessageCards from "./MsgCards/MessageCards";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaRegImage } from "react-icons/fa";
import './Homepage.css'
import Profiles from "./Profiles/Profiles";
import { useNavigate } from "react-router-dom";
import { FiMoreHorizontal }  from "react-icons/fi";
import { Menu, MenuItem } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import CreateGroupChat from "./GroupChat/CreateGroupChat";
import { useDispatch, useSelector, } from "react-redux";
import { logout } from "../Redux/Auth/action";
import { currUser } from "../Redux/Auth/action";


const HomePage = () => {
    const dispatch = useDispatch();
    const {auth} = useSelector(store => store);
    const [querys, setQuerys] = useState(null);
    const navigator = useNavigate();
    const token = localStorage.getItem("token");
    const [currentChat, setCurrentChat] = useState(null);
    const handleClickOnChatCard = () => [setCurrentChat(true)]
    const [content, setContent] = useState("");
    const handleCreateNewMsg = () => {};
    const handleSearch = () => [];
    const handleBackButton = () =>{
        setIsUserProfile(false);
    }
    const [isGroupChat, setIsGroupChat] = useState(false);

    const [isUserProfile, setIsUserProfile] = useState(false);
    const handleNavigation = () => {
        setIsUserProfile(true);
     }
     
     const [anchorEl, setAnchorEl] = React.useState(null);
     const open = Boolean(anchorEl);
     const handleClick = (event) => {
       setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
       setAnchorEl(null);
     };
     const handleCreateGroupChat = () => {
        setIsGroupChat(true);
     }
     const handleLogout = () => {
        dispatch(logout());
        navigator('/register')

     }
     useEffect(() => {


        if(token){
            dispatch(currUser(token));

        }
    }, [token, dispatch]);

     useEffect(() => {
        console.log("auth 2",auth.reqUser);

        if(!auth.reqUser){
            navigator('/register')
        }
     }, [auth.reqUser, navigator])

    return(
        <div className="relative">
            <div className="h-screen bg-[#1B81E4] w-full"></div>
            <div className="flex bg-[#f9f6f3] h-[93vh] w-[96vw] absolute top-9 left-[2vw] right-[50%]">
                <div className="left w-[25%] bg-[#ffece3] border-r-2 border-[#D0D0D0] h-full">

                    {isGroupChat && <CreateGroupChat />}
                    
                    {isUserProfile && <div className="w-full h-full"><Profiles handleBackButton={handleBackButton}/></div>}  
                    
                    {!isUserProfile && !isGroupChat && <div className="w-full">
                         <div className="flex justify-between items-center p-3">
                            <div onClick={handleNavigation} className="flex items-center space-x-3">
                                <img className='rounded-full w-10 h-10 cursor-pointer' 
                                src="https://wallpapers.com/images/hd/basic-default-pfp-pxi77qv5o0zuz8j3.jpg" 
                                alt=""/>
                                <p className="cursor-pointer">username</p>
                            </div>
                            <div className="space-x-3 text-lg flex cursor-pointer">
                                <GoGear onClick={() => {navigator("/settings")}}/>
                                <BsFillChatRightTextFill/>
                                <div className=" hover:bg-blue-200 rounded-full flex items-center justify-center">
                                    <FiMoreHorizontal
                                    id="demo-positioned-button"
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}/>
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}>
                                        <MenuItem onClick={handleClose}><CgProfile className="text-lg"/>&nbsp;View Profile</MenuItem>
                                        <MenuItem onClick={handleCreateGroupChat}><AiOutlineUsergroupAdd className="text-lg"/>&nbsp;Create Groupchat</MenuItem>
                                        <MenuItem onClick={handleLogout}><BiLogOutCircle className="text-lg"/>&nbsp;Signout</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-center items-center bg-[#FFA239] py-4 px-4 border-t-2 border-[#D0D0D0]">
                            <input className=" outline-[#0080ff] bg-[#ffece3] rounded-md w-[95%] pl-11 " 
                            type="text" 
                            placeholder="Find Users to Yap to Here"
                            onChange={(e) => {
                                setQuerys(e.target.value);
                                handleSearch(e.target.value);
                            }}
                            value={querys}/>
                            <GoSearch className="left-8 top-6.7 absolute text-lg pointer-events-auto"/>

                            <div className="ml-4 text-3xl flex cursor-pointer">
                                <BsFilter/>
                            </div>
                        </div>
                        <div className=" overflow-y-scroll h-[78vh] px-3">
                            {querys && [1,1,1,1,1].map((item) => <div onClick={handleClickOnChatCard}> <hr /><ChatCards/></div>)}
                            
                        </div>
                        <div>

                        </div>
                    </div>}
                </div>
                {!currentChat && <div className="w-[70%] flex flex-col items-center justify-center h-full">
                    <div className="max-w-[70%] text-center">
                        <img 
                        className=""
                        src="https://global.discourse-cdn.com/pocketgems/uploads/episodeinteractive/original/4X/7/b/0/7b041e698ac5ef3b6eaf6b62995ac733f0af7a57.png" 
                        alt="" />
                        <p className="text-3xl flex items-center justify-center text-[#1caef3]">Yip-Yap <span className="text-[#EA7315]">&nbsp;Time</span></p>
                        <p className="my-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>}
            {/* find way to make right or center, not on left */}
            {currentChat && <div className="w-[80%] relative">
                <div className="header absolute border-l-2 border-[#D0D0D0] bg-[#90c4ff] top-0 w-full border-b-2 outline-black">
                    <div className="flex justify-between">
                        <div className="py-3 space-x-4 flex items-center px-3">
                        <img 
                        className='h-10 w-10 rounded-full'
                        src="https://wallpapers.com/images/hd/basic-default-pfp-pxi77qv5o0zuz8j3.jpg" 
                        alt="" />
                            <p>username</p>
                        </div>
                        <div className="py-3 space-x-4  flex items-center px-3">  
                            <GoSearch className="cursor-pointer"/>
                            <BsThreeDotsVertical className="cursor-pointer"/>
                        </div>
                    </div>
                </div>
                <div className="px-10 h-[85vh] overflow-y-scroll bg-[#f3f9ff]">
                    <div className="space-y-1 flex flex-col justify-center mt-20 py-2">
                        {[1,1,1,1,1].map((item, i) => <MessageCards isReqUserMsg={i%2===0} content={"message"}/>)}
                    </div>
                </div>
                <div className="footer bg-[#90c4ff] absolute border-l-2 border-[#D0D0D0] bottom-0 w-full py-3 text-xl">
                    <div className="flex justify-between items-center px-5 text-xl relative">
                            <MdOutlineEmojiEmotions className="cursor-pointer "/>
                            <FaRegImage className="cursor-pointer"/>
                        <input className="py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]" 
                        type="text" 
                        onChange={(e) => {setContent(e.target.value)}} 
                        placeholder="Yap to (something)"
                        value={content}
                        onKeyPress={(e)=>{
                            if (e.key === "Enter"){
                                handleCreateNewMsg();
                                setContent("");
                            }
                        }}/>
                    </div>
                    
                </div>
            </div>}

            </div>
        </div>
       
    );
}

export default HomePage;