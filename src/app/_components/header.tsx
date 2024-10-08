"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";

export const headerLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Government", href: "/government" },
];
export const Header = () => {
  const pathName = usePathname();

  const [menuShown, setMenuShown] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true });

  const isOnLandingPage = pathName === "/";

  return (
    <Box
      sx={{
        bgcolor: "black",
        backgroundImage: "url(/images/hero-bg.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        position: "relative",
        pt: "101.4px",
      }}
    >
      <Box
        sx={{ bgcolor: "black", position: "absolute", inset: 0, opacity: 0.35 }}
        component="header"
      ></Box>

      <Container>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: !isOnLandingPage
              ? "#082158"
              : !trigger
              ? "transparent"
              : "#082158",
          }}
          elevation={0}
        >
          <Container sx={{ position: "relative" }}>
            <Toolbar
              sx={{
                bgcolor: "transparent",
                justifyContent: "space-between",
                px: { xs: 0 },
                py: { xs: 3.5 },
              }}
            >
              <Link
                component={NextLink}
                href="/"
                color="warning"
                variant="h5"
                fontWeight={700}
              >
                ICS
              </Link>

              <Stack alignItems={"center"} gap={3}>
                <Stack gap={2.5} display={{ xs: "none", md: "flex" }}>
                  {headerLinks.map((link) => (
                    <Button
                      variant="text"
                      key={`desktop-${link.href}`}
                      component={NextLink}
                      href={link.href}
                      color={pathName === link.href ? "warning" : "secondary"}
                      sx={{
                        fontWeight: pathName === link.href ? "bold" : "normal",
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>

                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  LinkComponent={NextLink}
                  href={"/contacts"}
                  sx={{ display: { xs: "none", md: "initial" } }}
                >
                  Get in touch
                </Button>

                <IconButton
                  color="secondary"
                  sx={{ display: { md: "none" } }}
                  onClick={() => setMenuShown((val) => true)}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer
          open={menuShown}
          onClose={() => setMenuShown(false)}
          anchor="top"
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "divider",
              borderBottomStyle: "solid",
            }}
          >
            <Typography variant="h5" fontWeight={700}>
              ICS
            </Typography>
            <IconButton onClick={() => setMenuShown(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Box sx={{ width: "auto", my: 2 }}>
            <List>
              {[...headerLinks, { label: "Contact us", href: "/contacts" }].map(
                (link) => (
                  <ListItem key={link.label} disablePadding>
                    <ListItemButton
                      LinkComponent={NextLink}
                      href={link.href}
                      sx={{ px: 4 }}
                      color="primary"
                    >
                      <ListItemText>{link.label}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
      </Container>

      {pathName === "/" && <Hero />}
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
          color="warning"
          variant="contained"
          disableElevation
          endIcon={<ArrowOutwardIcon />}
          size="large"
          LinkComponent={NextLink}
          sx={{ borderRadius: 1000 }}
          href={"/services"}
        >
          Explore More
        </Button>
      </Box>
    </Container>
  );
};
