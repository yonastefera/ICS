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
import NextLink from "next/link";
import {
  container,
  containerSync,
  opacity,
  slideLeft,
  slideRight,
  slideUp,
} from "@/animation";
import { motion } from "framer-motion";
import { Numbers } from "./_components/numbers";

export default function Home() {
  return (
    <>
      <Container sx={{ my: 16 }}>
        <motion.div
          variants={containerSync}
          initial="hidden"
          whileInView={"shown"}
          viewport={{ amount: 0.45 }}
        >
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                variants={slideRight}
                style={{
                  position: "relative",
                  height: "75vh",
                  marginTop: "58px",
                  marginLeft: "auto",
                  marginRight: "auto",
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
                  >
                    We Create Impactful
                    <br /> Digital Experiences
                  </Typography>
                  <Typography>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation on the runway
                    heading towards a streamlined cloud.
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
          <Grid container spacing={2} mt={6}>
            {services.slice(0, 3).map((service, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={`service-card-${index}`}>
                <motion.div variants={slideUp}>
                  <ServiceCard
                    title={service.name}
                    description={service.descriptions[0]}
                    order={`0${index + 1}`}
                    image={service.icon ?? ""}
                    id={service.id}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
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
              including software development, data analytics, cybersecurity, and
              digital transformation. Our team of highly skilled professionals
              is committed to delivering solutions that enhance government
              efficiency, security, and service delivery.
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
                  As a forward-thinking IT solutions provider, our company
                  stands at the forefront of innovation, offering a robust
                  capability statement tailored for you
                </Typography>
              </motion.div>

              <motion.div variants={opacity}>
                <Typography color="secondary" maxWidth="md" mt={2} mb={4}>
                  Learn more why our clients trust ICS with there projects
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
