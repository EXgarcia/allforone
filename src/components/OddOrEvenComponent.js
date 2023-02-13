import { GetOddOrEven } from "../Services/DataServices";
import { Button, Container, Row, Stack } from 'react-bootstrap';
import { useState } from 'react';


export default function OddOrEvenComponent() {
    const [oddOrEven, setOddOrEven] = useState('');
    let [oddOrEvenInput, setOddOrEvenInput] = useState('');
    const handleUserInput = async () =>{

        const pattern = /^\d+$/;
        if(pattern.test(oddOrEvenInput)){
        console.log(pattern)
    
        let response = await GetOddOrEven(oddOrEvenInput)
        setOddOrEven(response);
        }else{
            console.log(alert('Enter a valid response please.'))
        }
    
        }

    return <div className="bgOdd">
                  <h1 className="title">Odd or Even</h1>
        
        <Container className="cenPage">
           
                    
                    <Row>
                        <Stack direction="vertical" gap={3}>
                        <p className="introHello" style={{ height:'75px'}}> Enter numbers to see if they are odd or even.</p>
        <input placeholder="Enter Here" onChange={(e) => setOddOrEvenInput(e.target.value)}></input>

        <Button onClick={handleUserInput} variant="primary">Odd? Even?</Button>
        
        <p>{oddOrEven}</p>
        </Stack>
        </Row>
        </Container>
    </div>
}