import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { URL } from '../constants/url';

const Header = () => (
    <Container style={{ padding: 0, maxWidth: '100%' }}>
      <Typography component="div" style={{ backgroundColor: 'gray', height: '50px' }}>
        <div style={{ padding: '12px' }}>
          <Link to={URL.HOME} style={{ margin: '12px', padding: '12px', fontWeight: '600' }}>Books</Link>
          <Link to={URL.ABOUT} style={{ margin: '12px', padding: '12px', fontWeight: '600' }}>About</Link>
        </div>
      </Typography>
    </Container>
);

export default Header;
