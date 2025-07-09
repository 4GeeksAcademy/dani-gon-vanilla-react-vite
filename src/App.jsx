import { BasicCard } from "./components/cards";
import { BarraNav } from "./components/navbar";
import { Footer } from "./components/footer";
import { Bienvenida } from "./components/welcome";

import "./App.css";

import { Container, Row, Col } from "react-bootstrap";


export const App = () => {
  return (
    <>
    <BarraNav />
      <Bienvenida />
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
      <Footer />
    </>
  );
};
