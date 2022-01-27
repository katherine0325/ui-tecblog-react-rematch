const initialState = {
  count: 0,
  list: [],
  title: 'Katherine的技术博客',
  html: '<p></p>',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST':
      return {
        ...state,
        list: action.list,
      }
    case 'RESET_TITLE':
      return {
        ...state,
        title: initialState.title,
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
