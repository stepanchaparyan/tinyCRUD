import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getBooks, saveBook, deleteBook } from '../redux/actions/booksAction';
import BookCard from './BookCard';
import Form from './Form';
import Grid from '@material-ui/core/Grid';

const App = ({ getBooks, saveBook, deleteBook, books }) => {
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Grid style={{ padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ 'margin': 0 }}>Welcome to my Library</h1>
      <Form saveBook={saveBook} />
      <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'center' }}>
        {_.map(books, (book, key) => (
          <BookCard key={key} id={key} book={book} deleteBook={deleteBook} />
        ))}
      </div>
    </Grid>
  );
};

App.propTypes = {
  getBooks: PropTypes.func,
  saveBook: PropTypes.func,
  deleteBook: PropTypes.func,
  books: PropTypes.object
};

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(
  mapStateToProps,
  { getBooks, saveBook, deleteBook }
)(App);
