import './quiz-room.css'; 
//import RoomAndUsersColumn from './RoomAndUsers';
//import SendMessage from './SendMessage';
import Messages from './Messages';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const ChatUsers = ({ username, room, socket }) => {
    const [event, setEvent] = useState([{}]);
    return (
    <div className="">
        <div>
            <Container>
                <Row>
                    <div className="school"><h3>Meriforth College Quiz Competition</h3></div>
                    <p className='p-text'>Welcome {username} to Meriforth Quiz Room</p>
                </Row>
            </Container>
        </div>
        {/*<RoomAndUsersColumn socket={socket} username={username} room={room} />*/}

        <div>
        <Messages 
        socket={socket} 
        event={event} 
        setEvent = {setEvent}
        room={room}
        />

        </div>
    </div>
    );
};

export default ChatUsers;