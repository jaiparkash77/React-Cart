import Cart from "./Cart";
import Navbar from "./Navbar"
import React from 'react'

class App extends React.Component {

  constructor() {
      super();
      this.state = {
          products:[
              {
                  title: 'Watch',
                  price: 99,
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  id: 1
              },
              {
                  title: 'Mobile Phone',
                  price: 999,
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                  id:2
              },
              {
                  title: 'Laptop',
                  price: 9999,
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80',
                  id:3
              }
              
          ]
      }
      // this.increaseQuantity = this.increaseQuantity.bind(this);
      // this.testing();
  }

  handleIncreaseQuantity = (product) =>{
      console.log('hey increase the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          products
      })
  }

  handleDecreaseQuantity = (product) =>{
      console.log('hey decrease the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
      if(products[index].qty<=1){
          return;
      }
      products[index].qty -= 1;

      this.setState({
          products
      })
  }

  handleDeleteProduct = (id) => {
      const { products } = this.state;

      const items = products.filter((item)=> item.id !== id );

      this.setState({
          products: items
      })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product)=>{
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product)=>{
      cartTotal = cartTotal + product.qty * product.price;
    })

    return cartTotal;
  }

  render(){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ fontSize:20, padding:10}}>Total:- {this.getCartTotal()}</div>
      </div>
    );

  }
}


export default App;
