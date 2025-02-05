import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, X } from "@mui/icons-material";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Box>
        <Typography variant="h6" gutterBottom>
          Síguenos en nuestras redes sociales
        </Typography>

        {/* Redes sociales*/}
        <Box className="footer-icons">
          <IconButton
            color="primary"
            href="https://www.facebook.com/Javi.cercasi?mibextid=LQQJ4d"
            target="_blank"
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="primary"
            href="https://www.instagram.com/javi.cercasi/"
            target="_blank"
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="primary"
            href="https://x.com/javicercasi?s=11"
            target="_blank"
          >
            <X />
          </IconButton>
        </Box>
      </Box>
    </footer>
  );
};
