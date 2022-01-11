import request from '../lib/request';

export const getArticleList = async () => {
  const result = await request({
    url: 'https://api.github.com/repos/katherine0325/katherine0325.github.io/issues',
  })
  return result.data;
}
