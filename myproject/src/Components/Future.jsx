import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Original from '../assets/original.jpg'

const Future = () => {
    return (
        <Container fluid className="p-0 m-0">
            <Row className="m-0">
                <Col className="position-relative p-0">
                    <div className="position-relative">
                        <img
                            src={Original}
                            alt="Building the future"
                            className="img-fluid rounded shadow w-100 "
                            style={{ objectFit: 'cover', opacity: 0.7 }}
                        />
                    </div>

                    <div
                        className="position-absolute top-0 start-50 translate-middle-x bg-opacity-75 text-center fw-bold"
                        style={{ padding: '10px 20px', borderRadius: '8px' }}
                    >
                        <h1 className="fs-2 fw-bold fs-md-1"  >Building the future </h1>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Future
