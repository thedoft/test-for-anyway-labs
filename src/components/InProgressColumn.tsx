import React, { FC } from 'react';
import Column from './Column';
import { CardType } from '../types/CardType';

interface IInProgress {
  cardsDone: CardType[];
  cardsInProgress: CardType[];
  setCardsDone: (cardsDone: CardType[]) => void;
  setCardsInProgress: (cardsInProgress: CardType[]) => void;
}

const InProgressColumn: FC<IInProgress> = ({
  cardsInProgress, cardsDone, setCardsInProgress, setCardsDone,
}: IInProgress) => (
  <Column
    title="In Progress"
    cards={cardsInProgress}
    cardsForAdd={cardsDone}
    isInProgress
    setCardsInProgress={setCardsInProgress}
    setCardsDone={setCardsDone}
  />
);

export default InProgressColumn;
