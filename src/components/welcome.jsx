import { Container, Button } from "react-bootstrap";

export const Bienvenida = () => {
    return (
        <Container className="my-3">
            <h2>Bienvenido seas!</h2>
        <Button variant="primary">Bring the action</Button>
            <p>
                Con esta página estoy aprendiendo a programar en JavaScript con React
                y estoy usando la librería de React Bootstrap.
            </p>
        </Container>
    );
}