import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Column from './Column';
import { ICards } from '../interfaces/ICards';
import logo from '../logo.svg';

interface IToDo extends ICards {
  setCards: (cards: { id: number, text: string }[]) => void;
}

function ToDoColumn({ cards, setCards }: IToDo) {
  const [isNewTaskClicked, setIsNewTaskClicked] = useState(false);
  const [newTask, setNewTask] = useState('');

  function handleSubmit() {
    const newCard = {
      id: cards.length,
      text: newTask,
    };

    setCards([...cards, newCard]);
    setIsNewTaskClicked(false);
  }

  return (
    <Column title="To do" cards={cards}>
      <Button
        onClick={() => setIsNewTaskClicked(!isNewTaskClicked)}
        variant="light"
        style={{ alignSelf: 'center', display: 'flex', marginBottom: 15 }}
      >
        <img src={logo} alt="add" style={{ height: 24, width: 24, objectFit: 'cover' }} />
        New task
      </Button>

      {isNewTaskClicked && (
        <InputGroup size="sm" style={{ width: 'calc(100% - 30px)', alignSelf: 'center', margin: '0 15px' }}>
          <FormControl
            placeholder="Do something..."
            onChange={(evt) => setNewTask(evt.target.value)}
          />
          <InputGroup.Append>
            <Button variant="outline-dark" onClick={handleSubmit}>Button</Button>
          </InputGroup.Append>
        </InputGroup>
      )}
    </Column>
  );
}

export default ToDoColumn;
