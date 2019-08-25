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
        <BrowserRouter basename={"/Udemy-practice"}>
        {/* <BrowserRouter > */}
          <Header/>
          <Switch>
            <Route path = {`${process.env.PUBLIC_URL}/`} exact component = {Home}/>
            <Route path = {`${process.env.PUBLIC_URL}/login`} component = {Login}/>
            <Route path = {`${process.env.PUBLIC_URL}/register`} component = {Register}/>
            <Route path = {`${process.env.PUBLIC_URL}/detail`} component = {Detail}/>  
          </Switch>      
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
