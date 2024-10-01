"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const Header = () => {
  const [menuShown, setMenuShown] = useState(false);
  const links = [
    { label: "Home" },
    { label: "About us" },
    { label: "Services" },
    { label: "Contact" },
  ];
  return (
    <Box
      sx={{
        bgcolor: "black",
        backgroundImage: "url(/images/hero-bg.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        position: "relative",
      }}
    >
      <Box
        sx={{ bgcolor: "black", position: "absolute", inset: 0, opacity: 0.15 }}
        component="header"
      ></Box>
      <AppBar position="static" sx={{ bgcolor: "transparent" }}>
        <Container sx={{ position: "relative" }}>
          <Toolbar
            sx={{
              bgcolor: "transparent",
              justifyContent: "space-between",
              px: { xs: 0 },
              py: { xs: 3.5 },
            }}
          >
            <Typography color="warning" variant="h5" fontWeight={700}>
              ICS
            </Typography>

            <Stack alignItems={"center"} gap={3}>
              <Stack gap={2.5} display={{ xs: "none", md: "flex" }}>
                <Button variant="text" color="secondary">
                  Home
                </Button>
                <Button variant="text" color="secondary">
                  About us
                </Button>
                <Button variant="text" color="secondary">
                  Services
                </Button>
                <Button variant="text" color="secondary">
                  Contact us
                </Button>
              </Stack>

              <Button variant="outlined" color="secondary" size="large">
                Get in touch
              </Button>

              <IconButton
                color="secondary"
                sx={{ display: { md: "none" } }}
                onClick={() => setMenuShown((val) => !val)}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer open={menuShown} onClose={() => setMenuShown(false)} anchor="top">
        <Box sx={{ width: "auto" }}>
          <List>
            {links.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton>
                  <ListItemText>{link.label}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Hero />
    </Box>
  );
};

export const Hero = () => {
  return (
    <Container sx={{ position: "relative" }}>
      <Box sx={{ maxWidth: "md", py: 16 }}>
        <Typography
          color="secondary"
          variant="h2"
          fontWeight={700}
          lineHeight={1.2}
        >
          Driven By{" "}
          <Typography
            color="primary"
            component={"span"}
            variant="h2"
            fontWeight={700}
            lineHeight={1.2}
          >
            Quality
          </Typography>{" "}
          & Dedicated to Solutions
        </Typography>
        <Typography color="secondary" variant="body1" sx={{ mt: 4, mb: 6 }}>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal
        </Typography>
        <Button
          color="secondary"
          variant="text"
          endIcon={<ArrowOutwardIcon />}
          size="large"
        >
          Explore More
        </Button>
      </Box>
    </Container>
  );
};
