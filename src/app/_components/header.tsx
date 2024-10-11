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
  alpha,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { container, opacity, slideUp } from "@/animation";

export const headerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Government", href: "/government" },
];

export const Header = () => {
  const theme = useTheme();
  const pathName = usePathname();

  const [menuShown, setMenuShown] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true });

  const isOnLandingPage = pathName === "/";
  const bgColor = alpha(theme.palette.tertiary.main, 0.95);

  return (
    <>
      <Container>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: !isOnLandingPage
              ? bgColor
              : !trigger
              ? "transparent"
              : bgColor,
          }}
        >
          <Container sx={{ position: "relative" }} maxWidth={false}>
            <Toolbar
              sx={{
                bgcolor: "transparent",
                justifyContent: "space-between",
                px: { xs: 0 },
                py: { xs: 2 },
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
                  color={pathName != "/contacts" ? "secondary" : "warning"}
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
              {[...headerLinks, { label: "Contact Us", href: "/contacts" }].map(
                (link) => (
                  <ListItem key={link.label} disablePadding>
                    <ListItemButton
                      LinkComponent={NextLink}
                      href={link.href}
                      sx={{ px: 4 }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          color:
                            link.href == pathName ? "primary" : "textPrimary",
                          fontWeight: link.href == pathName ? 700 : 400,
                        }}
                      >
                        {link.label}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
      </Container>

      {pathName === "/" && <Hero />}
    </>
  );
};

export const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        backgroundImage: "url(/images/hero-bg.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        pt: "96px",
        minHeight: "100vh",
        position: "relative",
        overflow: 'hidden'
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          top: 0,
          left: 0,
          height: "100%",
          width: "100vw",
          position: "absolute",
          objectFit: "cover",
        }}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <Box sx={{bgcolor: 'rgba(0,0,0,0.35)', position: 'absolute', inset: 0}}/>
      <Container sx={{ position: "relative" }}>
        <motion.div variants={container} initial="hidden" whileInView="shown">
          <Box sx={{ maxWidth: "sm", py: 12 }}>
            <motion.div variants={opacity}>
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
            </motion.div>
            <motion.div variants={opacity}>
              <Typography
                color="secondary"
                variant="h6"
                sx={{ mt: 4, mb: 6 }}
              >
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal
              </Typography>
            </motion.div>
            <motion.div variants={opacity}>
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
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
