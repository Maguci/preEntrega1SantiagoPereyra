import { CartWidget } from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container >
        <Navbar.Brand href="#home" >😜E-Commerce😜</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link href="#features" >Camisetas</Nav.Link>
            <Nav.Link href="#pricing" >Pantalones</Nav.Link>
            <NavDropdown  title="Ver mas😁" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" >Botines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Remeras
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Shorts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >
                Zapatillas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


 