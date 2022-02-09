import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ArticleLine from '../../components/ArticleLine';
import { getArticleList } from '../../api/home';
import { message } from 'antd';
import './index.css';

function Home(props) {
  const { list, dispatchList, dispatchTitle } = props;

  useEffect(() => {
    initTitle();
    getList();
  }, [])

  function initTitle() {
    dispatchTitle();
  }

  async function getList() {
    const loading = message.loading('加载中...');
    const result = await getArticleList();
    dispatchList(result);
    setTimeout(loading, 0);
  }

  return (
    <div>
      {list.map((item, index) =>
        <Link to={'/article?article_number=' + item.number} key={item.id}>
          <ArticleLine number={index + 1} title={item.title} date={item.created_at.slice(0, 10)}></ArticleLine>
        </Link>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.home.list,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchTitle: dispatch.defaultLayout.resetTitle,
  dispatchList: (list) => dispatch.home.getList(list),
})

const Page = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)

export default Page;
