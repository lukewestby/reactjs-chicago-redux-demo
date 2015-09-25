export default function loading(state = false, { type }) {
  switch(type) {
    case 'ADD_ASYNC_START':
      return true;
    case 'ADD_ASYNC_FINISH':
      return false;
    default:
      return state;
  }
}
