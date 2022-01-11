const initialState = {
  count: 0,
  list: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      console.log(state)
      return {
        ...state,
        count: state.count + action.count1
      }
    case 'DECREASE':
      return {
        ...state,
        count: state.count - action.count2
      }
    case 'LIST':
      return {
        ...state,
        list: action.list,
      }
    default:
      return initialState;
  }
}

export default reducer;
