import React from 'react'
import styled from 'styled-components';

function MessageComponent({message,name,timestamp,userImage}) {
  return (
      <MessageContainer>
          <img src={userImage}></img>
          <MessageInfo>
              <h4>{name} <span>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
              <p>{message}</p>
          </MessageInfo>
    </MessageContainer>
  )
}

export default MessageComponent;

const MessageContainer = styled.div`
display:flex;
align-items:center;
padding:20px;

>img{
    height:50px;
    border-radius:8px;
}
`;
const MessageInfo = styled.div`
padding-left:10px;

>h4>span{
    color:lightgrey;
    font-size:12px;
    font-weight:400;
}
`;