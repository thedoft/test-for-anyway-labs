import React, { FC } from 'react';
import Column from './Column';
import { CardType } from '../types/CardType';

interface IInProgress {
  cards: CardType[];
  cardsForAdd: CardType[];
  setCards: (cards: CardType[]) => void;
  setCardsForAdd: (cardsForAdd: CardType[]) => void;
}

const InProgressColumn: FC<IInProgress> = ({
  cards, cardsForAdd, setCards, setCardsForAdd,
}: IInProgress) => (
  <Column
    title="In Progress"
    cards={cards}
    cardsForAdd={cardsForAdd}
    isInProgress
    setCards={setCards}
    setCardsForAdd={setCardsForAdd}
  />
);

export default InProgressColumn;
