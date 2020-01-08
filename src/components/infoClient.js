import React, { Component } from 'react';

class Client extends Component {
    render() {
        return (
            <div>
                <input type="number" placeholder="N° de mesa" name="table" onChange={this.props.change}/> 
                <br></br>
                <br></br>

                <input type="text" placeholder="Nombre cliente" name="client" onChange={this.props.change} />
            </div>
            )
    }
}
export default Client