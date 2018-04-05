import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Web3 from 'web3';
import { Provider } from 'react-redux'
import getWeb3 from './util/web3/getWeb3'
import AppRouter from './routers/AppRouter';
import store from './store/createStore'

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!')
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
    <Provider store={store}>
      <AppRouter />
    </Provider>
  ),
  document.getElementById('app')
)
