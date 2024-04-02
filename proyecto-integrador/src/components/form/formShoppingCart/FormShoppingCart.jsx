import { useContext, useState } from "react";
import useProducts from "../../../hooks/useProducts.js";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import "./formShoppingCart.scss";

import validationSchema from "./formShoppingCart.js";

import InputField from "../inputField/InputField.jsx";

import Button from "../../button/Button.jsx";
import Alert from "../../alert/Alert.jsx";
import ShoppingCartContext from "../../../context/ShoppingCartContext.jsx";

const FormShoppingCart = (props) => {
    const { initialValues } = props;

    const { shoppingCart, removeAllCartProducts, buyCartProducts } = useContext(ShoppingCartContext);

    const [ openAlert, setOpenAlert ] = useState(false);
    const [ severity, setSeverity ] = useState();
    const [ messageAlert, setMessageAlert ] = useState();
    const [ messageTitle, setMessageTitle ] = useState();

    const { products } = useProducts();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if (shoppingCart.length === 0) {
                setMessageTitle("Error:");
                setMessageAlert("No hay productos en el carro");
                setSeverity("error");
                setOpenAlert(true);
            }
            if (shoppingCart.length > 0) {
                console.log("Comprador:", values);
                console.log("Productos:", products);
                console.log("Productos del carrito:", shoppingCart);
                setMessageTitle("Accepted:");
                setMessageAlert("Compra satisfactoria");
                setSeverity("success");
                buyCartProducts();
                // await updateProductStock(products);
                setOpenAlert(true);
            }},
    });

    const getRandomNumberFront = () => {
        return Math.floor(Math.random() * (999999 - 10 + 1) + 10);
    };

    return (
        <Box
            component="form"
            className="form-product-shoppingcart"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                label="Nombre y Apellido"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                errorMessage={formik.touched.name && formik.errors.name}
                inputProps={{ maxLength: 25 }}>
            </InputField>

            <InputField
                label="Numero de Orden"
                name="factura"
                className="margin--input"
                value={Number(formik.values.factura=getRandomNumberFront())}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
            </InputField>

            <Button
                type="submit"
            >Comprar</Button>

            <Button
                component={NavLink}
                to={"/"}
                className="margin--button button-shoppingcar"
                color="danger"
                onClick={() =>removeAllCartProducts() }
            >Vaciar carrito</Button>
            <Alert
                variant="filled"
                severity={severity}
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                message={messageAlert}
                messageTitle={messageTitle}
                navigateUrl="/"></Alert>

        </Box>
    );
};

FormShoppingCart.propTypes = {
    initialValues: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        factura: PropTypes.number,

    }).isRequired,
};

FormShoppingCart.defaultProps = {
    initialValues: {
        name: "",
        factura:null,

    },
};

export default FormShoppingCart;