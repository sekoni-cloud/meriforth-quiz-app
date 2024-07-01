import './quiz-room.css';
//import RoomAndUsersColumn from './RoomAndUsers';
import SendMessage from './SendMessage';
import MessagesAdmin from './MessagesAdmin';
import { useState } from 'react';

const Chat = ({ username, room, socket }) => {
    const [event, setEvent] = useState([{}]);
    //const [query, setQuery] = useState();
    return (
    <div className="">
        {/*<RoomAndUsersColumn socket={socket} username={username} room={room} />*/}

        <div>
        <SendMessage 
            socket={socket} 
            username={username} 
            room={room}
        />
        <MessagesAdmin 
        socket={socket} 
        event={event} 
        setEvent = {setEvent}
        //query = {query}
        //setQuery = {setQuery}
        />
        </div>
    </div>
    );
};

export default Chat;