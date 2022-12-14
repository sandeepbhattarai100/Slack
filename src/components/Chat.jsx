import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import ChatInput from './ChatInput';

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import MessageComponent from './MessageComponent';


function Chat() {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
        
    )
    const [roomMessages,loading] = useCollection(
        roomId &&
        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
    );

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behaviour: "smooth",
            block: "nearest",
            inline: "start"
        });  
    },[roomId,loading])

  return (
     
      <ChatContainer>
          {roomDetails && roomMessages && (
              <>
              <Header>
                  <HeaderLeft>
                      <h4>{roomDetails?.data().name}</h4>
                      <StarBorderOutlined/>
                  </HeaderLeft>
                  <HeaderRight>
                      <p><InfoOutlined/>Detailo</p>
                  </HeaderRight>
              </Header>

              {roomMessages?.docs.map((doc) => {
                  const { message, name, timestamp, userImage } = doc.data();
                  return (
                      <MessageComponent
                          message={message}
                          name={name}
                          key={doc.id}
                          timestamp={timestamp}
                          userImage={userImage}
                      />
                  );
              })}
              
              <ChatInput chatRef={chatRef} ChannelId={ roomId} ChannelName={roomDetails?.data().name} />
              <ChatBottom ref={chatRef}/>
              </>
        
          )}
          
      </ChatContainer >

  )
}

export default Chat;

const ChatContainer = styled.div`
overflow-y:scroll;
margin-top:60px;
flex:0.7;
flex-grow:1;

`;
const Header = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-bottom:1px solid lightgrey;`;
const HeaderLeft = styled.div`
display:flex;
align-items:center; 
>h4{
    text-transform:lowercase;
    margin-right:10px;
}
h4 >.MuiSvgIcon-root{
    
}
`;
const HeaderRight = styled.div`

>p{
  display:flex;
  align-items:center;
  font-size:14px;       
}
> p > .MuiSvgIcon-root{
    font-size:14px;
    margin-right:5px;
}
`;

const ChatBottom = styled.div`
padding-bottom:200px;
`;
