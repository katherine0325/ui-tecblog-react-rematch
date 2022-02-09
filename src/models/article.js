const initState = {
  title: '',
  html: '<p></p>',
}

const article = {
  state: initState,
  reducers: {
    resetHtml(state, layload) {
      return {
        ...state,
        html: initState.html,
      }
    },
    setHtml(state, payload) {
      return {
        ...state,
        html: payload,
      }
    },
  },
  effects: dispatch => ({}),
}

export default article;
