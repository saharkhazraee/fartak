import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '40px 0' }} dir='rtl'>
      <Container>
        <Row>
          {/* ستون اول */}
          <Col md={3}>
            
            <ul className="list-unstyled d-flex-column ">
              <li style={{padding:"10px"}}>لینک ۱</li>
              <li style={{padding:"10px"}}>لینک ۲</li>
              <li style={{padding:"10px"}}>لینک ۳</li>
              <li style={{padding:"10px"}}>لینک ۴</li>
            </ul>
          </Col>

          {/* ستون دوم */}
          <Col md={3}>
            
            <ul className="list-unstyled">
              <li style={{padding:"10px"}}>لینک ۱</li>
              <li style={{padding:"10px"}}>لینک ۲</li>
              <li style={{padding:"10px"}}>لینک ۳</li>
              <li style={{padding:"10px"}}>لینک ۴</li>
            </ul>
          </Col>

          {/* ستون سوم */}
          <Col md={3}>
            
            <ul className="list-unstyled">
              <li style={{padding:"10px"}}>لینک ۱</li>
              <li style={{padding:"10px"}}>لینک ۲</li>
              <li style={{padding:"10px"}}>لینک ۳</li>
              <li style={{padding:"10px"}}>لینک ۴</li>
            </ul>
          </Col>

          {/* ستون چهارم */}
          <Col md={3}>
            
            <ul className="list-unstyled">
              <li>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="جستجو"
                    className="mr-sm-2"
                    style={{width:"100%",padding:"5px",borderRadius:"50px",backgroundColor:"purple",border:"none"}}
                  />
                  
                </Form>
                
              </li>
              <li style={{padding:"10px"}}>لینک ۲</li>
              <li style={{padding:"10px"}}>لینک ۳</li>
              <li style={{padding:"10px"}}>لینک ۴</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
