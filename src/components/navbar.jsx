import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

export const BarraNav = () => {
    return (

        <div>
            {[false].map((expand) => (
                <Navbar  expand="lg" bg="dark" data-bs-theme="dark" key={expand}>
                    <Container>
                        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="desplegable"
                        >
                            <Offcanvas.Header closeButton />
                            <Offcanvas.Body>
                                <Nav className="opciones justify-content-end flex-grow-1 pe-3">
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
        </div>
    );
}