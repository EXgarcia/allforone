
import { GetAddingTwoNumbers } from "../Services/DataServices";
import { Button,Container, Row, Stack } from 'react-bootstrap';
import { useState } from 'react';


export default function AddingTwonumbersComponent() {
    const [addingTwoNumbers, setAddingTwoNumbers] = useState('');
    let [addingTwoNumbersInput, setAddingTwoNumbersInput] = useState('');
    let [addingTwoNumbersInput2, setAddingTwoNumbersInput2] = useState('');
    const handleUserInput = async () =>{

        const pattern = /^\d+$/;
        if(pattern.test(addingTwoNumbersInput, addingTwoNumbersInput2)){
        console.log(pattern)
    
        let response = await GetAddingTwoNumbers(addingTwoNumbersInput, addingTwoNumbersInput2)
        setAddingTwoNumbers(response);
        }else{
            console.log(alert('Enter a valid response please.'))
        }
    
        }

    

    return <div className="bgAdd">
        <h1 className="title">Adding Two Numbers</h1>

         <Container className="byePage">
            
            <Row>
                <Stack direction="vertical" gap={3}>
                <p className="introHello" style={{ height:'75px'}}>Hello! GoodBye!! Give me two numbers to add for you. <br></br> I dont want them do it yourself!!!</p>
        <input placeholder="Enter 1st number here" onChange={(e) => setAddingTwoNumbersInput(e.target.value)}></input>
        <input placeholder="Enter 2nd number here" onChange={(e) => setAddingTwoNumbersInput2(e.target.value)}></input>

        <Button onClick={handleUserInput} variant="primary">Enter</Button>
        
        <p className="outHello" style={{ height:'30px'}}>{addingTwoNumbers}</p>
        </Stack>
        </Row>
        </Container>

        
    </div>
    
}
