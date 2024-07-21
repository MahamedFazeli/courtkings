import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/logo2.jpg"

const navbar = () => {
    return (
        <Navbar expand="lg" className="Navbar">
          <Container fluid>
            <img src={logo} alt="Court KINGS image"  width={80} height={55} />
            <Navbar.Brand href="/SEG_Project2" id="Title">COURT KINGS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <NavDropdown title="Events" id="tabs" className="navtab">
                  <NavDropdown.Item href="tournaments" id="innertabs">Tournaments</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="open-court" id="innertabs">
                    Open Court
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" id="tabs" className="navtab">
                  <NavDropdown.Item href="training-videos" id="innertabs">Training Videos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="training-sessions" id="innertabs">
                    Training Sessions
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="chat" id="tabs" className="navtab">Chat</Nav.Link>
                <NavDropdown title="Language" id="tabs" className="navtab">
                  <NavDropdown.Item href="SEG_Project2" id="innertabs">English</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="SEG_Project2FR" id="innertabs">
                    French
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="personal-info" id="tabs" className="navtab">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
 
export default navbar;