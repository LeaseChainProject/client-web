const web3ReducerDefaultState = {
  web3Instance: null
}

export default (state = web3ReducerDefaultState, action) => {
  switch(action.type) {
    case 'WEB3_INITIALIZED':
      return {
        ...state,
        web3Instance: action.payload.web3Instance
      }
    default:
      return state
  }
}