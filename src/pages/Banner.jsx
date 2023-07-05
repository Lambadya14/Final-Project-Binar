import React from "react";
import BookingForm from "../components/Form/BookingForm";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/Banner.css";

function Banner() {
  return (
    <>
      <Row
        className="d-flex justify-content-center"
        style={{
          width: "100%",
          height: "10px",
          marginBottom: "100px",
        }}
      >
        <Col
          className="banner mb-5 p-0"
          style={{ width: "100%", marginTop: "100px" }}
        >
          <img
            src={require("../assets/img/brn.svg").default}
            alt="banner"
            style={{
              width: "100%",
              height: 225,
              borderRadius: 20,
              marginBottom: "-50px",
              marginTop: "-50px",
            }}
          />
        </Col>
      </Row>
      <Container
        className="border-0 bg-white "
        style={{
          boxShadow: "0 0px 10px 0 rgba(0, 0, 0,  0.15)",
          borderRadius: 12,
          fontFamily: "Poppins",
          width: "100%",
          maxWidth: "978px",
          marginTop: "290px",
        }}
      >
        <Card.Body style={{ width: "100%" }}>
          <Card.Text>
            <BookingForm />
          </Card.Text>
        </Card.Body>
      </Container>
    </>
  );
}

export default Banner;
