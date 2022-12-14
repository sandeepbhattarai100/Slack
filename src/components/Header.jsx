import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import { auth } from '../firebase';
import { useAuthState} from 'react-firebase-hooks/auth'

function Header() {
  const [user] = useAuthState(auth);
  
 
  return (
    <HeaderContainer>
      {/* header left */}
      <HeaderLeft>
      
        <Avatar
          onClick={()=>{auth.signOut()}}
          src={user?.photoURL}
          alt={user?.displayName}
          
        />
       
<AccessTimeIcon/>
      </HeaderLeft>
   
      {/* header search */}
      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder="search sandyee"/>

      </HeaderSearch>
      {/* header right */}
      <HeaderRight>
      <HelpIcon/>
      </HeaderRight>
   </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
display:flex;
position:fixed;
width:100%;
align-items:center;
justify-content:space-between;
padding:10px 0;
background-color: var(--slack-color);
color:white;
`;

const HeaderLeft = styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px;

> .MuiSvgIcon-root{
margin-left:auto;
margin-right:30px;
}
`;

const HeaderAvatar = styled(Avatar)`
cursor:pointer;

:hover{
  opacity:0.8;
}
`;
const HeaderSearch = styled.div`
flex:0.4;
opacity:1;
background-color:#421f44;
text-align:center;
display:flex;
justify-content:center;
align-items-center;
padding:10px 0;
color:gray;
border-radius:5px;
border:1px solid gray;

>input{
  min-width:30vw;
  text-align:center;
  border:none;
  outline:none;
  background-color:transparent;
  color:white;
}

`;
const HeaderRight = styled.div`
flex:0.3;
display:flex;
align-items:flex-end;

> .MuiSvgIcon-root{
margin-left:auto;
margin-right:20px;
}
`;