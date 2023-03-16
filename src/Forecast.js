import React from "react";
import "./Forecast.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

export default function displayForecast() {
  return (
    <Container className="container text-center">
      <Row className="row">
        <Col className=" forecastTemp ">
          Mon<div>icon</div>
          <div>3°C</div>
        </Col>
        <Col className=" forecastTemp">
          Tues<div>icon</div>
          <div>3°C</div>
        </Col>
        <Col className="forecastTemp">
          Wed<div>icon</div>
          <div>4°C</div>
        </Col>
        <Col className=" forecastTemp">
          Thurs<div>icon</div>
          <div>6°C</div>
        </Col>
        <Col className=" forecastTemp">
          Fri<div>icon</div>
          <div>1°C</div>
        </Col>
        <Col className=" forecastTemp">
          Sat<div>icon</div>
          <div>5°C</div>
        </Col>
      </Row>
    </Container>
  );
}
