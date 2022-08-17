
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Rootreducer } from './reducers/Rootreducer'

import { helloSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const Middlewares = []
export const store = createStore(
  Rootreducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(helloSaga)

const action = type => store.dispatch({type})