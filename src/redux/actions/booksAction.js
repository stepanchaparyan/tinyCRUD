import { GET_BOOKS, BOOKS_STATUS } from '../actionType';
import { database } from '../../firebase';

export function getBooks() {
  return dispatch => {
    dispatch({
      type: BOOKS_STATUS,
      payload: true
    });
    database.on(
      'value',
      snapshot => {
        dispatch({
          type: GET_BOOKS,
          payload: snapshot.val()
        });
        dispatch({
          type: BOOKS_STATUS,
          payload: false
        });
      },
      () => {
        dispatch({
          type: BOOKS_STATUS,
          payload: -1
        });
      }
    );
  };
};

export function saveBook(book) {
  return () => database.push(book);
};

export function editBook(id, book) {
  return () => database.child(id).update(book);
};

export function deleteBook(id) {
  return () => database.child(id).remove();
};

