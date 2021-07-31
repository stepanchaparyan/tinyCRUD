import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const Form = ({ saveBook }) => {
  const classes = useStyles();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const book = {
      author,
      title
    };
    if (author?.length && title?.length) {
      saveBook(book);
    };
    setAuthor('');
    setTitle('');
  };

  return (
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
        <Button variant="outlined" color="primary" type="submit" style={{ padding: '6px 40px', margin: '12px' }}>Save</Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  saveBook: PropTypes.func
};

export default Form;