import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import ChatInput from './ChatInput';

import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';


function Chat() {
    const roomId = useSelector(selectRoomId);
  return (
     
          <ChatContainer>
          <>
              <Header>
                  <HeaderLeft>
                      <h4>#Room-Name</h4>
                      <StarBorderOutlined/>
                  </HeaderLeft>
                  <HeaderRight>
                      <p><InfoOutlined/>Detailo</p>
                  </HeaderRight>
              </Header>
              
              <ChatInput ChannelId={ roomId} ChannelName="Sandyee" />
          </>
        
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
