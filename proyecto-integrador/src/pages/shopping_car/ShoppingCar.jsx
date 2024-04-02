
import { useContext } from "react";

import { Box } from "@mui/material";
import "../shopping_car/shoppingCar.scss";

import ShoppingCartContext from "../../context/ShoppingCartContext";

import Button from "../../components/button/Button";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import FormShoppingCart from "../../components/form/formShoppingCart/FormShoppingCart.jsx";

const ShoppingCar = () => {
    const { shoppingCart, addCartProduct, subtractCartProduct } = useContext(ShoppingCartContext);

    const multiplyPrice = (a, b) => {
        return a * b;
    };

    return (
        <Box className="shoppingCar">
            <h2>Carrito de compras</h2>

            <table className="shoppingCar__table">
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Importe</th>
                    </tr>

                    {shoppingCart?.map((product) => (
                        <tr
                            key={product.id}
                        >
                            <td>
                                <Button
                                    className="margin--button button-shoppingcar"
                                    color="danger"
                                    onClick={() =>
                                        subtractCartProduct(product) }
                                ><RemoveIcon/></Button>
                                {product.amount}
                                <Button
                                    onClick={() => addCartProduct(product)}
                                    className="margin--button button-shoppingcar"><AddIcon/></Button>
                            </td>
                            <td> {product.name} </td>
                            <td>  {`$${product.price}`} </td>
                            <td>  {`$${multiplyPrice(product.price, product.amount)}`} </td>
                        </tr>
                    ))}
                    <tr>
                        <td className="final"></td>
                        <td className="final"></td>
                        <th className="final">Total a pagar</th>
                        <th className="final">{ shoppingCart?.reduce((acumulador, actual) => acumulador + (actual.price * actual.amount), 0)}</th>

                    </tr>
                </thead>
            </table>

            <FormShoppingCart>
            </FormShoppingCart>
        </Box>
    );
};

export default ShoppingCar;