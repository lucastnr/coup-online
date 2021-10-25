import React, { useContext } from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppContext from '../../contexts/AppContext';
import Home from '../Home';

const Router: React.FC = () => {
  const { socket } = useContext(AppContext);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Router;