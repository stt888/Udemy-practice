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
            <Route path = '/Udemy-practice/' exact component = {Home}/>
            <Route path = '/Udemy-practice/login' exact component = {Login}/>
            <Route path = '/Udemy-practice/register' exact component = {Register}/>
            <Route path = '/Udemy-practice/detail' exact component = {Detail}/>  
          </Switch>      
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
