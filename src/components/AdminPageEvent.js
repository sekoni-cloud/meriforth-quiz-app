import React from "react";
import { Container, Col, Row} from "react-bootstrap";
import "../index.css";

export default function AdminPageEvent({state}){
    var optionArr = state.option
    /*function Option({options}){
        const [selectedOption, setSelectedOption]=useState(null);
        

        const handleOptionChange=(option)=>{
            setSelectedOption(option)
        }
        return(
            <div> 
                <ul>
                    {options.map((option, index)=>{
                        <li key={index} options={option}>
                            <label>
                                <input
                                type="radio"
                                value={option}
                                checked={option}
                                onChange={()=>handleOptionChange(option)}/>
                                lion
                            </label>
                        </li>
                    })}
                </ul>
                <p>Selected Option:{selectedOption}</p>
            </div>
        )
    }*/
    return(
        <React.Fragment>
            <div className="">
                <div id="question">{"Question " + state.id}</div> <br/>
                <div id="line"></div>
                <Container>
                <div>{state.instruction && (
                    <p style={{fontSize: '18px', fontWeight:'bold', textAlign:'center'}} className="">
                    {state.instruction}
                    </p>
                    )}
                </div>
                
                </Container>
                
                <div id="question" className="">{state.question}</div>
                <Col>
                    <div className="option">
                        <ol type="A">
                            <li>{optionArr[0]?optionArr[0]:""}</li>
                            <li>{optionArr[1]?optionArr[1]:""}</li>
                            <li>{optionArr[2]?optionArr[2]:""}</li>
                            <li>{optionArr[3]?optionArr[3]:""}</li>
                            <li>{optionArr[4]?optionArr[4]:""}</li>
                        </ol>
                    </div>
    
                </Col>
                <Row className=""><p>{state.answer}</p></Row>
            </div>
            
        </React.Fragment>
    )
}