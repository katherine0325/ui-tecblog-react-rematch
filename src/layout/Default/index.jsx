import React from "react";
import { connect } from 'react-redux';
import generateLayout from '../../lib/generate-layout';
import './index.css';

function Default(props) {
  const { title } = props;

  return (
    <div className="layout-default">
      <div className="header">
        <div className="dark">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="section">
        <div className="main">
          {props.children}
        </div>
        {/* <p className="github-site">本项目为React前端项目，代码地址：<a href="https://github.com/katherine0325/react-ui-article" target="_blank">https://github.com/katherine0325/react-ui-article</a></p> */}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  title: state.defaultLayout.title,
})

const mapDispatchToProps = (dispatch) => ({

})

const DefaultLayout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default)

export default generateLayout(DefaultLayout);
