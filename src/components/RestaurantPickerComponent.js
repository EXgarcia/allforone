
import { GetRestaurantPickerAmer, GetRestaurantPickerAs, GetRestaurantPickerMex } from "../Services/DataServices";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';


export default function SayHelloComponent() {
    const [restaurantPicker, setRestaurantPicker] = useState('');
    

    return <div className="bgRes">

        <h1 className="title">Restaurant Picker</h1> 
        
       
        <Container className="cenPage">
            
            <Row>
                <Col>
                <p className="outHello" style={{ height:'75px', width:'200px'}} >{restaurantPicker}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button  style={{ height:'75px', width:'200px'}} onClick={async () => {
                    setRestaurantPicker(await GetRestaurantPickerMex());
                }} variant='warning'>Mexican Food</Button>
                </Col>
                <Col>
                <Button  style={{ height:'75px', width:'200px'}} onClick={async () => {
                    setRestaurantPicker(await GetRestaurantPickerAs());
                }} variant='warning'>Asian Food</Button>
                </Col>
                <Col>
                <Button  style={{ height:'75px', width:'200px'}} onClick={async () => {
                    setRestaurantPicker(await GetRestaurantPickerAmer());
                }} variant='warning'>American Food</Button>
                </Col>
            </Row>
        </Container>

     
    </div>
}