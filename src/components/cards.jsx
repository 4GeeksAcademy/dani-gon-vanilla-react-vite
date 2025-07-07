import { Button, Card } from "react-bootstrap";

export const BasicCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" 
                src="https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w" />
                <Card.Body>
                    <Card.Title>Playas para ir este verano</Card.Title>
                    <Card.Text>
                        Aquí te dejo una foto de una hermosa playa para que puedas 
                        imaginarte con tu familia. Todas son válidas.
                    </Card.Text>
                    <Button variant="primary">Press para ver más</Button>
                </Card.Body>
            </Card>
        </div>
    )
}