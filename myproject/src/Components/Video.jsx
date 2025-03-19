import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'

const Video = () => {
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={12} className="position-relative">
          <Badge 
            bg="danger" 
            className="position-absolute top-0 start-0 m-4 fs-6"
            style={{ zIndex: 10 }}
          >
            Youtube Video
          </Badge>

          <div className="ratio ratio-21x9">
            <iframe 
              src="https://www.youtube.com/embed/dpEPNioJ1%7Ck?autoplay=1" 
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Video
