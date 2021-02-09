export const BASE_URL = 'http://localhost:3000';
export const headers = {
  'Content-Type': 'application/json; chaset=utf-8',
};

export const getCardsToDo: () => Promise<Record<string, unknown>> = () => fetch(`${BASE_URL}/to-do`, {
  headers,
})
  .then((res) => res.json());

export const getCardsInProgress: () => Promise<Record<string, unknown>> = () => fetch(`${BASE_URL}/in-progress`, {
  headers,
})
  .then((res) => res.json());

export const getCardsDone: () => Promise<Record<string, unknown>> = () => fetch(`${BASE_URL}/done`, {
  headers,
})
  .then((res) => res.json());

export const postCardToDo: (id: number) => Promise<Record<string, unknown>> = (id) => fetch(`${BASE_URL}/to-do`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    id,
  }),
})
  .then((res) => res.json());

export const postCardInProgress: (id: number) => Promise<Record<string, unknown>> = (id) => fetch(`${BASE_URL}/in-progress`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    id,
  }),
})
  .then((res) => res.json());

export const postCardDone: (id: number) => Promise<Record<string, unknown>> = (id) => fetch(`${BASE_URL}/done`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    id,
  }),
})
  .then((res) => res.json());

export const deleteCardToDo: (id: number) => Promise<Record<string, unknown>> = (id) => fetch(`${BASE_URL}/to-do`, {
  method: 'DELETE',
  headers,
  body: JSON.stringify({
    id,
  }),
})
  .then((res) => res.json());

export const deleteCardInProgress: (id: number) => Promise<Record<string, unknown>> = (id) => fetch(`${BASE_URL}/in-progress`, {
  method: 'DELETE',
  headers,
  body: JSON.stringify({
    id,
  }),
})
  .then((res) => res.json());

export const deleteCardDone: (id: number) => Promise<Record<string, unknown>> = (id) => fetch(`${BASE_URL}/done`, {
  method: 'DELETE',
  headers,
  body: JSON.stringify({
    id,
  }),
})
  .then((res) => res.json());
