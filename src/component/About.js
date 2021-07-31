import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const About = () => (
    <Container style={{ margin: '12px' }}>
      <Typography component="div" style={{ marginBottom: '60px' }}>
        <h3>For this small CRUD task I used</h3>
        <Typography>react - with hooks</Typography>
        <Typography>redux - as state management system</Typography>
        <Typography>Material UI</Typography>
        <Typography>Firebase - for saving data</Typography>
      </Typography>
      <Typography component="div" margin='0'>
        <h3>Also as a CRUD task I will suggest to see my other task I created before</h3>
        <Typography style={{ fontWeight: '600' }}>Github - https://github.com/stepanchaparyan/MERN-favorites-v2</Typography>
        <Typography>react - with hooks</Typography>
        <Typography>redux - as state management system</Typography>
        <Typography>UI - Styled Components</Typography>
        <Typography>NodeJS small project with MongoDB (created by me) - for saving data</Typography>
        <Typography>Also used - Webpack, ESLint, Prettier, useContext, Express, Mangoose, Jest, Enzhyme, StoryBook, AWS</Typography>
      </Typography>
    </Container>
);

export default About;
