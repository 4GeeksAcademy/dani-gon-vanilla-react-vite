import { BasicCard } from "./components/cards";

import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { BarraNav } from "./components/navbar";

export const App = () => {
  return (
    <>
    <BarraNav />
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
