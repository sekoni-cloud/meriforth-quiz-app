//import { useState } from 'react';
import '../styles/welcome-page.css';
import {useNavigate} from "react-router-dom";

export default function WelcomePage ({username,setUsername,room, setRoom, socket, loggedIn, setLoggedIn}){ 
  const navigate = useNavigate();

    const joinRoom =()=>{
      setLoggedIn(true)
      if(room !== '' && username !== ""){
        socket.emit('join_room',{username, room});
        
      }
      if(username ==="admin223")
      {
        navigate('/chatroom',{replace:true});
        setLoggedIn(true);
        console.log(loggedIn);
      }else{
        navigate('/chatroom-users', {replace:true});
      }
      
    }
  return (
    <div className="welcome-container">
      <div className="formContainer">
        <h1>{`<>Welcome To Meriforth Quiz</>`}</h1>
        <p></p>
        <input className="welcome-input" 
          placeholder='Username...' 
          onChange={(e)=>setUsername(e.target.value)}
        />

        <select 
          className="welcome-input"
          onChange={(e)=>setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value='Quiz Room'>Quiz Page</option>
        </select>

        <button 
        className='btn btn-secondary'
        style={{width:'100%'}}
        onClick={joinRoom}
        >Join Room</button>
      </div>
    </div>
  );
};

