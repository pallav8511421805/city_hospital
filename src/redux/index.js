import { combineReducers } from 'redux';
import counter_data from './reducer/counter.reducer'

export default rootreducer = () => combineReducers({
    counter: counter_data
}) 
