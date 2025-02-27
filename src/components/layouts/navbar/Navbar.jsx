import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar>
        {/* Logo y Título */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" className="nav-link">
            Bodega Brisa Andina
          </Link>
        </Typography>

        {/* Menú de navegación */}
        <Box className="navbar-menu">
          <Button color="inherit" component={Link} to="/wines/red">
            Red Wine
          </Button>
          <Button color="inherit" component={Link} to="/wines/white">
            White Wine
          </Button>
          <Button color="inherit" component={Link} to="/wines/rosé">
            Rosé Wine
          </Button>

          <Link to="/cart" className="nav-link">
            <CartWidget />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
