<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <article-meta :article="article" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article" />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <article-comments :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from 'markdown-it';
import {getArticle} from '../../api/article';
import ArticleMeta from './components/article-meta.vue';
import ArticleComments from './components/article-comment.vue';
export default {
  name: 'ArticleIndex',
  components: {
    ArticleMeta,
    ArticleComments
  },
  async asyncData({params}) {
    const {data} = await getArticle(params.slug);
    // console.log(data);
    const {article} = data;
    const md = new Markdown();
    article.body = md.render(article.body);
    return {
      article
    };
  },
  head() {
    // 定制这个页面个网页标题，利于SEO
    // 通过devtool中的head中就能看到实际渲染
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: 'description1', // 避免meta不能正确覆盖父组件中的相同标签而产生重复的现象
          name: 'description2',
          content: this.article.description
        }
      ]
    };
  }
};
</script>

<style></style>
