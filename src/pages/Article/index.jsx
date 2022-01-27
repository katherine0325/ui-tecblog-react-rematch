import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import './index.css';
import { convertParams } from '../../lib';
import { message } from 'antd';
import { getArticle } from '../../api/article';
import { titleAction, htmlAction } from '../../redux/action';

function Article(props) {
  const { title, html, dispatchTitle, dispatchHtml } = props;

  useEffect(() => {
    const params = convertParams(props.history.location.search);
    init(params.article_number);
  }, [props.history.location.search]);

  async function init(articleNumber) {
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
  title: state.title,
  html: state.html,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchTitle: (title) => dispatch(titleAction(title)),
  dispatchHtml: (html) => dispatch(htmlAction(html)),
})

const Page = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article)

export default Page;
