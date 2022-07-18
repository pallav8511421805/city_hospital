import * as actiontype './actiontype' ;
import { createStore } from 'redux';

let store = createStore()
const intailval = {
    counter : 0
}
export const store_data = (state = intailval, action) =>{
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
          return state
      }
}