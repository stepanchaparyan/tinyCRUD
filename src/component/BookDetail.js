import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { getBooks } from '../redux/actions/booksAction';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { URL } from '../constants/url';

const useStyles = makeStyles(() => ({
  button: {
    '&': {
      marginTop: '16px'
    }
  }
}));

const BookDetail = ({ book, getBooks }) => {
  const classes = useStyles();
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {book && <Card>
        <CardContent>
          <Typography gutterBottom component="h2">
            Book author - {book.author}
          </Typography>
          <Typography color="textSecondary" component="h4">
            Book title - {book.title}
          </Typography>
          <Button variant="outlined" color="primary" className={classes.button}>
            <Link to={URL.HOME}>BACK</Link>
          </Button>
        </CardContent>
      </Card>}
    </>
  );
};

BookDetail.propTypes = {
  book: PropTypes.object,
  getBooks: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    book: state.books[ownProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { getBooks }
)(BookDetail);