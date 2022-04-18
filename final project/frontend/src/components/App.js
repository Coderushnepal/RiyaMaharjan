import React from "react";
import DestinationList from "./views/DestinationList";
import Destination from "./views/Destination";
import Login from "./views/Login";
import Register from "./views/Register";
import Bookings from "./sections/Bookings";
import history from "../utils/history";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import * as routes from "../constants/routes";
import ModifyDestination from "./views/ModifyDestination";
import UpdateDestination from "./views/UpdateDestination";
import Booking from "./views/Booking";

export default function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={routes.DESTINATIONS} component={DestinationList} />
        <Route exact path={routes.DESTINATION} component={Destination} />
        <Route exact path={routes.REGISTER} component={Register} />
        <Route exact path={routes.LOGIN} component={Login} />
        <Route exact path={routes.BOOKINGS} component={Booking} />
        <Route
          exact
          path={routes.ALTERDESTINATIONS}
          component={ModifyDestination}
        />
        <Route
          exact
          path={routes.UPDATEDESTINATION}
          component={UpdateDestination}
        />
        <Redirect to={routes.DESTINATIONS} />
      </Switch>
    </BrowserRouter>
  );
}
