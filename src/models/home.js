const initState = {
  title: 'Katherine的技术博客',
  list: [],
}

const home = {
  state: initState,
  reducers: {
    getList(state, payload) {
      return {
        ...state,
        list: payload,
      }
    },
  },
  effects: dispatch => ({}),
}

export default home;
