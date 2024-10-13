import React from 'react'

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <a href="/" className="logo">Fartak</a>
//         <div className="menu">
//           <a href="/">Home</a>
//           <a href="/services">Services</a>
//           <a href="/about">About Us</a>
//           <a href="/articles">Articles</a>
//           <input type="text" placeholder="Search..." />
//         </div>
//       </div>
//     </nav>
//   )
// }
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " dir='rtl' style={{padding:"0 50px"}}>
      <Container fluid className='d-flex justify-content-between'>
        <Navbar.Brand href="#">
        فرتاک

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            فرتاک
          >
            <Nav.Link href="#action1" style={{marginLeft:'40px'}}>خانه</Nav.Link>
            <Nav.Link href="#action2" style={{marginLeft:'40px'}}>خدمات ما</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled style={{marginLeft:'40px'}}>
              درباره ما
            </Nav.Link>
            <Nav.Link href="#" disabled style={{marginLeft:'40px'}}>
              مقالات
            </Nav.Link>
            <Nav.Link href="#" disabled style={{marginLeft:'40px'}}>
              تماس با ما
            </Nav.Link>
          </Nav>
          <Form className="d-flex" style={{marginRight:"350px"}}>
            <Form.Control
              type="search"
              placeholder="جستجو"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
