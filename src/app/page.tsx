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
import SquareIcon from "@mui/icons-material/Square";
import { Testimonials } from "./_components/testimonials";
import NextLink from "next/link";
import {
  container,
  containerSync,
  opacity,
  slideLeft,
  slideRight,
} from "@/animation";
import { motion } from "framer-motion";
import { Numbers } from "./_components/numbers";
import { FramedImage } from "./_components/framed-image";
import { ServiceCarousel } from "./_components/service-carousel";

export default function Home() {
  return (
    <main>
      <Container sx={{ my: 16, overflow: "hidden" }}>
        <motion.div
          variants={containerSync}
          initial="hidden"
          whileInView={"shown"}
        >
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                variants={slideRight}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <FramedImage src="/images/discussion.jpeg" alt="ICS employees" />
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                style={{
                  width: "100%",
                  height: " 100%",
                  display: "grid",
                  placeItems: "center",
                }}
                variants={slideLeft}
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
                    component={'h1'}
                  >
                    We Make Your Business harness technology to propel your
                    business forward and Smart
                  </Typography>
                  <Typography gutterBottom>
                    Welcome to ICS, where innovation is not just an aspiration
                    but a driving force behind everything we do. We are
                    committed to empowering businesses with cutting-edge
                    solutions that transcend industry standards and pave the way
                    for sustainable growth and success.
                  </Typography>
                  <Typography>
                    From pioneering software solutions to spearheading digital
                    transformations, we thrive on the philosophy that success
                    isn’t just achieved but cultivated through shared
                    partnerships and a relentless drive to exceed expectations.
                    Contact us today to learn more about how ICS can help you
                    achieve your business goals.
                  </Typography>
                  <Stack
                    gap={4}
                    sx={{ mt: 4, mb: 6 }}
                    direction={{ xs: "column", sm: "row" }}
                  >
                    <Numbers />
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
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
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
              component={'h2'}
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
            component={NextLink}
            href="/services"
          >
            View all services{" "}
          </Button>
        </Stack>

        <motion.div variants={container} whileInView="shown" initial="hidden">
          <ServiceCarousel />
        </motion.div>
      </Container>

      <Container sx={{ my: 16 }}>
        <motion.div
          variants={container}
          initial={"hidden"}
          whileInView={"shown"}
        >
          <Box sx={{ maxWidth: 950 }}>
            <Chip label="ABOUT COMPANY" variant="outlined" color="primary" />
            <motion.div variants={opacity}>
              <Typography
                variant="h3"
                gutterBottom
                fontFamily={'"Barlow Condensed", sans-serif'}
                fontWeight="bold"
                component={'h2'}
              >
                We excel in software solutions with a decade of expertise.
              </Typography>
            </motion.div>

            <motion.div variants={opacity}>
              <Typography gutterBottom>
                Our team of highly skilled professionals is dedicated to
                delivering solutions that enhance efficiency, security, and
                service delivery for both commercial and government clients.
              </Typography>
            </motion.div>

            <motion.div variants={opacity}>
              <Typography my={3}>
                Our comprehensive capabilities span the entire IT spectrum,
                including software development, data analytics, cybersecurity,
                and digital transformation. Our team of highly skilled
                professionals is committed to delivering solutions that enhance
                government efficiency, security, and service delivery.
              </Typography>
            </motion.div>

            <motion.div variants={opacity}>
              <Stack direction={{ xs: "column", sm: "row" }}>
                <List
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                    gap: 1,
                  }}
                >
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
                    <ListItemText>
                      Understanding our customer’s needs
                    </ListItemText>
                  </ListItem>

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
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      <Box sx={{ bgcolor: "primary.dark", py: 6, my: 16 }}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={"shown"}
          viewport={{ amount: 0.75 }}
        >
          <Container>
            <Stack direction={"column"} alignItems={"center"}>
              <motion.div variants={opacity}>
                <Typography
                  variant="h3"
                  gutterBottom
                  fontFamily={'"Barlow Condensed", sans-serif'}
                  fontWeight="bold"
                  color="textSecondary"
                  textAlign={"center"}
                  component={'h2'}
                >
                  Elevate your Projects with ICS
                </Typography>
              </motion.div>

              <motion.div variants={opacity}>
                <Typography
                  gutterBottom
                  color="secondary"
                  textAlign={"center"}
                  maxWidth="md"
                >
                  Our comprehensive capabilities span the entire IT spectrum,
                  including software development, data analytics, cybersecurity,
                  AI/ML, cloud computing, and digital transformation. By
                  harnessing the latest technologies such as automation,
                  blockchain, and IoT, our team of highly skilled professionals
                  is committed to delivering innovative solutions that enhance
                  efficiency, security, and service delivery for both commercial
                  and government projects, big and small.
                </Typography>
              </motion.div>

              <motion.div variants={opacity}>
                <Typography color="secondary" maxWidth="md" mt={2} mb={4}>
                  Explore our proven track record and credentials by downloading
                  our capability statement, which highlights our past clients
                  and government certifications.
                </Typography>
              </motion.div>

              <motion.div variants={opacity}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ textTransform: "Capitalize" }}
                  component={"a"}
                  href="/file/Capability_Statement.pdf"
                  color="secondary"
                  disableElevation
                  download
                >
                  DOWNLOAD CAPABILITY STATEMENT
                </Button>
              </motion.div>
            </Stack>
          </Container>
        </motion.div>
      </Box>

      <Container>
        <Chip label="TESTIMONIALS" variant="outlined" color="primary" />
        <Typography
          variant="h3"
          gutterBottom
          fontFamily={'"Barlow Condensed", sans-serif'}
          fontWeight="bold"
          component={'h2'}
        >
          Check Out What Our Clients Have To Say
        </Typography>
        <Box sx={{ my: 4 }}>
          <Testimonials />
        </Box>
      </Container>
    </main>
  );
}
