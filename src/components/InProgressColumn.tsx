import React, { FC, useEffect } from 'react';
import Column from './Column';
import { CardType } from '../types/CardType';
import * as api from '../utils/api';
import { defaultCardsInProgress } from '../data/defaultCards';

interface IInProgress {
  cards: CardType[];
  cardsForAdd: CardType[];
  setCards: (cards: CardType[]) => void;
  setCardsForAdd: (cardsForAdd: CardType[]) => void;
}

const InProgressColumn: FC<IInProgress> = ({
  cards, cardsForAdd, setCards, setCardsForAdd,
}: IInProgress) => {
  useEffect(() => {
    /*
      при наличии бэкенда код блока catch будет обрабатываться в then,
      в ответ придет объект с данными удаленной карточки, этот объект будет передан
      в вызываемые ниже функции аргументом, а не как сейчас браться из самого объекта карточки,
      в самом же блоке catch будет обрабатываться ошибка
    */
    api.getCardsToDo()
      .catch(() => setCards(defaultCardsInProgress));
  }, [setCards]);

  return (
    <Column
      title="In Progress"
      cards={cards}
      cardsForAdd={cardsForAdd}
      isInProgress
      setCards={setCards}
      setCardsForAdd={setCardsForAdd}
      postCard={api.postCardDone}
      deleteCard={api.deleteCardInProgress}
    />
  );
};
export default InProgressColumn;
