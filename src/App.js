import React, { Fragment } from "react";
import { GlobalStyle } from "./style/style";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./common/header";
import store from "./store";
import Home from "./pages/home";
// import Detail from './pages/detail/loadable';
import Detail from "./pages/detail";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <BrowserRouter>
          {/* <BrowserRouter > */}
          <Header />
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
            <Route
              path={`${process.env.PUBLIC_URL}/login`}
              exact
              component={Login}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/register`}
              exact
              component={Register}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/detail`}
              component={Detail}
            />
          </Switch>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
