import React from "react";
import { Container, Title, Paragraph, Card, CardTitle, Row, Spacing } from "./PageElements";
import Game from "./tictactoe";


function Page(props) {
  return (
    <Container>
      <Row>
        <Card>
          <CardTitle>Title</CardTitle>
        </Card>
      </Row>
      <Spacing />
      <Row>
        <Game />
      </Row>
    </Container>
  );
}

export default Page;