import React, {
  FC, SyntheticEvent, useState, useEffect,
} from 'react';
import {
  Button, InputGroup, Form, FormControl,
} from 'react-bootstrap';
import Column from './Column';
import './Column.css';
import { CardType } from '../types/CardType';
import { defaultCardsToDo } from '../data/defaultCards';
import * as api from '../utils/api';
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

  useEffect(() => {
    api.getCardsToDo()
    /*
      при наличии бэкенда код блока catch будет обрабатываться в then,
      в ответ придет объект с данными удаленной карточки, этот объект будет передан
      в вызываемые ниже функции аргументом, а не как сейчас браться из самого объекта карточки,
      в самом же блоке catch будет обрабатываться ошибка
    */
      .catch(() => setCards(defaultCardsToDo));
  }, [setCards]);

  function handleSubmit(evt: SyntheticEvent) {
    evt.preventDefault();

    if (newTask !== '') {
      const newCard = {
        id: cards.length,
        text: newTask,
      };

      api.postCardToDo(newCard.id) // аналогично при любом вызове методов api
        .catch(() => {
          setCards([...cards, newCard]);
          setIsNewTaskClicked(false);
        });
    }
  }

  return (
    <Column
      title="To do"
      cards={cards}
      cardsForAdd={cardsForAdd}
      setCards={setCards}
      setCardsForAdd={setCardsForAdd}
      postCard={api.postCardInProgress}
      deleteCard={api.deleteCardToDo}
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
