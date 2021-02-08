import React, { FC, SyntheticEvent, useState } from 'react';
import {
  Button, InputGroup, Form, FormControl,
} from 'react-bootstrap';
import Column from './Column';
import { CardType } from '../types/CardType';
import logo from '../logo.svg';

export interface IToDo {
  cardsToDo: CardType[];
  cardsInProgress: CardType[];
  setCardsToDo: (cardsToDo: CardType[]) => void;
  setCardsInProgress: (cardsInProgress: CardType[]) => void;
}

const ToDoColumn: FC<IToDo> = ({
  cardsToDo, cardsInProgress, setCardsToDo, setCardsInProgress,
}: IToDo) => {
  const [isNewTaskClicked, setIsNewTaskClicked] = useState(false);
  const [newTask, setNewTask] = useState('');

  function handleSubmit(evt: SyntheticEvent) {
    evt.preventDefault();

    if (newTask !== '') {
      const newCard = {
        id: cardsToDo.length,
        text: newTask,
      };

      setCardsToDo([...cardsToDo, newCard]);
      setIsNewTaskClicked(false);
    }
  }

  return (
    <Column
      title="To do"
      cards={cardsToDo}
      cardsForAdd={cardsInProgress}
      setCardsToDo={setCardsToDo}
      setCardsInProgress={setCardsInProgress}
    >
      <Button
        onClick={() => setIsNewTaskClicked(!isNewTaskClicked)}
        variant="light"
        style={{ alignSelf: 'center', display: 'flex', marginBottom: 15 }}
      >
        <img src={logo} alt="add" style={{ height: 24, width: 24, objectFit: 'cover' }} />
        New task
      </Button>

      {isNewTaskClicked && (
        <Form onSubmit={handleSubmit}>
          <InputGroup size="sm" style={{ width: 'calc(100% - 30px)', alignSelf: 'center', margin: '0 15px 15px' }}>
            <FormControl
              placeholder="Do something..."
              onChange={(evt) => setNewTask(evt.target.value)}
              autoFocus
            />
            <InputGroup.Append>
              <Button type="submit" variant="outline-dark">Button</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      )}
    </Column>
  );
};

export default ToDoColumn;
