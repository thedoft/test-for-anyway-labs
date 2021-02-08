import React, { FC, ReactNode, useState } from 'react';
import {
  Col, Badge, CardDeck,
} from 'react-bootstrap';
import CardItem from './CardItem';
import { IColumn } from '../interfaces/IColumn';
import { CardType } from '../types/CardType';
import './Column.css';

interface ColumnProps extends IColumn {
  children?: ReactNode;
  cards: CardType[];
  cardsForAdd?: CardType[];
  setCards?: (cards: CardType[]) => void;
  setCardsForAdd?: (cards: CardType[]) => void;
}

const Column: FC<ColumnProps> = ({
  children, title, cards, cardsForAdd, isInProgress, isDone,
  setCards, setCardsForAdd,
}: ColumnProps) => {
  const [price, setPrice] = useState(0);

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
    if (cardsForAdd) newCard.id = cardsForAdd.length;
    return newCard;
  }

  function handleButtonClick(card: CardType) {
    const updatedCards = filterCards(card);
    if (setCards) setCards(updatedCards);

    const newCard = setCurrentIndex(card);
    if (isInProgress) newCard.price = +price.toFixed(2);
    if (cardsForAdd && setCardsForAdd) setCardsForAdd([...cardsForAdd, newCard]);
  }

  return (
    <Col className="column">
      <h2 className="column__title">
        <Badge className="column__badge">
          {cards.length}
        </Badge>
        {`${title}`}
      </h2>
      <CardDeck className="column__card-deck">
        {cards.map((card) => (
          <CardItem
            card={card}
            key={card.id}
            isInProgress={isInProgress || false}
            isDone={isDone || false}
            onButtonClick={handleButtonClick}
            price={price}
            setPrice={setPrice}
          />
        ))}
        {children}
      </CardDeck>
    </Col>
  );
};

Column.defaultProps = {
  cardsForAdd: [],
  children: null,
  setCards: () => {},
  setCardsForAdd: () => {},
};

export default Column;
