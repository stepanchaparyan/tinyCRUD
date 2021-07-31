import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { URL } from '../constants/url';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1)
    },
    text: {
      margin: 0,
      maxWidth: '200px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    root: {
        maxWidth: 345,
        margin: '12px'
      },
      media: {
        height: 140
      }
  }));

const BookCard = ({book, id, deleteBook}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.newsindiatimes.com/wp-content/uploads/2017/11/cq5dam.thumbnail.470.264.png"
          title="Book Example"
        />
        <CardContent>
          <Typography gutterBottom component="h2">
          <Link to={`${URL.BOOK}/${id}`}>
            <h4 className={classes.text}>Author - {book.author}</h4>
         </Link>
          </Typography>
          <Typography color="textSecondary" component="div">
            <p className={classes.text}>Title - {book.title}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => deleteBook(id)}
        >
         Delete
        </Button>
        <Button variant="outlined" color="primary">
          <Link to={`${URL.BOOK}/${id}/edit`}>Update</Link>
        </Button>
      </CardActions>
    </Card>
);};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  deleteBook: PropTypes.func
};

export default BookCard;
