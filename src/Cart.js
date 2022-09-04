import { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            products:[
                {
                    title: 'Watch',
                    price: 99,
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    title: 'Mobile Phone',
                    price: 999,
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    title: 'Laptop',
                    price: 9999,
                    qty: 1,
                    img: '',
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

    render(){
        // const arr = [1,2,3,4];
        const { products } = this.state;
        return (
            <div className="cart">
                { products.map((product)=>{
                    return (
                        <CartItem 
                        product={product} 
                        key={product.id} 
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}
                        />
                    )

                })}
            </div>
        )
    }
}

export default Cart;