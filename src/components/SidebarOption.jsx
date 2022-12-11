
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import { db } from '../firebase';

function SidebarOption({ Icon, info, addChannelOption,id }) {
    const dispatch = useDispatch(); 
    const addChannel = () => {
        
        const channelName = prompt("enter channel name");
        console.log(channelName);
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
     };
    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
roomId:id,
            }));
        }

     };
  
    return (
        <SidebarContainer
        onClick={addChannelOption ? addChannel : selectChannel}
        >
      
            {Icon && <Icon style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{info}</h3>
            ) : (
                <SidebarOptionChannel>
                      <span>#</span>{info}
                </SidebarOptionChannel>
            )}

 
          
        </SidebarContainer>
    );
}

export default SidebarOption


const SidebarContainer = styled.div`
display:flex;
font-size:12px;
align-items:center;

padding-left:2px;
cursor:pointer;

>h3{
    font-weight:600;
}
:hover{
    opacity:0.9;
    background-color:#340e36;
    // border-top:1px solid grey;
    // border-bottom:1px solid grey;
 
}
>span{
    padding:15px;
}

`;

const SidebarOptionChannel = styled.h3`
padding-left:15px;
`;

const SidebarInfo = styled.div`
margin-right:auto;
margin-left:20px;

>h3{
    font-size:15px;
    font-weight:600;

}
`;
