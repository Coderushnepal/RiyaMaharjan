import React from 'react';
import DestinationList from './views/DestinationList';
import Destination from './views/Destination';
import Login from './views/Login';
import Register from './views/Register';
import Bookings from './views/Bookings';
import history from '../utils/history';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import * as routes from '../constants/routes';

// landing page --> /destinations, /
// destination --> /destination/id
//login --> /login

export default function App() {
  return (

    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={routes.DESTINATIONS} component={DestinationList} />
        <Route exact path={routes.DESTINATION} component={Destination} />
        <Route exact path={routes.REGISTER} component={Register} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.BOOKINGS} component={Bookings} />
        <Redirect to={routes.DESTINATIONS} />
      </Switch>
    </BrowserRouter>

  );
}
