import { PureComponent } from 'react';

class Button extends PureComponent {
  getProps = props => ({
    role: this.props.role ? this.props.role : 'button',
    type: this.props.type ? this.props.type : 'button',
    ...props
  });

  getStateAndHelpers() {
    return {
      getProps: this.getProps
    };
  }

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

export default Button;
