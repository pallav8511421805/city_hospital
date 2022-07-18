
import { createStore } from 'redux';
import rootreducer from './index';

export const store_data = () => {

    let store = createStore(rootreducer)

    return store;
}

export default store_data;