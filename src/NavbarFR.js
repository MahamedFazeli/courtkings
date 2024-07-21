import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/logo2.jpg"

const NavbarFR = () => {
    return (
        <Navbar expand="lg" className="Navbar">
          <Container fluid>
            <img src={logo} alt="Court KINGS image" width={80} height={55} />
            <Navbar.Brand href="/SEG_Project2FR" id="Title">COURT KINGS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <NavDropdown title="Événements" id="tabs" className="navtab">
                  <NavDropdown.Item href="tournaments" id="innertabs">Tournois</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="open-court" id="innertabs">
                    Court Ouvert
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Ressources" id="tabs" className="navtab">
                  <NavDropdown.Item href="training-videos" id="innertabs">Vidéos d'Entraînement</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="training-sessions" id="innertabs">
                    Séances d'Entraînement
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="chat" id="tabs" className="navtab">Chat</Nav.Link>
                <NavDropdown title="Langue" id="tabs" className="navtab">
                  <NavDropdown.Item href="SEG_Project2" id="innertabs">Anglais</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="SEG_Project2FR" id="innertabs">
                    Français
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="personal-info" id="tabs" className="navtab">S'inscrire</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
 
export default NavbarFR;