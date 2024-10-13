import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { Fragment } from "react";
import { InfoCard } from "./_components/info-card";
import { FramedImage } from "../_components/framed-image";

const profile = [
  {
    label: "Full Legal Name",
    description: "Icreativv Consulting and Service",
  },
  {
    label: "Clients Serving",
    description: "Federal, State, local & Commercials",
  },
  { label: "Inception", description: "2017" },
  { label: "Local  office", description: "Atlanta, GA" },
];

const codes = [
  "518210 - Data Processing, Hosting and Related Services",
  "541511 - Custom Computer Programming Services",
  "541512 - Computer Systems Design Services",
  "541515 - IT Services",
  "541519 - Other Computer Related Services",
  "541611 - Administrative and Management Consulting Services",
  "54191 - Market Research and Public Opinion Polling",
  "541990 - Other Scientific and Technical Consulting Services",
  "561320 - Temporary Help Services",
  "111 & 112 - Crop & Animal Production",
];

const Page = () => {
  return (
    <>
      <Container sx={{ my: 16 }}>
        <Grid container spacing={4}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "grid",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Box>
              <Chip label="GOVERNMENT" variant="outlined" color="primary" />
              <Typography
                variant="h3"
                gutterBottom
                fontFamily={'"Barlow Condensed", sans-serif'}
                fontWeight="bold"
                color="primary"
              >
                Empowering Government Clients
              </Typography>
              <Typography>
                Icreativv Consulting & Service is a distinguished small business
                enterprise with SBA 8(a) Certification, specializing in Managed
                Services and Technology Consulting. We are committed to
                delivering unparalleled value, fostering strong partnerships,
                and providing best-in-class IT solutions to empower Federal,
                State, and local clients in achieving their objectives. ICS
                excels in delivering high-end, innovative software, and
                engineering solutions tailored to the unique needs of government
                agencies.
              </Typography>
              <Typography sx={{ mt: 3 }}>
                At ICS, we understand that the dynamic landscape of government
                requirements demands adaptability and agility. Our team is adept
                at navigating the intricate procurement processes, ensuring that
                our clients can benefit from our specialized services
                seamlessly. Whether engaging in joint ventures or subcontracting
                opportunities, we prioritize transparency and open communication
                to foster strong and enduring partnerships.
              </Typography>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "grid", placeItems: "center" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <FramedImage src="/images/discussion.jpeg" priority={true} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ my: 16, position: "relative" }}>
        <Card
          sx={{
            p: 2,
            position: "relative",
            minWidth: "fit-content",
            width: { xs: "100%", md: "60%" },
            mx: "auto",
            borderRadius: 3,
            boxShadow: '0px 4px 16px 0px #0821582B'

          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              fontFamily={'"Barlow Condensed", sans-serif'}
              fontWeight="bold"
              color="primary"
            >
              Company Profile
            </Typography>

            <List>
              {profile.map((item, index) => (
                <Fragment key={`company-profile-${index}`}>
                  <ListItem sx={{ py: 2, px: 0 }}>
                    <ListItemText
                      sx={{
                        display: { xs: "block", md: "grid" },
                        gap: 2,
                        alignItems: "center",
                        gridTemplateColumns: "repeat(2, 1fr)",
                      }}
                      primaryTypographyProps={{
                        sx: { fontWeight: 500 },
                        component: "div",
                      }}
                      secondaryTypographyProps={{
                        sx: { textAlign: "start" },
                        variant: "body2",
                        component: "div",
                        color: "textPrimary",
                      }}
                      primary={item.label}
                      secondary={item.description}
                    ></ListItemText>
                  </ListItem>
                </Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>

      <Box sx={{ bgcolor: "tertiary.main", my: 16, py: 8 }}>
        <Container>
          <Typography
            variant="h3"
            gutterBottom
            fontFamily={'"Barlow Condensed", sans-serif'}
            fontWeight="bold"
            color="textSecondary"
          >
            Government Information
          </Typography>

          <List
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 2,
            }}
          >
            {codes.map((code, index) => (
              <ListItem key={`code-${index}`} sx={{ py: 0.5, px: 0 }}>
                <ListItemText
                  primary={code}
                  primaryTypographyProps={{ color: "secondary" }}
                />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>

      <Box sx={{ my: 16, py: 5, position: "relative" }}>
        <Container maxWidth="md">
          <Stack direction="column" alignItems={"center"}>
            <Typography
              variant="h3"
              gutterBottom
              fontFamily={'"Barlow Condensed", sans-serif'}
              fontWeight="bold"
              textAlign={"center"}
            >
              Elevate your Projects with ICS
            </Typography>

            <Typography textAlign={"center"}>
              As a forward-thinking IT solutions provider, our company stands at
              the forefront of innovation, offering a robust capability
              statement tailored for you
            </Typography>

            <Typography sx={{ my: 3 }} textAlign={"center"}>
              Learn more why our clients trust ICS with there projects
            </Typography>

            <Button
              color="primary"
              variant="contained"
              size="large"
              sx={{ borderRadius: 1000, textTransform: "capitalize" }}
              component={"a"}
              href="/file/Capability_Statement.pdf"
              download
            >
              Capability Statement
            </Button>
          </Stack>
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

export default Page;
