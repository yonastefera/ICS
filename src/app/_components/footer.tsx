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

function Footer() {
  const pages = [
    { label: "Home" },
    { label: "About us" },
    { label: "Services" },
    { label: "Contact" },
    { label: "Terms and Conditions" },
    { label: "Privacy Policy" },
  ];

  const services = [
    { label: "Software Engineering" },
    { label: "Enterprise IT Solutions" },
    { label: "Cyber Security" },
    { label: "Cloud Migration" },
    { label: "Data Transformation" },
  ];

  return (
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
        sx={{ bgcolor: "black", position: "absolute", inset: 0, opacity: 0.15 }}
      />
      <Container sx={{ position: "relative" }}>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, md: 12, lg: 5 }}>
            <Typography
              color="warning"
              variant="h5"
              fontWeight={700}
              gutterBottom
            >
              ICS
            </Typography>
            <Typography color="textSecondary" variant="body2">
              ICS thrives on innovation, consistently exploring and adopting
              emerging technologies to stay ahead of the curve. We believe in
              driving technological evolution that empowers businesses to thrive
              in dynamic environments.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <ListItem>
              <ListItemText
                primary={
                  <Typography color="textSecondary" variant="h6">
                    Pages
                  </Typography>
                }
              />
            </ListItem>

            <Stack direction="column">
              {pages.map((link) => (
                <ListItem disablePadding key={link.label}>
                  <ListItemButton>
                    <ListItemText
                      primary={
                        <Typography color="textSecondary" variant="body2">
                          {link.label}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 2 }}>
            <ListItem>
              <ListItemText
                primary={
                  <Typography color="textSecondary" variant="h6">
                    Services
                  </Typography>
                }
              />
            </ListItem>

            <Stack direction="column">
              {services.map((link) => (
                <ListItem disablePadding key={link.label}>
                  <ListItemButton aria-label="Navigate to Home">
                    <ListItemText
                      primary={
                        <Typography color="textSecondary" variant="body2">
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
                  <Typography color="textSecondary" variant="h6">
                    Contact us
                  </Typography>
                }
              />
            </ListItem>

            <Stack direction="column">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MarkunreadIcon color="secondary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography color="textSecondary" variant="body2">
                        mail@icreativv.com
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PhoneIcon color="secondary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography color="textSecondary" variant="body2">
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
                      <Typography color="textSecondary" variant="body2">
                        1165 springwood connector, Atlanta GS 30328 USA
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 8, borderColor: "rgba(255,255,255,0.6)" }} />
        <Stack justifyContent="center" py={2}>
          <Typography color="secondary" variant="body2">
            Copyright © 2024 All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
