import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incraceAction, decreaseAction } from '../redux/action';

class Counter extends Component {
  render() {
    const { count, decreaseClick } = this.props;
    return (
      <div className="content">
        <p className="title">减法页面</p>
        <p className="text">{count}</p>
        <button className="btn" onClick={decreaseClick}>减去</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch) => ({
  decreaseClick: () => dispatch(decreaseAction(2)),
})

const Decrease = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default Decrease;
