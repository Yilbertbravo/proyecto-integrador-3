import useProducts from "../../hooks/useProducts.js";
import { Box } from "@mui/material";
import "./productGallery.scss";

import ProductSearch from "../productSearch/ProductSearch.jsx";
import ProductCreateCard from "../productCreateCard/ProductCreateCard.jsx";
import ProductCard from "../productCard/ProductCard.jsx";

const ProductGallery = () => {
    const { products, searchProducts, removeProduct } = useProducts();

    return (
        <Box className="product-gallery">
            <Box className="product-gallery__search">
                <h3>Busca tu producto preferido</h3>
                <ProductSearch searchProducts={searchProducts}/>
            </Box>

            <Box
                className="product-gallery__cards">
                <ProductCreateCard/>
                {products?.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        removeProduct={removeProduct}/>
                ))}
            </Box>
        </Box>
    );
};

export default ProductGallery;