import { createStore, combineReducers } from 'redux'
import web3Reducer from '../reducers/web3'


const store = createStore(
  combineReducers({
    web3: web3Reducer
  })
)

export default store