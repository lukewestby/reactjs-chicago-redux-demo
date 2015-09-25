export function add(amount) {
  return { type: 'ADD', payload: amount };
}

export function multiply(coefficient) {
  return { type: 'MULTIPLY', payload: coefficient };
}

export function addAsync(amount) {
  return (dispatch) => {
    dispatch({ type: 'ADD_ASYNC_START' });
    setTimeout(() => {
      dispatch({ type: 'ADD_ASYNC_FINISH', payload: amount });
    }, 3000);
  }
}

const initialState = {
  add: 0,
  multiply: 1
};

export default function counters(state = initialState, { type, payload }) {
  switch(type) {
    case 'ADD':
    case 'ADD_ASYNC_FINISH':
      return {
        ...state,
        add: state.add + payload
      };
    case 'MULTIPLY':
      return {
        ...state,
        multiply: state.multiply * payload
      };
    default:
      return state;
  }
}
