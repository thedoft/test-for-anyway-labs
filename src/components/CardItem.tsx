import React from 'react';
import {
  Card, Button,
} from 'react-bootstrap';
import logo from '../logo.svg';

interface CardProps {
  text: string;
  isInProgress: boolean;
  isDone: boolean;
  time: string;
  price: string;
}

function CardItem({
  text, isInProgress, isDone, time, price,
}: CardProps) {
  const cardLabel = isDone ? `$${price}` : time;
  const buttonVariant = isInProgress ? 'success' : 'primary';
  const buttonText = isInProgress ? 'Resolve' : 'Start';

  return (
    <Card style={{ minHeight: 86, marginBottom: 10 }}>
      <Card.Body style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px 10px 10px' }}>
        <div style={{ display: 'flex' }}>
          <img
            src={logo}
            alt="icon"
            style={{
              width: 24, height: 24, objectFit: 'cover', marginRight: 5,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Card.Text>{text}</Card.Text>
            <Card.Text className="text-muted">{cardLabel}</Card.Text>
          </div>
        </div>
        {!isDone && <Button variant={buttonVariant} style={{ alignSelf: 'center' }}>{buttonText}</Button>}
      </Card.Body>
    </Card>
  );
}

export default CardItem;
