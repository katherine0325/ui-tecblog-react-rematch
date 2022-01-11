import request from '../lib/request';

export const getArticle = async (articleNumber) => {
  const result = await request({
    url: `https://api.github.com/repos/katherine0325/katherine0325.github.io/issues/${articleNumber}`,
  });
  return result.data;
}
