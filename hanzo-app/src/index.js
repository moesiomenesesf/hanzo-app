import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PostDetails from './pages/PostDetails/PostDetails';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter basename={'/hanzo-app'}> */}
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/details/:postId' component={PostDetails}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
