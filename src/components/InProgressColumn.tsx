import React, { FC } from 'react';
import Column from './Column';
import { ICards } from '../interfaces/ICards';

const InProgressColumn: FC<ICards> = ({ cards }: ICards) => (
  <Column title="In Progress" cards={cards} isInProgress time="00:01:12" />
);

export default InProgressColumn;
