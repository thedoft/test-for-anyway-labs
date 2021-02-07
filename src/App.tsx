import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import ToDoColumn from './components/ToDoColumn';
import InProgressColumn from './components/InProgressColumn';
import DoneColumn from './components/DoneColumn';

import { defaultCardsToDo, defaultCardsInProgress, defaultCardsDone } from './data/defaultCards';

function App() {
  const [cardsToDo, setCardsToDo] = useState(defaultCardsToDo);
  const [cardsInProgress, setCardsInProgress] = useState(defaultCardsInProgress);
  const [cardsDone, setCardsDone] = useState(defaultCardsDone);

  return (
    <>
      <Header />
      <Container fluid style={{ minHeight: 'calc(100vh - 126px)', height: 1 }}>
        <Row style={{
          margin: 0, gap: 15, minHeight: '100%', paddingBottom: 15,
        }}
        >
          <ToDoColumn cards={cardsToDo} setCards={setCardsToDo} />
          <InProgressColumn cards={cardsInProgress} />
          <DoneColumn cards={cardsDone} />
        </Row>
      </Container>
    </>
  );
}

export default App;
