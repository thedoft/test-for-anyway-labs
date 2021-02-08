import React, { FC, useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import ToDoColumn from './components/ToDoColumn';
import InProgressColumn from './components/InProgressColumn';
import DoneColumn from './components/DoneColumn';
import { CardType } from './types/CardType';
import './App.css';

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
      <Container fluid className="main">
        <Row className="main__wrapper">
          <ToDoColumn
            cards={cardsToDo}
            cardsForAdd={cardsInProgress}
            setCards={setCardsToDo}
            setCardsForAdd={setCardsInProgress}
          />
          <InProgressColumn
            cards={cardsInProgress}
            cardsForAdd={cardsDone}
            setCards={setCardsInProgress}
            setCardsForAdd={setCardsDone}
          />
          <DoneColumn cards={cardsDone} />
        </Row>
      </Container>
    </>
  );
};

export default App;
