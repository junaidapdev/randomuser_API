import React,  { useEffect, useState } from "react";
import {Container, Row, Col, Card} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Axios from "axios"
import MyCard from './Card'

function App() {
const [details, setDetails] = useState({});

const fetchDetails = async () => {
    const {data} = await Axios.get("https://randomuser.me/api/")

    const details = data.results[0];

    setDetails(details);

}

useEffect(() => {
  fetchDetails();
}, [])


  return (
    <Container className="p-4 bg-primary App">
       <Row>
        <Col className="offset-md-4 mt-4" md={4}>
          <MyCard details={details}/>
        </Col>
       </Row>
    </Container>
    
  );
}

export default App;
