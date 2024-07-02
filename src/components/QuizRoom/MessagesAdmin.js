import './quiz-room.css';
import { useState, useEffect, useRef, useCallback} from 'react';
import {data} from "../questions2"
import AdminPageEvent from "../AdminPageEvent";
import { Container} from 'react-bootstrap';

export default function Messages ({ socket, query/*, event, setEvent*/ }){
    const [messagesRecieved, setMessagesReceived] = useState([]);
    const [event, setEvent] = useState([]);
    const messagesColumnRef = useRef(null);
    
    const searchQuestion = (id)=>{
      const question = data.find(item=>item.id === id)
      console.log(question);
      return question
    }
    const addEvent = useCallback((id)=> {
      console.log(id);
      var newArray = [...event];
      console.log(newArray);
      let tempData = [...data]
      //console.log(tempData);
      const index = tempData.indexOf(searchQuestion(Number(id)));
      console.log(index);
      const newData = tempData[index];
      //var newData = searchQuestion(input);
      console.log(newData);
      newArray.push({
          answer: newData?.answer,
          id: newData?.id,
          instruction: newData?.instruction,
          question: newData?.question,
          option: newData?.option,
          flag: newData?.flag
      });
      console.log(newArray);
      setEvent(newArray);
  
  },[event])
  // Runs whenever a socket event is recieved from the server
  useEffect(() => {
    socket.on('receive_message', (data) => {
      
      console.log("Here is "+data);
      
      //addEvent(data.message)
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          __createdtime__: data.__createdtime__,
        },
      ]);
      console.log(messagesRecieved);
      //addEvent(data.message)
      if(!isNaN(data.message)){
        //console.log(data.message);
        addEvent(data.message)
      }
    });

    // Remove event listener on component unmount
    return () => socket.off('receive_message');
  }, [socket,messagesRecieved, addEvent]);

    

  // Scroll to the most recent message
  useEffect(() => {
    messagesColumnRef.current.scrollTop =
      messagesColumnRef.current.scrollHeight;
  }, [messagesRecieved]);

  

  /*function sortMessagesByDate(messages) {
    return messages.sort(
      (a, b) => parseInt(a.__createdtime__) - parseInt(b.__createdtime__)
    );
  }*/

  // dd/mm/yyyy, hh:mm:ss
 /* function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }*/

  return (
    <div className="" ref={messagesColumnRef}>
      
        <div >
          <Container>
            {event.map(item => (
                <AdminPageEvent
                key={item.id}
                id={item.id}
                state = {item}

                />
            ))}
            <br/>
          </Container>
          
      </div>
    </div>
  );
};

