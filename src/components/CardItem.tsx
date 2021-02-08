import React, { FC, useState, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import {
  Card, Button,
} from 'react-bootstrap';
import { ICardItem } from '../interfaces/ICardItem';
import { CardType } from '../types/CardType';

import './CardItem.css';
import icon from '../images/card-text.svg';

interface CardProps extends ICardItem {
  card: CardType;
  onButtonClick: (card: CardType) => void;
}

const PRICE_PER_HOUR = 100;

const CardItem: FC<CardProps> = ({
  card, isInProgress, isDone, setPrice, onButtonClick,
}: CardProps) => {
  const buttonVariant = isInProgress ? 'success' : 'primary';
  const buttonText = isInProgress ? 'Resolve' : 'Start';

  const [cardLabel, setCardLabel] = useState('');
  const [time, setTime] = useState('');

  const {
    seconds, minutes, hours, start, pause,
  } = useStopwatch();

  useEffect(() => {
    if (isInProgress) {
      start();

      const h = `${hours}`.padStart(2, '0');
      const m = `${minutes}`.padStart(2, '0');
      const s = `${seconds}`.padStart(2, '0');

      setTime(`${h}:${m}:${s}`);
      setCardLabel(time);
      if (setPrice) setPrice((seconds / 60 / 60) * PRICE_PER_HOUR);
    }

    if (isDone) {
      pause();
      setCardLabel(`$${card.price || PRICE_PER_HOUR}`);
    }
  }, [isInProgress, hours, minutes, seconds, isDone, start, pause, setPrice, time, card.price]);

  return (
    <Card style={{ minHeight: 86, marginBottom: 10 }}>
      <Card.Body className="card__body">
        <div className="card__main">
          <img className="card__img" src={icon} alt="icon" />
          <div className="card__text-wrapper">
            <Card.Text>{card.text}</Card.Text>
            <Card.Text bsPrefix="card-text text-muted">{cardLabel}</Card.Text>
          </div>
        </div>

        {!isDone && (
          <Button onClick={() => onButtonClick(card)} variant={buttonVariant} className="card__button">
            {buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardItem;
