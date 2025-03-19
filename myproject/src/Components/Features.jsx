import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Leaf from "../assets/leaf.jpg";
import Earth from "../assets/earth.png";
import Work from "../assets/work culture.png";

const Features = () => {
  return (
    <Container className="py-5 px-5">
      <Row className="align-items-stretch px-5 g-5">
        <Col md={6} className="d-flex flex-column justify-content-between">
          <Row className="">
            <Col xs={12} className="mb-3">
              <img src={Work} alt="Work" className="img-fluid rounded shadow w-100" />
            </Col>
            <Col xs={12}>
              <img src={Earth} alt="Earth" className="img-fluid rounded shadow w-100" />
            </Col>
          </Row>
        </Col>


        <Col md={6} className="d-flex flex-column justify-content-between text-md-start text-center">
          <h2 className="fw-bold display-5 " style={{  letterSpacing: '2px' }}>
            Features <br/> <span className="text-warning">Ought</span> to{" "}
            <br/><span className="text-dark">Partake</span>
          </h2>
          <img src={Leaf} alt="Leaf" className="img-fluid rounded shadow w-100 " />
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
