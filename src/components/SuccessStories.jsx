import React from 'react'
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function SuccessStories() {
  return (

    <section className="success-stories d-flex justify-content-between align-content-center bg-body-secondary w-100" dir='rtl'>
      <div className="container py-5 w-100">
        <h2 style={{ textDecoration: "underline 2px green", width: '25%',marginBottom:"20px" }} dir='rtl'>پیوند های موفق</h2>
        <div style={{ display: 'flex',flexDirection:"row", justifyContent: 'space-between', alignItems: "center",
         width: "100%" ,height:"90%"}}>
          <Carousel style={{ backgroundColor: 'purple', padding: "70px 75px 40px 75px", width: "70%",height:"100%"}}>
            <Carousel.Item style={{width:"100%",height:"100%"}}>
              <Container>
                <Row className="d-flex align-items-center">
                  <Col md={8}>
                    <img
                      className="d-block w-100"
                      src="../../public/bg.jpg"
                      alt="First slide"
                    />
                  </Col>
                  <Col md={4}>
                    <h3>عنوان اول</h3>
                    <p dir='rtl' style={{textAlign:"justify"}}>تحصیل یکی از مهم‌ترین مراحل زندگی هر فرد
                      است که نقش بسزایی در شکل‌دهی به آینده و موفقیت‌های او دارد.
                      فرآیند تحصیل از کودکی آغاز می‌شود و می‌تواند تا سطوح بالاتر دانشگاهی و حتی فراتر از آن نیز ادامه یابد.
                      تحصیل نه تنها به دانش و مهارت‌های فردی اضافه می‌کند، بلکه به رشد شخصیت، پرورش تفکر
                      انتقادی و ایجاد دیدگاهی گسترده‌تر نسبت به جهان پیرامون کمک می‌کند.</p>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Container>
                <Row className="d-flex align-items-center">
                  <Col md={8}>
                    <img
                      className="d-block w-100"
                      src="../../public/bg.jpg"
                      alt="Second slide"
                    />
                  </Col>
                  <Col md={4}>
                    <h3>عنوان دوم</h3>
                    <p dir='rtl' style={{textAlign:"justify"}}>تحصیل یکی از مهم‌ترین مراحل زندگی هر فرد
                      است که نقش بسزایی در شکل‌دهی به آینده و موفقیت‌های او دارد.
                      فرآیند تحصیل از کودکی آغاز می‌شود و می‌تواند تا سطوح بالاتر دانشگاهی و حتی فراتر از آن نیز ادامه یابد.
                      تحصیل نه تنها به دانش و مهارت‌های فردی اضافه می‌کند، بلکه به رشد شخصیت، پرورش تفکر
                      انتقادی و ایجاد دیدگاهی گسترده‌تر نسبت به جهان پیرامون کمک می‌کند.</p>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Container>
                <Row className="d-flex align-items-center">
                  <Col md={8}>
                    <img
                      className="d-block w-100"
                      src="../../public/bg.jpg"
                      alt="Third slide"
                    />
                  </Col>
                  <Col md={4}>
                    <h3>عنوان سوم</h3>
                    <p dir='rtl' style={{textAlign:"justify"}}>تحصیل یکی از مهم‌ترین مراحل زندگی هر فرد
                      است که نقش بسزایی در شکل‌دهی به آینده و موفقیت‌های او دارد.
                      فرآیند تحصیل از کودکی آغاز می‌شود و می‌تواند تا سطوح بالاتر دانشگاهی و حتی فراتر از آن نیز ادامه یابد.
                      تحصیل نه تنها به دانش و مهارت‌های فردی اضافه می‌کند، بلکه به رشد شخصیت، پرورش تفکر
                      انتقادی و ایجاد دیدگاهی گسترده‌تر نسبت به جهان پیرامون کمک می‌کند.</p>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>

          <div className='d-flex-column justify-content-center align-align-items-center gap-2' style={{ width: "29%",height:"100%" }}>
            <div className="story" style={{ width: "100%",height:"50%",position:"relative",marginBottom:"5px" }}>
              <img src="../../public/bg.jpg" alt="Student 1" style={{ display: 'inline-block', width: "100%", overflow: "hidden" }} />
              <div dir='rtl' style={{position:'absolute',backgroundColor:"purple",width:"100%",height:"35px",
              padding:"5px 10px 5px 5px",color:"white",opacity:"0.5",top:"83%"}}>ویزای تحصیلی</div>
            </div>
            <div className="story" style={{ width: "100%",height:"50%",position:"relative",marginBottom:"10px" }}>
              <img src="../../public/bg.jpg" alt="Student 1" style={{ display: 'inline-block', width: "100%", overflow: "hidden" }} />
              <div dir='rtl' style={{position:'absolute',backgroundColor:"purple",width:"100%",height:"35px",
              padding:"5px 10px 5px 5px",color:"white",opacity:"0.5",top:"83%"}}>افر ویژه فرتاک</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
