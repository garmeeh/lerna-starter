import { Component } from 'react';

class Counter extends Component {
  state = { count: this.props.initialCount ? this.props.initialCount : 0 };

  increase = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      };
    });
  };

  decrease = () => {
    this.setState(previousState => {
      return {
        count: previousState.count - 1
      };
    });
  };

  getStateAndHelpers() {
    return {
      count: this.state.count,
      increase: this.increase,
      decrease: this.decrease
    };
  }

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

export default Counter;
