import React, { Fragment } from 'react';
import {GlobalStyle} from './style/style';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Register from './pages/register';


function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path = '/' component = {Home}/>
            <Route path = '/login' component = {Login}/>
            <Route path = '/register' component = {Register}/>
            <Route path = '/detail' component = {Detail}/>  
          </Switch>      
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
