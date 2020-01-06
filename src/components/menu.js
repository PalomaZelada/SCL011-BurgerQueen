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
  deletingItem(id, price){
    this.setState({
      item: this.state.item.filter((elem, i) => {
        return i !== id
      })
    })
    let stateOrder = this.state.price
    let orderPrice = price
    let finalOrder = stateOrder - orderPrice
    this.setState({
      price: finalOrder
    })
    }
  

  savingOrders = () => {
    let newOrder= this.state.item
    let newTotal= this.state.price
    db.collection("orders").add({
      orderedItems: newOrder,
      price: newTotal

    })
    
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Pedido enviado a cocina")
      }).then(()=>{
      let emptyOrder= []
      let emptyTotal= 0
      this.setState({
        item:emptyOrder,
        price:emptyTotal
        })
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        alert("Hubo un error en el envio")
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
          name={data.item} 
          price={data.price}
        /> 
        </div>

      )
    }
    )

    return (
      <div>
        {dataLunch}
        {this.state.item.map((order, i)=>{
          return (
            <div>
               <p>
                {order.item} ${order.price}
              <span>
              <button
              onClick={this.deletingItem.bind(this, i, order.price)}
              >
                Eliminar
              </button>    
              </span>
              </p>
            </div>
          )
        })
        }
        <p>
         $ {this.state.price}
        </p>
        <div>
        <button 
        onClick={()=>this.savingOrders()}>
          Enviar
        </button> 
        </div>
      </div>
    )
  }
}

export default Menu;