import { Component } from "react";


class CartItem extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Mobile Phone',
            price: 999,
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log('test',this.state);
    }
    render() {
        const { title, price, qty, img } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="Item" />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs. {price}</div>
                    <div style={{ color: '#777' }}>Qty. {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={this.increaseQuantity.bind(this)} />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/484/484662.png" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;