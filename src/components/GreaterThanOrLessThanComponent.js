import { GetGreaterThanOrLessThan } from "../Services/DataServices";
import { Button, Container, Row, Stack } from 'react-bootstrap';
import { useState } from 'react';


export default function GreaterThanOrLessThanComponent() {
    const [greatherThanOrLessThan, setGreaterThanOrLessThan] = useState('');
    let [greaterThanOrLessThanInput, setGreaterThanOrLessThanInput] = useState('');
    let [greaterThanOrLessThanInput2, setGreaterThanOrLessThanInput2] = useState('');
    const handleUserInput = async () =>{

        const pattern = /^\d+$/;
        if(pattern.test(greaterThanOrLessThanInput, greaterThanOrLessThanInput2)){
        console.log(pattern)
    
        let response = await GetGreaterThanOrLessThan(greaterThanOrLessThanInput, greaterThanOrLessThanInput2)
        setGreaterThanOrLessThan(response);
        }else{
            console.log(alert('Enter a valid response please.'))
        }
    
        }

    return <div className="bgGreat">
             <h1 className="title">Greater Than Or Less Than</h1>
        
        <Container className="cenPage">
           
                    
                    <Row>
                        <Stack direction="vertical" gap={3}>
                        <p className="introHello" style={{ height:'75px'}}> Enter numbers to see which is Greater or Less Than</p>
        <input placeholder="Enter Here" onChange={(e) => setGreaterThanOrLessThanInput(e.target.value)}></input>
        <input placeholder="Enter Here" onChange={(e) => setGreaterThanOrLessThanInput2(e.target.value)}></input>

        <Button onClick={handleUserInput} variant="danger">Enter</Button>
        
        <p className="outHello" style={{ height:'30px'}}>{greatherThanOrLessThan}</p>
        </Stack>
        </Row>
        </Container>
    </div>
}