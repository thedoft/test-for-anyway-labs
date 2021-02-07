import React, { useState, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import {
  Card, Button,
} from 'react-bootstrap';
import { ICardItem } from '../interfaces/ICardItem';
import { CardType } from '../types/CardType';

import logo from '../logo.svg';

interface CardProps extends ICardItem {
  card: CardType;
  onButtonClick: (card: CardType) => void;
}

function CardItem({
  card, isInProgress, isDone, price, onButtonClick,
}: CardProps) {
  const buttonVariant = isInProgress ? 'success' : 'primary';
  const buttonText = isInProgress ? 'Resolve' : 'Start';

  const { seconds, minutes, hours } = useStopwatch({ autoStart: true });

  function setCardLabel() {
    if (isDone) {
      return `$${price}`;
    }
    if (isInProgress) {
      const h = `${hours}`.padStart(2, '0');
      const m = `${minutes}`.padStart(2, '0');
      const s = `${seconds}`.padStart(2, '0');
      return `${h}:${m}:${s}`;
    }
    return null;
  }

  const cardLabel = setCardLabel();

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
            <Card.Text>{card.text}</Card.Text>
            <Card.Text className="text-muted">{cardLabel}</Card.Text>
          </div>
        </div>

        {!isDone && (
          <Button onClick={() => onButtonClick(card)} variant={buttonVariant} style={{ alignSelf: 'center' }}>
            {buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardItem;
