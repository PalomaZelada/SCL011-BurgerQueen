import React, { Component } from 'react';
import './styles/starting.css';

class Button extends Component {
  render() {
      return(
    <button className="btnBasic" onClick={this.props.clicking.bind(this, this.props.products)}>{this.props.name} ${this.props.price}</button>
      )
  }
}
export default Button;