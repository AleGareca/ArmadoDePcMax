
import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import Home from './component/Home'


export default class App extends React.Component {
   render() {
    return (
      <BrowserRouter>
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Route>
      </BrowserRouter>);
  }
}

