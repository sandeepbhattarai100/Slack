import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase';

function ChatInput({ ChannelName, ChannelId }) {
    const [input, setInput] = useState('');
    const sendMessage = (e) => {
        e.preventDefault();
        console.log(ChannelId);
        if (!ChannelId) {
            return false;
        }

        db.collection('rooms').doc('ChannelId').collection('messages').add({
            message: input,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            name:"sandeep bhattarai"
        });
        setInput("");
        
    };
  return (  
      <ChatContainer>
          <form>
          <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='messagee' />
              <Button type='submit' onClick={sendMessage}>Send</Button>
              </form>
   </ChatContainer>
  )
}

export default ChatInput;

const ChatContainer = styled.div`
border-radius:20px;
margin:20px;
 >form{
    display:flex;
    justify-contens:center;
    position:relative;
 }
 > form > input{
    position:fixed;
    bottom:30px;
    width:60%;
    padding:20px;
    outline:none;
    border:1px solid gray;
    border-radius:5px;
 }
 >form >Button{
    display:none !important;
 }
`;