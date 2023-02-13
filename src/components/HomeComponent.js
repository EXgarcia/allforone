//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SayHelloComponent from "./SayHelloComponent";
import AskingQuestionsComponent from "./AskingQuestionsComponent";
import Adding2NumberComponent from "./addTwoNumbersComponent";
import GreaterThanOrLessThanComponent from "./GreaterThanOrLessThanComponent";
import MadLibComponent from "./MadLibComponent";
import OddOrEvenComponent from "./OddOrEvenComponent";
import ReverseItComponent from "./ReverseItComponent";
import StudentDirectoryComponent from "./StudentDirectoryComponent";
import RestaurantPickerComponent from "./RestaurantPickerComponent";
import {Button, Nav, Navbar, Container, Row, Col} from 'react-bootstrap';
import {Link, Routes, Route,} from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';



export default function HomeComponent(){
return<>
<div className="bgImage">
<div class="opacity-50">
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Container>
      </Navbar >
      </div>
  <Container>
    <Row>
      <Col className="title">
      <h1>ALL FOR ONE</h1>
      </Col>
    </Row>
  </Container>

<Container>
  <Row>
    <Col className="rowOne">
    <Stack direction="horizontal" gap={5}>
<Button variant='secondary' as={Link} to='SayHello' style={{ height:'75px', width:'200px'}}><h3>Say Hello</h3></Button> 
<Button variant='secondary' as={Link} to='AskingQuestions' style={{ height:'75px', width:'200px'}}><h3>Asking Questions</h3></Button> 
<Button variant='secondary' as={Link} to='Adding2Numbers' style={{ height:'75px', width:'200px'}}><h3>Adding 2 Numbers</h3></Button> 
    </Stack>
     </Col>
     </Row> 
     </Container>

     <Container>
  <Row>
    <Col className="rowTwo">
    <Stack direction="horizontal" gap={5}>
<Button variant='secondary' as={Link} to='MadLib' style={{ height:'75px', width:'200px'}} ><h3>MadLib</h3> </Button> 
<Button variant='secondary' as={Link} to='OddOrEven' style={{ height:'75px', width:'200px'}} ><h3>Odd Or Even</h3></Button> 
<Button variant='secondary' as={Link} to='GreaterThanOrLessThan' style={{ height:'75px', width:'200px'}}><h3>Greater Than Or Less Than</h3></Button> 
</Stack>
     </Col>
     </Row> 
     </Container>


<Container>
  <Row>
    <Col className="rowThree">
<Stack direction="horizontal" gap={5}>
<Button variant='secondary' as={Link} to='ReverseIt' style={{ height:'75px', width:'200px'}}><h3>Reverse It</h3></Button> 
<Button variant='secondary' as={Link} to='RestaurantPicker' style={{ height:'75px', width:'200px'}}><h3>Restaurant Picker</h3></Button> 
<Button variant='secondary' as={Link} to='StudentDirectory' style={{ height:'75px', width:'200px'}}><h3>Student Directory</h3></Button> 
</Stack>
     </Col>
     </Row> 
     </Container>


<Routes>
  <Route path="SayHello" element={<SayHelloComponent />} />
  <Route path="AskingQuestions" element={<AskingQuestionsComponent />} />
  <Route path="Adding2Numbers" element={<Adding2NumberComponent />} />

  <Route path="MadLib" element={<MadLibComponent />} />
  <Route path="OddOrEven" element={<OddOrEvenComponent />} />
  <Route path="GreaterThanOrLessThan" element={<GreaterThanOrLessThanComponent />} />

  <Route path="ReverseIt" element={<ReverseItComponent />} />
  <Route path="RestaurantPicker" element={<RestaurantPickerComponent />} />
  <Route path="StudentDirectory" element={<StudentDirectoryComponent />} />
</Routes>
</div>
</>
}