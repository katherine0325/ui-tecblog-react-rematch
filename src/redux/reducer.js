const initialState = {
  count: 0,
  list: [],
  title: '',
  html: '<p></p>',
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
    case 'TITLE':
      return {
        ...state,
        title: action.title,
      }
    case 'HTML':
      return {
        ...state,
        html: action.html,
      }
    default:
      return initialState;
  }
}

export default reducer;
