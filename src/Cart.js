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

    render(){
        // const arr = [1,2,3,4];
        const { products } = this.state;
        return (
            <div className="cart">
                { products.map((product)=>{
                    return <CartItem product={product} key={product.id} />

                })}
            </div>
        )
    }
}

export default Cart;