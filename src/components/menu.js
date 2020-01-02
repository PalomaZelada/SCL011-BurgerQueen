import React, { Component } from 'react';
import BasicButton from './basicButton';
import data1 from '../data/data.json';
import db from '../data/firebaseKey';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data1.lunch,
      item: [],
      price: 0

    }
  }
  addingItem = order => {
    let orderedItems = this.state.item;
    orderedItems.push(order)
    this.setState({
      item: orderedItems,
    });
  let orderTotal = this.state.item.reduce( (acc, elem) => acc + elem.price, 0)

  this.setState({
    price: orderTotal

  })
  }
  savingOrders = () => {
    let newOrder= this.state.item
    db.collection("orders").add({
      orderedItems: newOrder

    })
    
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      
      })

      .catch(function (error) {
        console.error("Error adding document: ", error);
      });   
  }

  render() {
    const dataLunch = this.state.data.map((data, i) => {
      return (
        <div>
        <BasicButton
          clicking={this.addingItem}
          products={data}
          key={data.id}
          name={data.item} price={data.price}
        /> 
        </div>

      )
    }
    )

    return (
      <div>
        {dataLunch}
        <p>
          {this.state.item.reduce( (acc, elem) => acc + elem.price, 0)}
        </p>
        <div>
        <button onClick={()=>this.savingOrders()}>Enviar</button> 
        </div>
      </div>
    )

  }
}

export default Menu;