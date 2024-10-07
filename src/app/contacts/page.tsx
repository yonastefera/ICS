import { Chip, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { ContactCard } from "./_components/contact-card";
import { SendMessage } from "./_components/send-message";
import { Location } from "./_components/location";

const Page = () => {
  return (
    <>
      <Container sx={{ my: 16 }}>
        <Chip label="GET IN TOUCH" variant="outlined" color="primary" />

        <Grid container spacing={2} mt={3}>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <ContactCard
              icon={<PhoneIcon color={"secondary"} sx={{ fontSize: 48 }} />}
              primary="Mobile : +18182809198"
              secondary="Fax : +44-208-1234567"
              title={"Phone & Fax"}
            ></ContactCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <ContactCard
              icon={<EmailIcon color={"secondary"} sx={{ fontSize: 48 }} />}
              primary="mail@icreativv.com"
              secondary="Info.icreativv@gmail.com"
              title={"Mail Address"}
            ></ContactCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <ContactCard
              icon={<FmdGoodIcon color={"secondary"} sx={{ fontSize: 48 }} />}
              primary="1165 Springwood Connector , Atlanta, GA 30328 USA"
              title={"Our Location"}
            ></ContactCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <ContactCard
              icon={
                <WatchLaterIcon color={"secondary"} sx={{ fontSize: 48 }} />
              }
              primary="Sun - Thu 09 am - 06pm"
              secondary="Fri - Sat 4 pm - 10pm"
              title={"Office Hour"}
            ></ContactCard>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ my: 16 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Location />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            id="form"
            sx={{ scrollMarginTop: "32px" }}
          >
            <SendMessage />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Page;
