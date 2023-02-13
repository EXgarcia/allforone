
import { GetSayHello } from "../Services/DataServices";
import { Button, Container, Row, Stack } from 'react-bootstrap';
import { useState } from 'react';


export default function SayHelloComponent() {
    const [sayHello, setSayHello] = useState('');
    let [sayHelloInput, setSayHelloInput] = useState('');
    const handleUserInput = async () =>{

    const pattern = /^[a-zA-Z]+$/;
    if(pattern.test(sayHelloInput)){
    console.log(pattern)

    let response = await GetSayHello(sayHelloInput)
    setSayHello(response);
    }else{
        console.log(alert('Enter a valid response please.'))
    }

    }

    return <div className="bgSay">
        <h1 className="title">Say Hello</h1>

        <Container className="helloPage">
            
            <Row>
                <Stack direction="vertical" gap={3}>
                    
                <p className="introHello" style={{ height:'75px'}}>Hello and Welcome! Now tell me mighty hero, what is your name?</p>

        <input placeholder="Enter Name here" style={{width:200 }} className="width" onChange={(e) => setSayHelloInput(e.target.value)}></input>

        <Button style={{width:100 }} onClick={handleUserInput} variant="primary">Say Hello</Button>
        
        <p className="outHello" style={{ height:'30px'}}>{sayHello}</p>
        </Stack>
        </Row>
        </Container>
        
    </div>
}