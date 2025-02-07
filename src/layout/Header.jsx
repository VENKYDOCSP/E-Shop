import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Badge, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import { FaBars, FaBell, FaShoppingCart, FaTimes } from "react-icons/fa";
import logo from '../assets/SHOP.CO.svg';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const StyledAppBar = styled(AppBar)(() => ({
    borderRadius: "30px",
    marginTop: "1rem",
    backgroundColor: 'transparent',
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0)"
}));

const LogoContainer = styled(Box)({
    cursor: "pointer",
    display: "flex",
    alignItems: "center"
});

const Logo = styled("img")({
    height: "30px",
    width: "auto"
});

const NavContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "2rem"
});

const NavLink = styled(Typography)({
    cursor: "pointer",
    color: "#333",
    "&:hover": {
        color: "#007bff"
    }
});

const IconContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "1rem"
});

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    let cartItems = useSelector((state) => state.cart.cartItems);
    const [cartCount, setCartCount] = useState(cartItems?.length || 0);
    useEffect(() => {
        console.log(cartItems, "cartItems");
        setCartCount(cartItems?.length || 0);
    }, [cartItems]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigationLinks = [
        { text: "Home", id: "home", link: '/' },
        { text: "Products", id: "products", link: '/products' },
        { text: "Cart", id: "cart", link: '/cart-details' },
        { text: "Order Summary", id: "orderSummary", link: '/order-details' },
    ];

    const drawerContent = (
        <Box sx={{ width: 250, pt: 2 }}>
            <IconButton
                sx={{ position: "absolute", right: 8, top: 8 }}
                onClick={handleDrawerToggle}
                aria-label="close drawer"
            >
                <FaTimes />
            </IconButton>
            <List>
                {navigationLinks.map((link) => (
                    <ListItem button key={link.id}>
                        <ListItemText primary={link.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Container maxWidth="lg" >
            <StyledAppBar position="fixed">
                <Toolbar sx={{ justifyContent: "space-between", backgroundColor: '#FFFFFF', borderRadius: '30px', mx: 5, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.12)" }}>
                    <LogoContainer>
                        <Link to="/" >
                            <Logo
                                src={logo}
                                alt="Company Logo"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9";
                                }}
                            />
                        </Link>
                    </LogoContainer>

                    {!isMobile && (
                        <NavContainer>
                            {navigationLinks.map((link) => (
                                <Link to={link.link} key={link.id} style={{ textDecoration: 'none' }}>
                                    <NavLink
                                        variant="button"
                                        className="nav-link"
                                        sx={{ '&:hover': { color: '#000000' }, color: '#333' }}
                                    >
                                        {link.text}
                                    </NavLink>
                                </Link>
                            ))}
                        </NavContainer>
                    )}

                    <IconContainer>
                        <Link to="/cart-details">
                            <IconButton aria-label="shopping cart" color="inherit">
                                <Badge badgeContent={cartCount} color="error">
                                    <FaShoppingCart style={{ color: "#333" }} />
                                </Badge>
                            </IconButton>
                        </Link>
                        
                        {/* <IconButton aria-label="Search Product" color="inherit">
                            <SearchIcon style={{ color: "#333" }} />
                        </IconButton> */}

                        {isMobile && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                            >
                                <FaBars style={{ color: "#333" }} />
                            </IconButton>
                        )}
                    </IconContainer>

                    <Drawer
                        variant="temporary"
                        anchor="right"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true
                        }}
                    >
                        {drawerContent}
                    </Drawer>
                </Toolbar>
            </StyledAppBar>

        </Container>
    );
};

export default Header;