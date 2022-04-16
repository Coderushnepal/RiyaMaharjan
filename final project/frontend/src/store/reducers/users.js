import {
    FETCH_CATEGORY,
} from "../../actions/user";

const INITIAL_STATE = {
    list: [],
};

export default function fetchUser(state = INITIAL_STATE, action) {
    switch (action.type) {

      case FETCH_CATEGORY:
        return action.payload.length === 0
          ? {
              ...state,
            }
          : {
              ...state,
              list: [...action.payload.data],
            };

        default:
            return state;
    }
}