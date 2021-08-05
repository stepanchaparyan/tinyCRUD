import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { editBook } from '../redux/actions/booksAction';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
      'flex-direction': 'column'
    }
  }
}));

const BookEdit = ({ book, editBook, match, history }) => {
  const classes = useStyles();
  const [author, setAuthor] = useState(book?.author);
  const [title, setTitle] = useState(book?.title);

  const handleSubmit = e => {
    e.preventDefault();
    const book = {
      author,
      title
    };
    editBook(match.params.id, book);
    setTitle('');
    setAuthor('');
    history.push('/');
  };

  return (
    <>
    <h1>Books Edit Page</h1>
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="Author"
        onChange={e => setAuthor(e.target.value)}
        value={author}
        type="text"
        name="author"
        required
      />
      <TextField
        id="standard-basic"
        label="Title"
        onChange={e => setTitle(e.target.value)}
        value={title}
        name="title"
        required
      />
      <div>
        <Button variant="outlined" color="primary" type="submit" style={{ padding: '6px 40px', margin: '12px' }}>Update</Button>
      </div>
    </form>
    </>
  );
};

BookEdit.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  editBook: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    book: state.books[ownProps.match.params.id]
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, { editBook })
)(BookEdit);
