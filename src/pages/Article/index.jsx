import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import './index.css';
import { convertParams } from '../../lib';
import { message } from 'antd';
import { getArticle } from '../../api/article';

function Article(props) {
  const { title, html, dispatchTitle, dispatchResetHtml, dispatchHtml } = props;

  useEffect(() => {
    const params = convertParams(props.history.location.search);
    init(params.article_number);
  }, [props.history.location.search]);

  async function init(articleNumber) {
    dispatchResetHtml();
    const loading = message.loading('加载中...');
    const result = await getArticle(articleNumber);
    dispatchTitle(result.title);
    dispatchHtml(marked(result.body));
    setTimeout(loading, 0);
  }

  return (
    <div className='article'>
      <h2 className="title">{title}</h2>
      <div className="html" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  title: state.article.title,
  html: state.article.html,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchTitle: (title) => dispatch.defaultLayout.setTitle(title),
  dispatchResetHtml: dispatch.article.resetHtml,
  dispatchHtml: (html) => dispatch.article.setHtml(html),
})

const Page = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article)

export default Page;
