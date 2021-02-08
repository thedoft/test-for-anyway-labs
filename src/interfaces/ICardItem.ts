export interface ICardItem {
  isInProgress: boolean;
  isDone: boolean;
  price: number;
  setPrice: (price: number) => void;
}
