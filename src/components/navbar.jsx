import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";

export const BarraNav = () => {
    return (

        <div>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark">
                    <Container className="Navegacion">
                        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton />
                            <Offcanvas.Body>
                                <Nav className="desplegable justify-content-end flex-grow-1 pe-3 bg-dark">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#about">About</Nav.Link>
                                    <Nav.Link href="#services">Services</Nav.Link>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        
            <container className="mg-3">
                Bienvenido seas!
                <br />
                <Button variant="primary">Bring the action</Button>
            </container>
            <div>
                Con esta página estoy aprendiendo a programar en JavaScript con React
                y estoy usando la librería de React Bootstrap.
            </div>
        </div>
    );
}