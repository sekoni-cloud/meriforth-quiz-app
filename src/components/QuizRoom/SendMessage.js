import { Button } from 'react-bootstrap';
import  './quiz-room.css';
import React, { useState } from 'react';

const SendMessage = ({ socket, username, room}) => {
    const [message, setMessage] = useState();

    const sendMessage = () => {

    if (message !== '') {
        const __createdtime__ = Date.now();
        //setQuery(message)
        // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
        socket.emit('send_message', { username, room, message, __createdtime__ });
        //console.log(query);
        setMessage('');
        
    }
    };

    return (
    <div className="sendMessageContainer">
        <div className="mt-1">
                        <label htmlFor="header-search" 
                        className="search-text"><h4
                        style={{fontSize:'100%'}}>Pick a number :  </h4></label>
                        <input 
                        onChange={(e) => {setMessage(e.target.value);}}
                        value={message}
                        className="search-container"
                        />
                        <Button
                        size={40} 
                        onClick={sendMessage}
                        >
                            Pick
                        </Button>
                    </div>
    </div>
    );
};

export default SendMessage;