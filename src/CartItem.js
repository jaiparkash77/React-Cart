import { Component } from "react";


const CartItem = (props) => {

        // console.log('this.props', this.props);
        const { title, price, qty, img } = props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src={product.img} style={styles.image} alt="Item" />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs. {price}</div>
                    <div style={{ color: '#777' }}>Qty. {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={()=>onIncreaseQuantity(product)} />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={()=>onDecreaseQuantity(product)} />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/484/484662.png" onClick={()=>{onDeleteProduct(product.id)}} />
                    </div>
                </div>
            </div>
        )

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