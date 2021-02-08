import React, { FC, SyntheticEvent, useState } from 'react';
import {
  Button, InputGroup, Form, FormControl,
} from 'react-bootstrap';
import Column from './Column';
import { CardType } from '../types/CardType';

import './Column.css';
import plus from '../images/plus.svg';

export interface IToDo {
  cards: CardType[];
  cardsForAdd: CardType[];
  setCards: (cards: CardType[]) => void;
  setCardsForAdd: (cardsForAdd: CardType[]) => void;
}

const ToDoColumn: FC<IToDo> = ({
  cards, cardsForAdd, setCards, setCardsForAdd,
}: IToDo) => {
  const [isNewTaskClicked, setIsNewTaskClicked] = useState(false);
  const [newTask, setNewTask] = useState('');

  function handleSubmit(evt: SyntheticEvent) {
    evt.preventDefault();

    if (newTask !== '') {
      const newCard = {
        id: cards.length,
        text: newTask,
      };

      setCards([...cards, newCard]);
      setIsNewTaskClicked(false);
    }
  }

  return (
    <Column
      title="To do"
      cards={cards}
      cardsForAdd={cardsForAdd}
      setCards={setCards}
      setCardsForAdd={setCardsForAdd}
    >
      <Button
        onClick={() => setIsNewTaskClicked(!isNewTaskClicked)}
        variant="outline-dark"
        className="column__button"
      >
        <img src={plus} alt="add" className="column__button-img" />
        New task
      </Button>

      {isNewTaskClicked && (
        <Form onSubmit={handleSubmit}>
          <InputGroup size="sm" className="column__input">
            <FormControl
              placeholder="Do something..."
              onChange={(evt) => setNewTask(evt.target.value)}
              autoFocus
            />
            <InputGroup.Append>
              <Button className="column__input-button" type="submit" variant="outline-dark">Add</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      )}
    </Column>
  );
};

export default ToDoColumn;
