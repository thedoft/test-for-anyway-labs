import React from 'react';
import Column from './Column';
import { CardType } from '../types/CardType';

interface IInProgress {
  cardsDone: CardType[];
  cardsInProgress: CardType[];
  setCardsDone: (cardsDone: CardType[]) => void;
  setCardsInProgress: (cardsInProgress: CardType[]) => void;
}

function InProgressColumn({
  cardsInProgress, cardsDone, setCardsInProgress, setCardsDone,
}: IInProgress) {
  return (
    <Column
      title="In Progress"
      cards={cardsInProgress}
      cardsForAdd={cardsDone}
      isInProgress
      setCardsInProgress={setCardsInProgress}
      setCardsDone={setCardsDone}
      time="00:01:12"
    />
  );
}

export default InProgressColumn;
