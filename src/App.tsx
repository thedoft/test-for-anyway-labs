import React, { FC, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import ToDoColumn from './components/ToDoColumn';
import InProgressColumn from './components/InProgressColumn';
import DoneColumn from './components/DoneColumn';
import { CardType } from './types/CardType';
import './App.css';

const App: FC = () => {
  const [cardsToDo, setCardsToDo] = useState<CardType[]>([]);
  const [cardsInProgress, setCardsInProgress] = useState<CardType[]>([]);
  const [cardsDone, setCardsDone] = useState<CardType[]>([]);

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
          <DoneColumn
            cards={cardsDone}
            setCards={setCardsDone}
          />
        </Row>
      </Container>
    </>
  );
};

export default App;
