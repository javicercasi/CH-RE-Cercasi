import { CartWidget } from "../../common/cartWidget/CartWidget";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import "./navbar.css";

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo y Título */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bodega Brisa Andina
        </Typography>

        {/* Menú de navegación */}
        <Box className="navbar-menu">
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Contacto</Button>
          <CartWidget />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
