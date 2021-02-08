import React, { FC } from 'react';
import Column from './Column';
import { CardType } from '../types/CardType';

interface IDone {
  cardsDone: CardType[];
}

const DoneColumn: FC<IDone> = ({ cardsDone }: IDone) => (
  <Column
    title="Done"
    cards={cardsDone}
    isDone
  />
);

export default DoneColumn;
