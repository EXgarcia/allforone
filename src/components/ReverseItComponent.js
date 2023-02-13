import { GetReverseIt } from "../Services/DataServices";
import { Button, Container, Row, Stack } from 'react-bootstrap';
import { useState } from 'react';


export default function ReverseItComponent() {
    const [ReverseIt, setReverseIt] = useState('');
    let [reverseItInput, setReverseItInput] = useState('');
    const handleUserInput = async () =>{

        const pattern = /^[a-zA-Z0-9]+$/;
        if(pattern.test(reverseItInput)){
        console.log(pattern)
    
        let response = await GetReverseIt(reverseItInput)
        setReverseIt(response);
        }else{
            console.log(alert('Enter a valid response please.'))
        }
    
        }

    return <div className="bgRev">
     <h1 className="title">Reverse It</h1>
        
<Container className="cenPage">
   
            
            <Row>
                <Stack direction="vertical" gap={3}>
                <p className="introHello" style={{ height:'75px'}}> Enter words or numbers to reverse.</p>
                    
        <input placeholder="Enter here" onChange={(e) => setReverseItInput(e.target.value)}></input>
        <Button onClick={handleUserInput} variant="danger">Reverse!</Button>
        <p className="outHello" style={{ height:'30px'}}>{ReverseIt}</p>
        </Stack>
        </Row>
        </Container>
        
    </div>
}