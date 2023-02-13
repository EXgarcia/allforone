import { GetMadLib} from "../Services/DataServices";
import { Button, Container, Row, Stack } from 'react-bootstrap';
import { useState } from 'react';


export default function MadLibComponent() {
    const [madLib, setMadLib] = useState('');
    let [madLibInput, setMadLibInput] = useState('');
    let [madLibInput2, setMadLibInput2] = useState('');
    let [madLibInput3, setMadLibInput3] = useState('');
    let [madLibInput4, setMadLibInput4] = useState('');
    let [madLibInput5, setMadLibInput5] = useState('');
    let [madLibInput6, setMadLibInput6] = useState('');
    let [madLibInput7, setMadLibInput7] = useState('');
    let [madLibInput8, setMadLibInput8] = useState('');
    let [madLibInput9, setMadLibInput9] = useState('');
    let [madLibInput10, setMadLibInput10] = useState('');
    const handleUserInput = async () =>{

        const pattern = /^[a-zA-Z]+$/;
        if(pattern.test(madLibInput, madLibInput2, madLibInput3, madLibInput4, madLibInput5, madLibInput6,madLibInput7, madLibInput8, madLibInput9, madLibInput10)){
        console.log(pattern)
    
        let response = await GetMadLib(madLibInput, madLibInput2, madLibInput3, madLibInput4, madLibInput5, madLibInput6,madLibInput7, madLibInput8, madLibInput9, madLibInput10)
        setMadLib(response);
        }else{
            console.log(alert('Enter a valid response please.'))
        }
    
        }
    

    return <div className="bgMad">
                <h1 className="title">Madlib</h1>

<Container className="midPage">
    
    <Row>
        <Stack direction="vertical" gap={2}>
            
        <p className="introHello" style={{ height:'75px', width:'500px'}}>List ten of you favorite pokemon!</p>
        <input placeholder="Enter Pokemon Here" onChange={(e) => setMadLibInput(e.target.value)}></input>
        <input placeholder="Enter Pokemon Here" onChange={(e) => setMadLibInput2(e.target.value)}></input>
        <input placeholder="Enter Pokemon Here" onChange={(e) => setMadLibInput3(e.target.value)}></input>
        <input placeholder="Enter Pokemon Here" onChange={(e) => setMadLibInput4(e.target.value)}></input>
        <input placeholder="Enter Pokemon Here" onChange={(e) => setMadLibInput5(e.target.value)}></input>
        <input placeholder="Enter Pokemon Here" onChange={(e) => setMadLibInput6(e.target.value)}></input>
        <input placeholder="Enter Pokemon Here" onChange={(e) => setMadLibInput7(e.target.value)}></input>
        <input placeholder="Enter Pokemon Here" onChange={(e) => setMadLibInput8(e.target.value)}></input>
        <input placeholder="Enter Pokemon Here" onChange={(e) => setMadLibInput9(e.target.value)}></input>
        <input placeholder="Enter Pokemon Here" onChange={(e) => setMadLibInput10(e.target.value)}></input>

        <Button onClick={handleUserInput} variant="primary">Enter</Button>
        
        <p className="outHello" style={{ height:'100px'}}>{madLib}</p>
        </Stack>
        </Row>
        </Container>
    </div>
}