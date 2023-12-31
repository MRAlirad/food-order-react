/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CartContext from './cart-context';

const CartProvider = (props) => {
    const addItemToCartHandler = item => {};
    const removeItemToCartHandler = item => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }
	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
