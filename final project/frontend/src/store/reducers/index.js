import { combineReducers } from "redux";
import bookingReducer from "./BookingReducer";

import destinationReducer from "./DestinationReducer";

const rootReducer = combineReducers({
  destination: destinationReducer,
  booking: bookingReducer,
});

export default rootReducer;
