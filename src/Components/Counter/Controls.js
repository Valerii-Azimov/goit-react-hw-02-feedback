import React from "react";
import { Container, Button } from "./styles";

function Controls({ onIncrement }) {
  return (
    <Container>
      <Button type="button" name="good" onClick={onIncrement}>
        Good
      </Button>
      <Button type="button" name="neutral" onClick={onIncrement}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={onIncrement}>
        Bad
      </Button>
    </Container>
  );
}

export default Controls;
