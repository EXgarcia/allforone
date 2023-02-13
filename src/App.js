import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Container, Row, Col, Nav, Button } from "react-bootstrap";

import SayHelloComponent from "./components/SayHelloComponent";
import AskingQuestionsComponent from "./components/AskingQuestionsComponent";
import Adding2NumberComponent from "./components/addTwoNumbersComponent";
import GreaterThanOrLessThanComponent from "./components/GreaterThanOrLessThanComponent";
import MadLibComponent from "./components/MadLibComponent";
import OddOrEvenComponent from "./components/OddOrEvenComponent";
import ReverseItComponent from "./components/ReverseItComponent";
import StudentDirectoryComponent from "./components/StudentDirectoryComponent";
import RestaurantPickerComponent from "./components/RestaurantPickerComponent";



import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './components/HomeComponent';


function App() {
  return (
    
    <BrowserRouter> 

        <Routes>
          <Route path='/' element={<HomeComponent />} />
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
  </BrowserRouter>
 

  );
}



export default App;
