import React from 'react'
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Media() {
  return (
    <section className="media d-flex-column justify-content-center align-items-center m-4 ">
      <h2 style={{ textDecoration: "underline 2px green", width: '100%', marginBottom: "20px",textAlign:"center" }} dir='rtl'>تصاویر </h2>
      <Container className=" d-flex ">
        <Row>

          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img style={{ display: "inline-block", width: "100%" }}
                  className="d-block w-100"
                  src="../../public/bg.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className="caption-bottom">
                  <h3>عنوان ویدیو </h3>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img style={{ display: "inline-block", width: "100%" }}
                  className="d-block w-100"
                  src="../../public/bg.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className="caption-bottom">
                  <h3>عنوان ویدیو </h3>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img style={{ display: "inline-block", width: "100%" }}
                  className="d-block w-100"
                  src="../../public/bg.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className="caption-bottom">
                  <h3>عنوان تصویر </h3>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img style={{ display: "inline-block", width: "100%" }}
                  className="d-block w-100"
                  src="../../public/bg.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className="caption-bottom">
                  <h3>عنوان تصویر </h3>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
