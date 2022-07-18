// import * as actiontype '../actiontype';
const intailval = {
    counter : 0
}

export default counter_data = (state = intailval, action) =>{
    switch (action.type) {
        case 'INCREMENT':
          return {
            ...state,
            counter : counter + 1
          }
        case 'DECREMENT':
           return {
            ...state,
            counter : counter - 1
          }
        default:
          return state;
      }
}