import { Container, Button } from "react-bootstrap";

export const Bienvenida = () => {
    return (
        <div className="texto py-5">
            <Container className="text-center">
                <div>
                    <h2 className="display-4">Bienvenidx seas!</h2>
                </div>
                <div>
                    <p className="lead">
                        Con esta página estoy aprendiendo a programar en JavaScript con React
                        y estoy usando la librería de React Bootstrap.
                    </p>
                </div>
                <div>
                    <Button variant="light">Bring the action</Button>
                </div> 
            </Container>
        </div>
    );
}