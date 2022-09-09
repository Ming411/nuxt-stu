import {request} from '@/plugins/request';

export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
// 获取用户关注的文章列表
export const getFeedArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    // headers: {
    //   Authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjE4NzU1NjM0MDUwQDE2My5jb20iLCJ1c2VybmFtZSI6IndoeWNjY2MiLCJpYXQiOjE2NjI2ODg3MDAsImV4cCI6MTY2Nzg3MjcwMH0.1fNSipCqlkr4EDdGq9aqcnC7-4gyogFnH1s7-RzWmAE`
    // },
    params
  });
};
// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
