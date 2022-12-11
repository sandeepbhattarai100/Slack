import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DraftsIcon from '@mui/icons-material/Drafts';
import GroupIcon from '@mui/icons-material/Group';
import AppsIcon from '@mui/icons-material/Apps';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';


function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection('rooms'));

  return (
      <SidebarContainer>
          <SidebarHeader>
              <SidebarInfo>
                 <h2> sandyee bhattarai</h2> 
                  <h3>
                      <FiberManualRecordIcon />
                      sandeep bhattarai
                  </h3> 
              </SidebarInfo>
              <CreateIcon/>
              
              
          </SidebarHeader>
          <SidebarOption Icon={MessageIcon} info="Threads" />
          <SidebarOption Icon={DraftsIcon}  info="Saved Icons" />
          <SidebarOption Icon={BookmarkBorderIcon} info="Channel Browser" />
          <SidebarOption Icon={GroupIcon} info="people and user groups" />
          <SidebarOption Icon={AppsIcon} info="Apps" />
          <SidebarOption Icon={KeyboardArrowUpIcon} info="Show less" />
          <hr />
          <SidebarOption Icon={KeyboardArrowDownIcon} info="Channels" />
          <hr />
          <SidebarOption Icon={AddIcon} addChannelOption info="Add Channels" />
          

            
          {channels?.docs.map(doc => (
              <SidebarOption
                  key={doc.id}
                  id={doc.id}
                  info={doc.data().name}
                  
              />
              
       ))}

 </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
flex:0.3;
color:white;
background-color: var(--slack-color);
border-top:1px solid #49274b;
max-width:260px;
margin-top:60px;

align-items:center;

>hr{
    border: 1px solid #49274b;
}
`;
const SidebarHeader = styled.div`
padding:13px;
border-bottom:1px solid grey;
display:flex;


>.MuiSvgIcon-root{
    padding:10px;
    background-color:white;
    font-size:18px;
    border-radius:50%;
    color:#49274b;

}


`;
const SidebarInfo = styled.div`

flex:1;

>h2{
    font-size:15px;
    font-weight:600;
    margin-bottom:5px;
}
>h3{
    font-size:13px;
    font-weight:400;
display:flex;
align-items:center;

>.MuiSvgIcon-root{
    color:green;
}
}


`;
