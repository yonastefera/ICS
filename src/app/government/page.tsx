import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  return (
    <>
      <Container sx={{ my: 16 }}>
        <Grid container spacing={4}>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: "grid", placeItems: "center" }}
          >
            <Box sx={{ width: "calc(100% - 32px)" }}>
              <Stack gap={3} mb={4} ml={-2}>
                <ImageGrid sx={{ height: 180 }}>
                  <Image
                    src="/images/discussion.jpeg"
                    layout="fill"
                    alt="discussion"
                    style={{ objectFit: "cover" }}
                  />
                </ImageGrid>
                <ImageGrid sx={{ height: 180 }}>
                  <Image
                    src="/images/discussion.jpeg"
                    layout="fill"
                    alt="discussion"
                    style={{ objectFit: "cover" }}
                  />
                </ImageGrid>
              </Stack>
              <Stack gap={3} mr={-2}>
                <ImageGrid>
                  <Image
                    src="/images/discussion.jpeg"
                    layout="fill"
                    alt="discussion"
                    style={{ objectFit: "cover" }}
                  />
                </ImageGrid>
                <ImageGrid>
                  <Image
                    src="/images/discussion.jpeg"
                    layout="fill"
                    alt="discussion"
                    style={{ objectFit: "cover" }}
                  />
                </ImageGrid>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="h3"
              gutterBottom
              fontFamily={'"Barlow Condensed", sans-serif'}
              fontWeight="bold"
            >
              Empowering Government Clients
            </Typography>
            <Typography>
              Icreativv Consulting & Service is a distinguished small business
              enterprise with SBA 8(a) Certification, specializing in Managed
              Services and Technology Consulting. We are committed to delivering
              unparalleled value, fostering strong partnerships, and providing
              best-in-class IT solutions to empower Federal, State, and local
              clients in achieving their objectives. ICS excels in delivering
              high-end, innovative software, and engineering solutions tailored
              to the unique needs of government agencies.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              At ICS, we understand that the dynamic landscape of government
              requirements demands adaptability and agility. Our team is adept
              at navigating the intricate procurement processes, ensuring that
              our clients can benefit from our specialized services seamlessly.
              Whether engaging in joint ventures or subcontracting
              opportunities, we prioritize transparency and open communication
              to foster strong and enduring partnerships.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ my: 16, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "black",
            width: "70%",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/discussion.jpeg"
            layout="fill"
            alt="hero"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ position: "relative", py: 8 }}>
          <Card
            variant="outlined"
            sx={{
              p: 2,
              position: "relative",
              minWidth: "fit-content",
              width: "60%",
              ml: "auto",
              borderRadius: 6,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                fontFamily={'"Barlow Condensed", sans-serif'}
                fontWeight="bold"
              >
                Empowering Government Clients
              </Typography>

              <List>
                <ListItem>
                  <ListItemText
                    primary={"Full Legal Name"}
                    secondary={
                      <Typography
                        variant="body2"
                        component={"span"}
                        color="textPrimary"
                      >
                        Icreativv Consulting and Service
                      </Typography>
                    }
                  ></ListItemText>
                </ListItem>

                <Divider />

                <ListItem>
                  <ListItemText
                    primary={"Clients Serving"}
                    secondary={
                      <Typography
                        variant="body2"
                        component={"span"}
                        color="textPrimary"
                      >
                        Federal, State, local & Commercials
                      </Typography>
                    }
                  ></ListItemText>
                </ListItem>

                <Divider />

                <ListItem>
                  <ListItemText
                    primary={"Inception"}
                    secondary={
                      <Typography
                        variant="body2"
                        component={"span"}
                        color="textPrimary"
                      >
                        2017
                      </Typography>
                    }
                  ></ListItemText>
                </ListItem>

                <Divider />

                <ListItem>
                  <ListItemText
                    primary={" Local Office"}
                    secondary={
                      <Typography
                        variant="body2"
                        component={"span"}
                        color="textPrimary"
                      >
                        Atlanta, GA
                      </Typography>
                    }
                  ></ListItemText>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Container>

      <Box sx={{ bgcolor: "#082158", my: 16, py: 5, position: "relative" }}>
        <Container>
          <Typography
            variant="h3"
            gutterBottom
            fontFamily={'"Barlow Condensed", sans-serif'}
            fontWeight="bold"
            color="textSecondary"
          >
            Download Our Capability Statement
          </Typography>

          <Typography color="textSecondary">
            As a forward-thinking IT solutions provider, our company stands at
            the forefront of innovation, offering a robust capability statement
            tailored for government contracts. With a proven track record of
            delivering cutting-edge technology solutions, we specialize in
            addressing the unique challenges faced by government agencies
          </Typography>

          <Typography sx={{ my: 3 }} color="textSecondary">
            As a forward-thinking IT solutions provider, our company stands at
            the forefront of innovation, offering a robust capability statement
            tailored for government contracts. With a proven track record of
            delivering cutting-edge technology solutions, we specialize in
            addressing the unique challenges faced by government agencies
          </Typography>

          <Button
            color="warning"
            variant="contained"
            sx={{ borderRadius: 1000, textTransform: "capitalize" }}
          >
            Capability Statement
          </Button>
        </Container>
      </Box>

      <Container sx={{ my: 16 }}>
        <Typography
          variant="h3"
          gutterBottom
          fontFamily={'"Barlow Condensed", sans-serif'}
          fontWeight="bold"
        >
          Government Information
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <InfoCard primary="DUNS #" secondary="080854085" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <InfoCard primary="UEI" secondary="ZFSLCUTTBKM3" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <InfoCard primary="CAGE code" secondary="80NP0" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <InfoCard primary="SBA Case #" secondary="C00mlw" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <InfoCard
              primary="SBA Period"
              secondary="10/28/2020 to 10/27/2029"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <InfoCard
              primary="SBA Point of Contact"
              secondary="Dawnelle M Conley"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <InfoCard primary="DSBS Profile" secondary="Click Here" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <InfoCard primary="SAM.gov Registered" secondary="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const ImageGrid = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) => {
  return (
    <Box
      flexGrow={1}
      sx={{
        position: "relative",
        height: 135,
        borderRadius: 2,
        overflow: "hidden",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

const InfoCard = ({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      elevation={0}
      sx={{ bgcolor: "#082158", height: "100%", borderRadius: 3, p: 1.5 }}
    >
      <CardContent>
        <Typography gutterBottom sx={{ fontWeight: 700 }}>
          {primary}
        </Typography>
        <Typography variant="body2">{secondary}</Typography>
      </CardContent>
    </Card>
  );
};

export default Page;
