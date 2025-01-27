import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

import ShoppingCartContext from "./ShoppingCartContext";

const ShoppingCartProvider = (props) => {
    const { children } = props;
    const { items, setItem } = useLocalStorage({ shoppingCart: [] });

    const setCartProduct = (product, amount) => {
        const shoppingCartWithoutThisProduct = items.shoppingCart?.filter((item) => item.id != product.id);

        if (amount <= 0) {
            setItem("shoppingCart", shoppingCartWithoutThisProduct);
        }

        if (amount > 0 && amount <= product.stock) {
            product.amount = amount;
            product.totalPrice = product.price * product.amount;
            setItem("shoppingCart", [ ...shoppingCartWithoutThisProduct, product ]);
        }
    };

    const getCartProduct = (id) => {
        return items.shoppingCart?.find((item) => item.id === id);
    };

    const addCartProduct = (product) => {
        const amount = getCartProduct(product.id)?.amount ?? 0;
        setCartProduct(product, amount+1);
    };

    const subtractCartProduct = (product) => {
        const amount = getCartProduct(product.id)?.amount ?? 0;
        setCartProduct(product, amount-1);
    };

    const countProducts = () => {
        return items.shoppingCart?.reduce((accumulator, item) => accumulator += item.amount, 0) ?? 0;
    };

    const calculateTotal = () => {
        return items.shoppingCart?.reduce((accumulator, item) => accumulator += (item.price * item.amount), 0) ?? 0;
    };

    const removeCartProduct = (id) => {
        const shoppingCartWithoutThisProduct = items.shoppingCart?.filter((item) => item.id != id);
        setItem("shoppingCart", shoppingCartWithoutThisProduct);
    };

    const removeAllCartProducts = () => {
        setItem("shoppingCart", []);
    };

    const buyCartProducts = () => {
        setItem("shoppingCart", []);
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                shoppingCart: items.shoppingCart,
                getCartProduct,
                addCartProduct,
                subtractCartProduct,
                countProducts,
                calculateTotal,
                removeCartProduct,
                removeAllCartProducts,
                buyCartProducts,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider;