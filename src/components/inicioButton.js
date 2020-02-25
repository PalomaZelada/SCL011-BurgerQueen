import React, { Component } from 'react';
import './styles/starting.css';

class ButtonTo extends Component {
  render() {
      return(
    <a className="linkInicio" href={this.props.linkto}>{this.props.name}</a>
      )
  }
}
export default ButtonTo;