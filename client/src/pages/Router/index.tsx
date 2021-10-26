import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import Home from '../Home';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Router;