import { NavLink } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";
import "./productCreateCard.scss";

import Button from "../button/Button";

const ProductCreateCard = () => {
    return (
        <Card className="product-create-card">
            <Button
                component={NavLink}
                to="/product"
                className="product-create-card-button">
                <CardMedia
                    component="img"
                    className="product-create-card__image"
                    image="/images/home/create.png"
                    alt="Imagen de crear producto"/>
            </Button>
        </Card>
    );
};

export default ProductCreateCard;