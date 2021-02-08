export const headers = {
  'Content-Type': 'application/json; chaset=utf-8',
};

export const getCardsToDo: () => Promise<Record<string, unknown>> = () => fetch('http://localhost:3000/to-do', {
  headers,
})
  .then((res) => res.json());

export const getCardsInProgress: () => Promise<Record<string, unknown>> = () => fetch('http://localhost:3000/in-progress', {
  headers,
})
  .then((res) => res.json());

export const getCardsDone: () => Promise<Record<string, unknown>> = () => fetch('http://localhost:3000/done', {
  headers,
})
  .then((res) => res.json());
