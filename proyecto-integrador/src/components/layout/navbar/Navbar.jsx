import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Badge,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import "./navbar.scss";

import links from "../../../links/links";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartContext from "../../../context/ShoppingCartContext";

const Navbar = () => {
    const [ openDrawer, setOpenDrawer ] = useState(false);
    const [ carrito, setCarrito ] = useState();
    const { shoppingCart } = useContext(ShoppingCartContext);

    useEffect(() => {
        if (shoppingCart?.length === 0) {
            setCarrito(0);
        }
        else if (shoppingCart?.length > 0) {
            const reduce = shoppingCart.reduce((acumulador, actual) => acumulador + actual.amount, 0);
            setCarrito(reduce);
        }
    }, [shoppingCart]);

    const handleOnClickOpenDrawer = () => {
        setOpenDrawer(true);
    };

    const handleOnClickCloseDrawer = () => {
        setOpenDrawer(false);
    };

    return (
        <Box
            component="nav"
            className="navbar">

            <Box className="navbar__drawer-icon">
                <MenuIcon onClick={handleOnClickOpenDrawer}/>
            </Box>

            <Box className="navbar__items">
                {links.map((link, index) => (
                    <Button
                        key={index}
                        component={NavLink}
                        to={link.url}>
                        {link.title}
                    </Button>
                ))}
            </Box>

            <Box className="navbar__shopping-cart">
                <IconButton
                    component={NavLink}
                    to={"/shoppingCar"}>
                    <Badge
                        className="navbar__shopping-cart__icon-badge"
                        badgeContent={carrito}
                        showZero
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}>
                        <ShoppingBagIcon/>
                    </Badge>
                </IconButton>
            </Box>

            <Drawer
                open={openDrawer}
                anchor="top"
                onClose={handleOnClickCloseDrawer}>
                <List>
                    {links.map((link, index) => (
                        <ListItem
                            key={index}
                            component={NavLink}
                            to={link.url}>
                            <ListItemButton
                                onClick={handleOnClickCloseDrawer}>
                                <ListItemIcon>{link.icon}</ListItemIcon>
                                <ListItemText>{link.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
        </Box>
    );
};

export default Navbar;