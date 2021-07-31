import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './style/styles.css';

import { Provider } from 'react-redux';
import store from './redux/store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import LoadingComponent from './component/LoadingComponent';
import BookDetail from './component/BookDetail';
import BookEdit from './component/BookEdit';
import About from './component/About';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <BrowserRouter>
      <LoadingComponent>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/book/:id/edit" component={BookEdit} exact={true} />
            <Route path="/book/:id" component={BookDetail} exact={true} />
            <Route path="/about" component={About} exact={true} />
          </Switch>
        </div>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
