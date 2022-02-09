const initState = {
  title: 'Katherine的技术博客',
}

const defaultLayout = {
  state: initState,
  reducers: {
    setTitle(state, payload) {
      return {
        ...state,
        title: payload,
      }
    },
    resetTitle(state, payload) {
      return {
        ...state,
        title: initState.title,
      }
    },
  },
  effects: dispatch => ({}),
}

export default defaultLayout;
