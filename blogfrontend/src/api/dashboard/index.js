import request from '@/utils/request'

export function getArticleList(data) {
  return request({
    url: '/article/list',
    method: 'post',
    data
  })
}

export function getArticleDetail(data) {
  return request({
    url: '/article/detail',
    method: 'post',
    data
  })
}

export function addSee(data) {
  return request({
    url: '/article/addSee',
    method: 'post',
    data
  })
}

export function addZan(data) {
  return request({
    url: '/article/addZan',
    method: 'post',
    data
  })
}

export function createComment(data) {
  return request({
    url: '/article/createComment',
    method: 'post',
    data
  })
}

export function getComment(data) {
  return request({
    url: '/article/getComment',
    method: 'post',
    data
  })
}

// 当前评论的id
export function addCommentZan(data) {
  return request({
    url: '/article/addCommentZan',
    method: 'post',
    data
  })
}

// 得到最新评论文章
export function getNewArticle(data) {
  return request({
    url: '/article/getNewArticle',
    method: 'post',
    data
  })
}

export function getTotal() {
  return request({
    url: '/article/getTotal',
    method: 'get'
  })
}

/**
 * @Description: 标签文章
 * @author wangke
 * @date 2019-12-25
 */

export function getLabelArticle(data) {
  return request({
    url: '/label/getLabelArticle',
    method: 'post',
    data
  })
}

// 推荐文章
export function recommend() {
  return request({
    url: '/article/recommend',
    method: 'get'
  })
}

/**
 * @Description: 标签
 * @author wangke
 * @date 2019-12-26
 */
export function labelList(data) {
  return request({
    url: '/label/labelList',
    method: 'post',
    data
  })
}

// 推荐
export function getRecommend(data) {
  return request({
    url: '/article/getRecommend',
    method: 'post',
    data
  })
}

// 读者
export function readerList(data) {
  return request({
    url: '/reader/readerList',
    method: 'post',
    data
  })
}
// 获取图片
export function getImages(data) {
  return request({
    url: '/image/getImages',
    method: 'post',
    data
  })
}
