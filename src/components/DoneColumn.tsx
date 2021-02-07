import React, { FC } from 'react';
import Column from './Column';
import { ICards } from '../interfaces/ICards';

const DoneColumn: FC<ICards> = ({ cards }: ICards) => (
  <Column title="Done" cards={cards} isDone price="50" />
);

export default DoneColumn;
