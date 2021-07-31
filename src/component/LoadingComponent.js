import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBooks } from '../redux/actions/booksAction';

const LoadingComponent = ({ booksLoading, children }) => {
  useEffect(() => {
    if (!booksLoading) {
      getBooks();
    };
  }, [booksLoading]);

  if (!booksLoading) {
      return <div>{children}</div>;
    } else {
      return <div>Loading...</div>;
  }
};

const mapStateToProps = state => {
  return {
    booksLoading: state.loading.books
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getBooks }
  )(LoadingComponent)
);
