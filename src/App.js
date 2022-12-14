
import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';

function App() {

  const [user, loading] = useAuthState(auth);
  return (
  
    <div className="app">
      <Router>
        {!user ? (<Login />) : (
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
        )}
  
    </Router>
      </div>

  );
}

export default App;

const AppBody = styled.div`
display:flex;
height:100vh;
`;

