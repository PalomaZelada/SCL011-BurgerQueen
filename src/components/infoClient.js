import React, { Component } from 'react';
import './styles/starting.css';

class Client extends Component {
  render() {
    return (
      <div>
        <input className="infoC" type="number" placeholder="N° de mesa" name="table" onChange={this.props.change} />


        <input className="infoC" type="text" placeholder="Nombre cliente" name="client" onChange={this.props.change} />
      </div>
    );
  }
}
export default Client;
