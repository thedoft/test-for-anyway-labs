import React, { ReactNode } from 'react';
import {
  Col, Badge, CardDeck,
} from 'react-bootstrap';
import CardItem from './CardItem';
import { IColumn } from '../interfaces/IColumn';
import { CardType } from '../types/CardType';

interface ColumnProps extends IColumn {
  cards: CardType[];
  cardsForAdd?: any;
  children?: ReactNode;
  setCardsToDo?: (cards: CardType[]) => void;
  setCardsInProgress?: (cards: CardType[]) => void;
  setCardsDone?: (cards: CardType[]) => void;
}

function Column({
  children, title, cards, cardsForAdd, isInProgress, isDone, time, price,
  setCardsToDo, setCardsInProgress, setCardsDone,
}: ColumnProps) {
  function filterCards(card: CardType) {
    const newCards = cards.filter((c) => c.id !== card.id);
    return newCards.map((c, index) => {
      const newCard = c;
      newCard.id = index;
      return newCard;
    });
  }

  function setCurrentIndex(card: CardType) {
    const newCard = card;
    newCard.id = cardsForAdd.length;
    return newCard;
  }

  function handleStart(card: CardType) {
    const updatedCards = filterCards(card);
    if (setCardsToDo) setCardsToDo(updatedCards);
    const newCard = setCurrentIndex(card);
    if (setCardsInProgress) setCardsInProgress([...cardsForAdd, newCard]);
  }

  function handleResolve(card: CardType) {
    const updatedCards = filterCards(card);
    if (setCardsInProgress) setCardsInProgress(updatedCards);
    const newCard = setCurrentIndex(card);
    if (setCardsDone) setCardsDone([...cardsForAdd, newCard]);
  }

  function handleButtonClick(card: CardType) {
    if (!isInProgress) {
      handleStart(card);
    } else {
      handleResolve(card);
    }
  }

  return (
    <Col style={{ backgroundColor: 'lightblue', borderRadius: 5 }}>
      <h2>
        <Badge
          style={{
            borderRadius: '50%', width: 30, height: 30, padding: 3, color: '#000', backgroundColor: 'lightgrey',
          }}
        >
          {cards.length}
        </Badge>
        {` ${title}`}
      </h2>
      <CardDeck style={{ flexDirection: 'column' }}>
        {cards.map((card) => (
          <CardItem
            card={card}
            key={card.id}
            isInProgress={isInProgress || false}
            isDone={isDone || false}
            price={price || ''}
            onButtonClick={handleButtonClick}
          />
        ))}
        {children}
      </CardDeck>
    </Col>
  );
}

Column.defaultProps = {
  cardsForAdd: null,
  children: null,
  setCardsToDo: null,
  setCardsInProgress: null,
  setCardsDone: null,
};

export default Column;
