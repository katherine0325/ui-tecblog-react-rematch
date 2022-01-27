export const incraceAction = (count1) => ({
  type: 'INCREASE',
  count1,
})

export const decreaseAction = (count2) => ({
  type: 'DECREASE',
  count2,
})

export const listAction = (list) => ({
  type: 'LIST',
  list,
})

export const titleAction = (title) => ({
  type: 'TITLE',
  title,
})

export const resetTitleAction = () => ({
  type: 'RESET_TITLE',
})

export const htmlAction = (html) => ({
  type: 'HTML',
  html,
})
