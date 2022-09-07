import Cart from "./Cart";
import Navbar from "./Navbar"
import React from 'react'
import { collection, getDocs, onSnapshot, addDoc, doc, updateDoc, deleteDoc, where, query, orderBy } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          products:[],
          loading: true
      }

      this.db = getFirestore();
  }
  

  componentDidMount(){
    // const db = getFirestore(this.props.app);
    // getDocs(collection(db, 'products'))
    // .then((snapshot)=>{
    //   // console.log(snapshot.docs)
    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data())
    //   });

    //   const products = snapshot.docs.map((doc)=>{
    //     const data = doc.data();

    //     data['id'] = doc.id;
    //     // return doc.data();
    //     return data;
    //   })

    //   this.setState({
    //     products,
    //     loading: false
    //   })
    // })

    // Reflecting Data in realtime
    // const db = getFirestore(this.props.app); 

    const colRef = collection(this.db, 'products' );
    // Query with firebase
    const q = query(colRef, 
      // where('title','==','Bike'), where('price','==',15000)
      orderBy('price', 'desc')
      );    
    onSnapshot(q, (snapshot)=>{
      snapshot.docs.map((doc)=>{
        console.log(doc.data())
      });

      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();

        data['id'] = doc.id;
        // return doc.data();
        return data;
      })

      this.setState({
        products,
        loading: false
      })

    });
    
      
  }

  handleIncreaseQuantity = (product) =>{
      console.log('hey increase the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      // products[index].qty += 1;

      // this.setState({
      //     products
      // })

      const docRef = doc(this.db,"products",products[index].id);

      updateDoc(docRef,{
        qty: products[index].qty +1
      })
      .then(()=>{
        console.log("Updated Data Successfully");
      })
      .catch((err)=>{
        console.log("Error : ", err);
      })
  }

  handleDecreaseQuantity = (product) =>{
      console.log('hey decrease the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
      if(products[index].qty<=1){
          return;
      }
      // products[index].qty -= 1;

      // this.setState({
      //     products
      // })

      const docRef = doc(this.db,"products",products[index].id);

      updateDoc(docRef,{
        qty: products[index].qty -1
      })
      .then(()=>{
        console.log("Updated Data Successfully");
      })
      .catch((err)=>{
        console.log("Error : ", err);
      })
  }

  handleDeleteProduct = (id) => {
      const { products } = this.state;

      // const items = products.filter((item)=> item.id !== id );

      // this.setState({
      //     products: items
      // })

      const docRef = doc(this.db,"products",id);
      deleteDoc(docRef)
      .then(()=>{
        console.log("Deleted Successfuly");
      })
      .catch((err)=>{
        console.log("Error: " ,err)
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
      if(product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price;
      }
      // return '';
    })

    return cartTotal;
  }

  addProduct = () => {
    addDoc(collection(this.db, "products"),{
      title: 'Bike',
      qty: 1,
      price: 25000,
      img : "https://media.istockphoto.com/vectors/hand-holding-megaphone-new-product-vector-id1191778759?k=20&m=1191778759&s=612x612&w=0&h=FU7-CTmqJcXRD5M6NUnlP7j7yu9D5OARMEdJS3JJJhY="
    })
    .then((docRef)=>{
      console.log("Product has been added", docRef);
    })
    .catch((error)=>{
      console.log("Error : ", error);
    })
  }

  render(){
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding:20, fontSize: 20}}>Add a Product</button>
        <Cart 
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products....</h1>}
        <div style={{ fontSize:20, padding:10}}>Total:- {this.getCartTotal()}</div>
      </div>
    );

  }
}


export default App;


// {
//   title: 'Watch',
//   price: 99,
//   qty: 1,
//   img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//   id: 1
// },
// {
//   title: 'Mobile Phone',
//   price: 999,
//   qty: 1,
//   img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
//   id:2
// },
// {
//   title: 'Laptop',
//   price: 9999,
//   qty: 1,
//   img: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80',
//   id:3
// }