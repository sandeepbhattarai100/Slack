
import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
  
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Chat/>
            {/* <Routes>
              <Route path='/' exact>

            </Route>
        </Routes> */}
          </AppBody>
         
        </>
    </Router>
      </div>

  );
}

export default App;

const AppBody = styled.div`
display:flex;
height:100vh;
`;

