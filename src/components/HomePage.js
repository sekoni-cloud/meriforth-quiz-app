import React from "react";
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Button} from "react-bootstrap";
import "../index";
import Event from "./Event";
import {data} from "./questions2"

export default function HomePage(){
    
    
    const events =[
        {
            id: 1000,
            instruction: "Choose the option that best conveys the meaning of the underlined portion in the following sentence;",
            question:
                "Only the [small fry] get punished for such social misdemeanors",
            option:["Small boys","Unimportant people","Frightened people","Frivolous people"],
            answer: "B. Small Fry is a term used to describe an insignificant person. It means insignificant people or things.",
            flag: false
        },
        {
            id: 2000,
            instruction: "Choose the option that best conveys the meaning of the underlined portion in the following sentence;",
            question:
                "Only the [small fry] get punished for such social misdemeanors",
            option:["Small boys","Unimportant people","Frightened people","Frivolous people"],
            answer: "B. Small Fry is a term used to describe an insignificant person. It means insignificant people or things.",
            flag: false
        }

    ];
    const[event, setEvent] = useState(events);
    const[query, setQuery] =useState("");
    const[input, setInput] = useState("");
    useEffect(()=>{
        document.title = "Quiz"
    }, [])
    
    const searchQuestion = (id)=>{
        const question = data.find(item=>item.id === id)
        return question
    }
    const addEvent = (id) => {
        
        var newArray = [...event];
        let tempData = [...data]
        const index = tempData.indexOf(searchQuestion(id));
        const newData = tempData[index];
        //var newData = searchQuestion(input);
        console.log(newData);
        newArray.push({
            id: newData?.id,
            instruction: newData?.instruction,
            question: newData?.question,
            option: newData?.option,
            flag: newData?.flag
        });
        console.log(newArray);
        setEvent(newArray);
        
    };
   
    const handleInputChange=(e)=>{
        
        setInput(e.target)
    }
    const clearInput=()=>{
        setInput("")
    }
    return(
        <React.Fragment>
            <Container>
                <br/>
                <Row>
                    <Col md={9} className="mb-auto">
                    <div className="school"><h3>Meriforth College Quiz Competition</h3></div>
                    <br/>
                    <div className="mt-1">
                        <label htmlFor="header-search" 
                        className="search-text"><h4
                        style={{fontSize:'100%'}}>Pick a number :  </h4></label>
                        <input 
                        value={input}
                        placeholder="Choose a number..." 
                        className="search-container"
                        onChange={event=>{handleInputChange(event.target.value);setQuery(Number(event.target.value));console.log(input);}}/>
                        <Button 
                        size={40} 
                        type="submit"
                        onClick={(e)=>{console.log(query);addEvent(query); clearInput()}}>
                            Pick
                        </Button>
                    </div>
                        <div >
                            {event.map(item => (
                                <Event
                                key={item.id}
                                id={item.id}
                                state = {item}
 
                                />
                            ))}
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="school"><p>Meriforth College Quiz. GoodLuck!!!</p></div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}