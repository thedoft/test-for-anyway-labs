import React, { FC } from 'react';
import Column from './Column';
import { CardType } from '../types/CardType';

interface IDone {
  cards: CardType[];
}

const DoneColumn: FC<IDone> = ({ cards }: IDone) => (
  <Column
    title="Done"
    cards={cards}
    isDone
  />
);

export default DoneColumn;
