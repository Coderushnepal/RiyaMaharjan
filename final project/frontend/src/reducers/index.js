import { combineReducers } from 'redux';

import destinationReducer from './DestinationReducer';

const rootReducer = combineReducers({
    destination: destinationReducer
});

export default rootReducer;