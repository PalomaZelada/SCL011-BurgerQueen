import React, { Component } from 'react';
import BasicButton from './basicButton';
import data1 from '../data/data.json';
import db from '../data/firebaseKey';
import Client from './infoClient';
class Menu extends Component {
  constructor(props) {
    super(props);
  //Se establecen los estados 
    this.state = {
      data: data1.lunch,
      item: [],
      price: 0,
      client: '',
      table: ''

    }
  }
  //Funcion para añadir items al pedido
  addingItem = order => {
    let orderedItems = this.state.item;
  //Aqui utilizamos push para meter al array el objeto del menu que seleccionemos
    orderedItems.push(order)
  //Se actualiza el estado de item que ahora esta guardando los items del pedido
    this.setState({
      item: orderedItems,
    });
  //Aqui se suma el valor de cada producto al total, por eso se establece el 0  
  let orderTotal = this.state.item.reduce( (acc, elem) => acc + elem.price, 0)
  //Actualizamos el estado de price que ahora guarda el total del pedido
  this.setState({
    price: orderTotal
  })
  }
  //Funcion para guardar input del cliente
  handleInputChange = event => {
  this.setState({
    [event.name] :event.value
  })
  }

  //Funcion para eliminar items del pedido y restar el valor del total
  deletingItem(id, price){
    this.setState({
      item: this.state.item.filter((elem, i) => {
  //Cuando encuentra el id de un producto lo "filtra" del arreglo eso significa que lo elimina
        return i !== id
      })
    })
  //Aqui guardamos en variables los valores de los items y los items del pedido y despues las restamos
    let stateOrder = this.state.price
    let orderPrice = price
    let finalOrder = stateOrder - orderPrice
  //Se actualiza el estado de precio despues de que se resten los valores
    this.setState({
      price: finalOrder
    })
    }
  //Aqui guardamos los pedidos en firebase
  savingOrders = () => {
    //Guardo en variables los estados actuales del array item y precio
      let newOrder= this.state.item
      let newTotal= this.state.price
      let newClient= this.state.client
      let newTable= this.state.table
      db.collection("orders").add({
        clientName:newClient,
        table:newTable,
        orderedItems: newOrder,
        price: newTotal
      })
      
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
    //Cuando se guarda el pedido se muestra el mensaje que fue enviado a cocina
          alert("Pedido enviado a cocina")
        })
    //Aqui limpio item y price para inicia un pedido nuevo
        .then(()=>{
        let emptyOrder= []
        let emptyTotal= 0
        let emptyInput= ''
        let emptyTable=''
        this.setState({
          item:emptyOrder,
          price:emptyTotal,
          client:emptyInput,
          table:emptyTable
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
  //A BasicButton le damos la funcion addingItem on click y con los props muestra el nombre y precio de los productos
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
        <Client 
        change={event=>this.handleInputChange(event.target)}
        />
        {dataLunch}
        <p>Mesa n° {this.state.table}- Nombre: {this.state.client}</p>
        {this.state.item.map((order, i)=>{
          return (
            <div>
              
               <p>
                {order.item} ${order.price}
              <span>
              <button
              onClick={this.deletingItem.bind(this, i, order.price)}>
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