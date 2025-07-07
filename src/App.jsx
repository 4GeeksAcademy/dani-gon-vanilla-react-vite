import { BasicCard } from "./components/cards";
import "./App.css";

import { Container, Row, Col, Button, Card } from "react-bootstrap";

export const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={3}>
            <BasicCard></BasicCard>
          </Col>
          <Col xs={12} lg={3}>
            <BasicCard></BasicCard>
          </Col>
          <Col xs={12} lg={3}>
            <BasicCard></BasicCard>
          </Col>
          <Col xs={12} lg={3}>
            <BasicCard></BasicCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};
