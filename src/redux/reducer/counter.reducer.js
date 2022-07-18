import * as Actiontype from '../actions/actiontype';
const intailval = {
  counter: 0
}

export default counter_data = (state = intailval, action) => {
  switch (Actiontype) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state - 1
      }
    default:
      return state;
  }
}