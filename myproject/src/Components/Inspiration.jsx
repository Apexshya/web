import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Natureimg from "../assets/nature.jpg";

const Inspiration = () => {
  return (
    <Container className="py-4 mb-5 ">
      <Row className="justify-content-center">
        <Col md={10} lg={10}>
          <div className="position-relative">
            <img
              src={Natureimg}
              alt="Nature"
              className="img-fluid rounded shadow"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center bg-light bg-opacity-75 p-4 rounded">
              <h4 className="fw-bold">Every inspiration from nature</h4>
              <p className="text-muted">
                Get started using our services with a 30-day free trial
              </p>
              <Button variant="dark">Try it now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Inspiration;
