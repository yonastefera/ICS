"use client";

import {
  Box,
  Button,
  Chip,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { ServiceCard } from "./_components/service-card";
import SquareIcon from "@mui/icons-material/Square";
import { Testimonials } from "./_components/testimonials";
import services from "../data/service-data.json";

export default function Home() {
  return (
    <>
      <Container sx={{ my: 16 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "calc(100% - 58px)",
                my: "58px",
                maxWidth: "566px",
                mx: "auto",
                aspectRatio: "10/12",
              }}
            >
              <Image
                src="/images/discussion.jpeg"
                fill
                alt="discussion"
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  position: "absolute",
                  top: -29,
                  right: -29,
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderTopWidth: 5,
                  borderRightWidth: 5,
                  borderColor: "black",
                }}
              />
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  position: "absolute",
                  bottom: -29,
                  left: -29,
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderBottomWidth: 5,
                  borderLeftWidth: 5,
                  borderColor: "black",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                wdith: "100%",
                height: " 100%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Box>
                <Chip
                  label="ABOUT COMPANY"
                  variant="outlined"
                  color="primary"
                />
                <Typography
                  variant="h3"
                  gutterBottom
                  fontFamily={'"Barlow Condensed", sans-serif'}
                  fontWeight="bold"
                >
                  We Create Impactful
                  <br /> Digital Experiences
                </Typography>
                <Typography>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation on the runway
                  heading towards a streamlined cloud.
                </Typography>

                <Stack
                  gap={4}
                  sx={{ mt: 4, mb: 6 }}
                  direction={{ xs: "column", sm: "row" }}
                >
                  <Box>
                    <Typography fontWeight={700} gutterBottom>
                      10+
                    </Typography>
                    <Typography>years of experience</Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight={700} gutterBottom>
                      50+
                    </Typography>
                    <Typography>completed projects</Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight={700} gutterBottom>
                      120+
                    </Typography>
                    <Typography>Team members</Typography>
                  </Box>
                </Stack>

                <Button
                  variant="outlined"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{ borderRadius: 1000 }}
                  color="info"
                >
                  Explore More
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ my: 16 }}>
        <Chip label=" WHAT WE OFFER" variant="outlined" color="primary" />

        <Stack
          justifyContent={"space-between"}
          gap={3}
          alignItems={"start"}
          direction={{ xs: "column", md: "row" }}
        >
          <Box sx={{ maxWidth: "md" }}>
            <Typography
              variant="h3"
              gutterBottom
              fontFamily={'"Barlow Condensed", sans-serif'}
              fontWeight="bold"
            >
              What We Can Do For <br /> Our Clients
            </Typography>
            <Typography>
              At ICS, we are committed to delivering unparalleled excellence
              through cutting-edge software solutions designed to tackle your
              unique business challenges head-on. Whether you seek to streamline
              processes, enhance efficiency, or elevate customer experiences,
              our meticulously crafted software solutions are meticulously
              engineered to propel your business forward.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            endIcon={<ArrowOutwardIcon />}
            sx={{ borderRadius: 1000 }}
            color="info"
          >
            View all services{" "}
          </Button>
        </Stack>

        <Grid container spacing={2} mt={6}>
          {services.slice(0, 3).map((service, index) => (
            <Grid size={{ xs: 12, md: 4 }}>
              <ServiceCard
                title={service.name}
                description={service.descriptions[0]}
                order={`0${index + 1}`}
                image={service.icon ?? ""}
                id={service.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ my: 16 }}>
        <Box sx={{ maxWidth: 950 }}>
          <Chip label="ABOUT COMPANY" variant="outlined" color="primary" />
          <Typography
            variant="h3"
            gutterBottom
            fontFamily={'"Barlow Condensed", sans-serif'}
            fontWeight="bold"
          >
            We excel in software solutions with a decade of expertise.
          </Typography>

          <Typography gutterBottom>
            Our team of highly skilled professionals is dedicated to delivering
            solutions that enhance efficiency, security, and service delivery
            for both commercial and government clients.
          </Typography>

          <Typography mt={3}>
            Our comprehensive capabilities span the entire IT spectrum,
            including software development, data analytics, cybersecurity, and
            digital transformation. Our team of highly skilled professionals is
            committed to delivering solutions that enhance government
            efficiency, security, and service delivery.
          </Typography>

          <Stack mt={6} direction={{ xs: "column", sm: "row" }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SquareIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>Quick response time</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SquareIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>Understanding our customer’s needs</ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SquareIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>High level of professionalism</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SquareIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>Incredible customer service</ListItemText>
              </ListItem>
            </List>
          </Stack>
        </Box>
      </Container>

      <Box sx={{ bgcolor: "#082158", py: 6, my: 16 }}>
        <Container>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography
              variant="h3"
              gutterBottom
              fontFamily={'"Barlow Condensed", sans-serif'}
              fontWeight="bold"
              color="textSecondary"
              textAlign={"center"}
            >
              Elevate your Projects with ICS
            </Typography>

            <Typography
              gutterBottom
              color="secondary"
              textAlign={"center"}
              maxWidth="md"
            >
              As a forward-thinking IT solutions provider, our company stands at
              the forefront of innovation, offering a robust capability
              statement tailored for you
            </Typography>

            <Typography color="secondary" maxWidth="md" mt={2} mb={4}>
              Learn more why our clients trust ICS with there projects
            </Typography>

            <Button variant="contained" size="large">
              DOWNLOAD CAPABILITY STATEMENT
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container>
        <Chip label="TESTIMONIALS" variant="outlined" color="primary" />
        <Typography
          variant="h3"
          gutterBottom
          fontFamily={'"Barlow Condensed", sans-serif'}
          fontWeight="bold"
        >
          Check Out What Our Clients Have To Say
        </Typography>
        <Box sx={{ my: 4 }}>
          <Testimonials />
        </Box>
      </Container>
    </>
  );
}
