import React, { ReactNode } from 'react';
import {
  Col, Badge, CardDeck,
} from 'react-bootstrap';
import CardItem from './CardItem';
import { ICards } from '../interfaces/ICards';

interface ColumnProps extends ICards {
  children?: ReactNode;
  title: string;
  isInProgress?: boolean;
  isDone?: boolean;
  time?: string;
  price?: string;
}

function Column({
  children, title, cards, isInProgress, isDone, time, price,
}: ColumnProps) {
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
            key={card.id}
            text={card.text}
            isInProgress={isInProgress || false}
            isDone={isDone || false}
            time={time || ''}
            price={price || ''}
          />
        ))}
        {children}
      </CardDeck>
    </Col>
  );
}

Column.defaultProps = {
  children: null,
  isInProgress: false,
  isDone: false,
  time: '',
  price: '',
};

export default Column;
