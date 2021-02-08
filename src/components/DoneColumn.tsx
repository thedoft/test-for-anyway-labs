import React from 'react';
import Column from './Column';
import { CardType } from '../types/CardType';

interface IDone {
  cardsDone: CardType[];
}

function DoneColumn({ cardsDone }: IDone) {
  return (
    <Column
      title="Done"
      cards={cardsDone}
      isDone
    />
  );
}

export default DoneColumn;
