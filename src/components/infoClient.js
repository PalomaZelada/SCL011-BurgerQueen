import React, { Component } from 'react';

class Client extends Component {
    render() {
        return (
            <div>
                <p>Seleccionar mesa</p>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <br></br>
                <br></br>

                <input type="text" onChange={this.props.client} />
            </div>
            )
    }
}
export default Client