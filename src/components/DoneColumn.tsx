import React, { FC, useEffect } from 'react';
import Column from './Column';
import { CardType } from '../types/CardType';
import * as api from '../utils/api';
import { defaultCardsDone } from '../data/defaultCards';

interface IDone {
  cards: CardType[];
  setCards: (cards: CardType[]) => void;
}

const DoneColumn: FC<IDone> = ({ cards, setCards }: IDone) => {
  useEffect(() => {
    /*
      при наличии бэкенда код блока catch будет обрабатываться в then,
      в ответ придет объект с данными удаленной карточки, этот объект будет передан
      в вызываемые ниже функции аргументом, а не как сейчас браться из самого объекта карточки,
      в самом же блоке catch будет обрабатываться ошибка
    */
    api.getCardsToDo()
      .catch(() => setCards(defaultCardsDone));
  }, [setCards]);

  return (
    <Column
      title="Done"
      cards={cards}
      isDone
    />
  );
};
export default DoneColumn;
