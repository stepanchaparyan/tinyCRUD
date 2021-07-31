import { BOOKS_STATUS } from '../actionType';

export const loadingReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case BOOKS_STATUS:
      return { ...state, books: payload };
    default:
      return state;
  }
};

