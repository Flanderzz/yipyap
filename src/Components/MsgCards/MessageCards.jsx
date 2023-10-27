import React from "react";

const MessageCards = ({isReqUserMsg, content}) => {
    return(
        <div className={`py-2 px-2 rounded-md max-w-[50%] ${isReqUserMsg?"self-start bg-[#FFA622]" : "self-end bg-[#64C3ED]"}`}>
            <p>{content}</p>
        </div>
    );

}

export default MessageCards;