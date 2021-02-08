import React, { FC, useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import ToDoColumn from './components/ToDoColumn';
import InProgressColumn from './components/InProgressColumn';
import DoneColumn from './components/DoneColumn';
import { CardType } from './types/CardType';

import * as api from './utils/api';
import { defaultCardsToDo, defaultCardsInProgress, defaultCardsDone } from './data/defaultCards';

const App: FC = () => {
  const [cardsToDo, setCardsToDo] = useState<CardType[]>([]);
  const [cardsInProgress, setCardsInProgress] = useState<CardType[]>([]);
  const [cardsDone, setCardsDone] = useState<CardType[]>([]);

  useEffect(() => {
    api.getCardsToDo()
      .then(() => setCardsToDo(defaultCardsToDo))
      .catch(() => setCardsToDo(defaultCardsToDo));

    api.getCardsInProgress()
      .then(() => setCardsInProgress(defaultCardsInProgress))
      .catch(() => setCardsInProgress(defaultCardsInProgress));

    api.getCardsDone()
      .then(() => setCardsDone(defaultCardsDone))
      .catch(() => setCardsDone(defaultCardsDone));
  }, []);

  return (
    <>
      <Header />
      <Container fluid style={{ minHeight: 'calc(100vh - 126px)', height: 1 }}>
        <Row style={{
          margin: 0, gap: 15, minHeight: '100%', paddingBottom: 15,
        }}
        >
          <ToDoColumn
            cardsToDo={cardsToDo}
            cardsInProgress={cardsInProgress}
            setCardsToDo={setCardsToDo}
            setCardsInProgress={setCardsInProgress}
          />
          <InProgressColumn
            cardsInProgress={cardsInProgress}
            cardsDone={cardsDone}
            setCardsInProgress={setCardsInProgress}
            setCardsDone={setCardsDone}
          />
          <DoneColumn cardsDone={cardsDone} />
        </Row>
      </Container>
    </>
  );
};

export default App;
