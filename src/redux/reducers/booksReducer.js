import { GET_BOOKS } from '../actionType';

export const booksReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_BOOKS:
      return payload;
    default:
      return state;
    }
};