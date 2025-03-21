"use client";

import {
  Box,
  Container,
  Divider,
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { NewsLetter } from "./news-letter";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { headerLinks } from "./header";
import services from "@/data/service-data.json";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pages = [...headerLinks, { label: "Contact Us", href: "/contacts" }];
  const pathName = usePathname();

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {!pathName.startsWith("/legal") && (
        <Box
          sx={{
            bgcolor: "black",
            backgroundImage: "url(/images/footer-bg.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            py: 6,
            my: {xs: 8, md:16} ,
          }}
        >
          <Box
            sx={{
              bgcolor: "black",
              position: "absolute",
              inset: 0,
              opacity: 0.15,
            }}
          />
          <Container sx={{ position: "relative" }}>
            <NewsLetter />
          </Container>
        </Box>
      )}

      {!pathName.startsWith("/legal") && (
        <Container sx={{ my: {xs: 8, md:16}  }}>
          <Link
            component={NextLink}
            href="/contacts#form"
            sx={{ fontSize: { xs: "10vw", md: "4.5vw" }, fontWeight: "bold" }}
            color="primary"
          >
            <Stack
              component={"h3"}
              alignItems={"center"}
              sx={{
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.primary.main}`,
                display: "inline-flex",
                my: 0
              }}
              gap={2}
            >
              <span>LET’S TALK!</span>
              <ArrowOutwardIcon
                color="primary"
                sx={{ fontSize: { xs: "10vw", md: "4.5vw" } }}
              />
            </Stack>
          </Link>
        </Container>
      )}

      <Box
        component="footer"
        sx={{
          bgcolor: "black",
          backgroundImage: "url(/images/footer-bg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          pt: 6,
        }}
      >
        <Box
          sx={{
            bgcolor: "black",
            position: "absolute",
            inset: 0,
            opacity: 0.15,
          }}
        />
        <Container sx={{ position: "relative" }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12, lg: 4 }}>
              <Link
                component={NextLink}
                href="/"
                color="warning"
                variant="h5"
                fontWeight={700}
                sx={{ mb: 3, display: "block" }}
              >
                ICS
              </Link>
              <Typography color="secondary" variant="body2" mt={3}>
                ICS thrives on innovation, consistently exploring and adopting
                emerging technologies to stay ahead of the curve. We believe in
                driving technological evolution that empowers businesses to
                thrive in dynamic environments.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4, lg: 2 }}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      color="secondary"
                      variant="h6"
                      component={"h3"}
                    >
                      Pages
                    </Typography>
                  }
                />
              </ListItem>

              <Stack direction="column">
                {pages.map((link) => (
                  <ListItem disablePadding key={link.label}>
                    <ListItemButton LinkComponent={NextLink} href={link.href}>
                      <ListItemText
                        primary={
                          <Typography color="secondary" variant="body2">
                            {link.label}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4, lg: 3 }}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      color="secondary"
                      variant="h6"
                      component={"h3"}
                    >
                      Services
                    </Typography>
                  }
                />
              </ListItem>

              <Stack direction="column">
                {services.map((link) => (
                  <ListItem disablePadding key={link.id}>
                    <ListItemButton
                      aria-label={`Navigate to ${link.name} service`}
                      LinkComponent={NextLink}
                      href={`/services/${link.id}`}
                    >
                      <ListItemText
                        primary={
                          <Typography color="secondary" variant="body2">
                            {link.name}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4, lg: 3 }}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      color="secondary"
                      variant="h6"
                      component={"h3"}
                    >
                      Contact Us
                    </Typography>
                  }
                />
              </ListItem>

              <Stack direction="column">
                <ListItem disablePadding>
                  <ListItemButton
                    LinkComponent={"a"}
                    href={"mailto:mail@icreativv.com"}
                  >
                    <ListItemIcon>
                      <MarkunreadIcon color="secondary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography color="secondary" variant="body2">
                          mail@icreativv.com
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton LinkComponent={"a"} href="tel:+18182809198">
                    <ListItemIcon>
                      <PhoneIcon color="secondary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography color="secondary" variant="body2">
                          +18182809198
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FmdGoodIcon color="secondary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography color="secondary" variant="body2">
                          1165 Springwood Connector, Atlanta GA 30328 USA
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 8, borderColor: "rgba(255,255,255,0.6)" }} />
          <Stack
            justifyContent="space-between"
            py={2}
            direction={{ xs: "column", md: "row" }}
            gap={2}
            sx={{ alignItems: "center" }}
          >
            <Typography color="secondary" variant="body2">
              Copyright © {currentYear} All Rights Reserved.
            </Typography>

            <Stack spacing={2}>
              <Link
                variant="body2"
                color="secondary"
                href="/legal/privacy-policy"
                component={NextLink}
              >
                Privacy statement
              </Link>

              <>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "secondary.main" }}
                />
                <Link
                  variant="body2"
                  color="secondary"
                  href="/legal/terms-and-use"
                  component={NextLink}
                >
                  Terms and use
                </Link>
                
              </>

              <>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: "secondary.main" }}
                />
                <Link
                  variant="body2"
                  color="secondary"
                  href="/legal/terms-and-use"
                  component={NextLink}
                >
                  Cookie Policy
                </Link>
                
              </>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
