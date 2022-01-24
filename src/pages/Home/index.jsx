import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ArticleLine from '../../components/ArticleLine';
import { getArticleList } from '../../api/home';
import { listAction } from '../../redux/action';
import { message } from 'antd';
import './index.css';

function Home(props) {
  useEffect(() => {
    init();
  }, [])

  async function init() {
    const loading = message.loading('加载中...');
    const result = await getArticleList();
    props.listInit(result);
    setTimeout(loading, 0);
  }

  return (
    <div>
      {props.list.map((item, index) =>
        <Link to={'/article?article_number=' + item.number} key={item.id}>
          <ArticleLine number={index + 1} title={item.title} date={item.created_at.slice(0, 10)}></ArticleLine>
        </Link>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.list,
})

const mapDispatchToProps = (dispatch) => ({
  listInit: (list) => dispatch(listAction(list)),
})

const Page = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)

export default Page;
