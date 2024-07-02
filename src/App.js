import './App.css';
import AdminPage from './components/AdminPage';
import HomePage from './components/HomePage';
import{Routes,Route} from 'react-router-dom';
import { MyContext } from './Context';
import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import io from 'socket.io-client';
import Chat from './components/QuizRoom/Index';
import ChatUsers from './components/QuizRoom/Index2';
import PrivateRoute from './components/PrivateRoute';

const socket = io("https://meriforth-quiz-server.netlify.app");
//const socket = io("http://localhost:8000");
function App() {
  const [questions, setQuestions] = useState([]);
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(null)
  const [room, setRoom] = useState('');
  return (
    <div className="App">
      <div>
        <MyContext.Provider
          value={{questions, setQuestions}} >
        </MyContext.Provider>
      </div>
      <Routes>
        <Route 
          path="/" 
          element = {
            <WelcomePage
              username={username}
              setUsername={setUsername}
              room={room}
              setRoom={setRoom}
              socket={socket}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route
          path="/chatroom" 
            element = {
              <PrivateRoute
              loggedIn={loggedIn}>
                <Chat
                username={username}
                room={room}
                socket={socket}
                />
              </PrivateRoute>
          }
        />
        <Route
          path="/chatroom-users"
          element={
            <PrivateRoute
            loggedIn={loggedIn}>
              <ChatUsers
              username={username}
              room={room}
              socket={socket}
              />
            </PrivateRoute>
          }
        />
        <Route path='/admin223' element={<AdminPage/>}/>
        <Route path="/quiz" element={<HomePage/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
