
import { GetFirstNameDirectory, GetLastNameDirectory, GetSlackNameDirectory, GetEmailDirectory } from "../Services/DataServices";
import { Button,Container, Row, Stack } from 'react-bootstrap';
import { useState } from 'react';


export default function StudentDirectoryComponent() {
    const [studentDirectory, setStudentDirectory] = useState([]);
    let [studentDirectoryInput, setStudentDirectoryInput] = useState('');

    return <div className="bgStud">
        <h1 className="title">Student Directory</h1>

       
       <Container className="midPage">
            
            <Row>
                
                <Stack direction="vertical" gap={2}>
        <p className="introHello" style={{ height:'75px'}}> Let's look up some of our fellow classmates.</p>

        <input placeholder="Enter your criteria here." onChange={(e) => setStudentDirectoryInput(e.target.value)}></input>

        <Button onClick={async () => {
            setStudentDirectory(await GetFirstNameDirectory(studentDirectoryInput));
        }} variant="primary">First Name</Button>{""}

        <Button onClick={async () => {
            setStudentDirectory(await GetLastNameDirectory(studentDirectoryInput));
        }} variant="primary">Last Name</Button>{""}

        <Button onClick={async () => {
            setStudentDirectory(await GetSlackNameDirectory(studentDirectoryInput));
        }} variant="primary">Slack Name</Button>{""}

        <Button onClick={async () => {
            setStudentDirectory(await GetEmailDirectory(studentDirectoryInput));
        }} variant="primary">Email</Button>{""}
        
        <p className="outHello" style={{ height:'30px'}}>{studentDirectory[0]}</p>
        <p className="outHello" style={{ height:'30px'}}>{studentDirectory[1]}</p>
        <p className="outHello" style={{ height:'30px'}}>{studentDirectory[2]}</p>
        <p className="outHello" style={{ height:'30px'}}>{studentDirectory[3]}</p>
        <p className="outHello" style={{ height:'30px'}}>{studentDirectory[4]}</p>
        </Stack>
        </Row>
        </Container>
        
    </div>
}


///^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
