import { Button, Card } from "react-bootstrap";

export const BasicCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" 
                src="https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8" />
                <Card.Body className="tarjeta">
                    <Card.Title>Opción de verano</Card.Title>
                    <Card.Text>
                        Aquí te dejo una foto de un hermoso lago donde puedes hacer piragüismo, navegación a vela, 
                        esquí acuático, wakeboarding, pesca, paddleboarding y snorkel,entre otros.
                        Así podrás decidir más fácilmente, qué hacer con tu familia. 
                        Todas las familias son válidas y puedes ir acompañadx de tu mascota.
                    </Card.Text>
                    <Button variant="info">Press para ver más</Button>
                </Card.Body>
            </Card>
        </div>
    )
}