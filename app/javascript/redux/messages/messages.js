const URL = 'http://localhost:3000/api/v1/messages/show';

// Actions
const LOAD = 'messages/greetings/LOAD';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.state;
    default:
      return state;
  }
};

// Action Creators
export const loadMessage = () => async (dispatch) => {
  const res = await fetch(URL);
  const state = await res.json();
  dispatch({ type: LOAD, state });
};
