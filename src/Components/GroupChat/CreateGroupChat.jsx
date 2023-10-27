import React, { useState } from 'react';
import { CgPushLeft } from 'react-icons/cg';
import AddFriends from './AddFriends';
import ChatCards from "../MsgCards/ChatCards"
import NewGroupChat from './NewGroupChat';

const CreateGroupChat = ({handleBackButton}) => {
    const [newGroupChat, setNewGroupChat] = useState(false);
    const [groupChatMember, setGroupChatMember] = useState(new Set());
    const [query, setQuery] = useState("");
 
    const handleRemoveFriend = (item) => {
        groupChatMember.delete(item);
        setGroupChatMember(groupChatMember);
    }

    const handleSearch = (e) => {

    }

    return (
        <div className='h-full w-full'>
            {!newGroupChat && 
            <div>
                <div className='flex items-center space-x-10 bg-[#90c4ff]  pt-5 px-5 pb-4 '>
                    <CgPushLeft className='cursor-pointer text-3xl'/>
                    <p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add People to Group Chat</p>
                </div>
                <div className='relative px-3 py-4 '>
                    <div className='flex space-x-2 flex-wrap space-y-2 '>
                        {groupChatMember.size > 0 && 
                        Array.from(groupChatMember).map((item) => 
                        <AddFriends 
                        handleRemoveFriend={()=>{handleRemoveFriend(item)}} 
                        Friends={item}/>)}
                    </div>
                    <input 
                    type="text"
                    onChange={(e) => {
                        handleSearch(e.target.value);
                        setQuery(e.target.value);
                    }}
                    className='outline-none  border-b-2 bg-[#ffece3] border-orange-400 p-2 w-[70%]'
                    placeholder='search friends here' 
                    value={query}/>
                </div>

                <div className=' overflow-y-scroll h-[50.2vh]'>
                    {query && [1, 1, 1, 1, 1].map((item) => <div onClick={() => {
                        groupChatMember.add(item)
                        setGroupChatMember(groupChatMember)
                        setQuery("")}}
                        key={item?.id}>
                        <br />
                        <ChatCards/>
                    </div>)}
                </div>
                <div className='bottom-10 py-10 items-center flex justify-center '>
                    <div onClick={()=>{
                        setNewGroupChat(true);
                    }}
                    className='rounded-full p-4 cursor-pointer bg-[#3288ff]'>
                        <p className='font-bold text-3xl items-center'>Continue</p>
                    </div>
                </div>
            </div>}
            {newGroupChat && <div>
                <NewGroupChat/>
                </div>}
        </div>
    )
}

export default CreateGroupChat;