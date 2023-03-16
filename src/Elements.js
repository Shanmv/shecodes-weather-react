import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Elements(props) {
  return (
    <Container className="container text-center wx-factors">
      <Row>
        <Col>Precipitation</Col>
        <Col>3%</Col>
        <Col>Humidity</Col>
        <Col>{props.humidity}</Col>
        <Col>Windspeed</Col>
        <Col>{props.wind}</Col>
      </Row>
    </Container>
  );
}
