import { GetAskingQuestions } from "../Services/DataServices";
import { Button, Container,Row, Stack } from 'react-bootstrap';
import { useState } from 'react';


export default function AskingQuestionsComponent() {
    const [askingQuestion, setAddingTwoNumbers] = useState('');
    let [askingQuestionsInput, setAskingQuestionsInput] = useState('');
    let [askingQuestionsInput2, setAskingQuestionsInput2] = useState('');
    const handleUserInput = async () =>{

        const pattern = /^[a-zA-Z]+$/;
        if(pattern.test(askingQuestionsInput, askingQuestionsInput2)){
        console.log(pattern)
    
        let response = await GetAskingQuestions(askingQuestionsInput, askingQuestionsInput2)
        setAddingTwoNumbers(response);
        }else{
            console.log(alert('Enter a valid response please.'))
        }
    
        }
    return <div className="bgAsk">
        <h1 className="title">Asking Questions</h1>
         <Container className="helloPage">
            
            
            <Row>
                <Stack direction="vertical" gap={3}>
                <p className="introHello" style={{ height:'75px'}}>Hi, uhh, this might sound kind Of weird but uhh  may I<br></br> know your name and what time you woke up today?</p>
        <input placeholder="Enter Name here" onChange={(e) => setAskingQuestionsInput(e.target.value)}></input>

        <input placeholder="Enter Time here" onChange={(e) => setAskingQuestionsInput2(e.target.value)}></input>

        <Button onClick={handleUserInput} variant="primary">Enter</Button>
        
        <p className="outHello"  style={{ height:'30px'}}>{askingQuestion}</p>

        </Stack>
        </Row>
        </Container>

    </div>
}