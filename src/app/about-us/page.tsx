import {
  Container,
  Box,
  Chip,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia,
  Card,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import Image from "next/image";
import SquareIcon from "@mui/icons-material/Square";
import users from "../../data/users-data.json";
import { FramedImage } from "../_components/framed-image";

const Page = () => {
  return (
    <main>
      <Container sx={{ my: 16 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <FramedImage src="/images/discussion.jpeg" priority={true} alt="discussion"/>
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
                <Chip label="WHO WE ARE" variant="outlined" color="primary" />
                <Typography
                  variant="h3"
                  gutterBottom
                  fontFamily={'"Barlow Condensed", sans-serif'}
                  fontWeight="bold"
                  color="primary"
                  component={'h1'}
                >
                  About Us
                </Typography>
                <Stack direction="column" gap={3}>
                  <Typography variant="body1">
                    Established in 2017, Icreativv Consulting and Service (ICS)
                    is a leading technology solutions provider based in Atlanta,
                    Georgia. Committed to prioritizing our clients&apos; needs,
                    we deliver exceptional solutions and services at competitive
                    prices.
                  </Typography>
                  <Typography variant="body1">
                    At ICS, we believe that quality and affordability go
                    hand-in-hand. Contact us today to learn more about how we
                    can help your organization achieve success with our
                    affordable, high-quality solutions.
                  </Typography>
                  <Typography variant="body1">
                    We cultivate strong relationships with our clients,
                    fostering trust and transparency as the cornerstones of our
                    interactions. At ICS, we firmly believe that quality and
                    affordability can coexist harmoniously. Contact us today to
                    discover how our affordable, high-quality solutions can
                    empower your organization to achieve remarkable success.
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ my: 16 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <FramedImage src="/images/discussion.jpeg"  alt="discussion"/>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                wdith: "100%",
                height: " 100%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h3"
                  gutterBottom
                  fontFamily={'"Barlow Condensed", sans-serif'}
                  fontWeight="bold"
                  color="primary"
                  component={'h2'}
                >
                  Our Mission
                </Typography>

                <Typography variant="body1">
                  At the core of our mission is the relentless pursuit of
                  empowering businesses with cutting-edge solutions that
                  transcend industry standards. Established with a passion for
                  technology, our journey is woven with a tapestry of expertise,
                  collaboration, and a steadfast commitment to our clients.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ my: 16 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <FramedImage src="/images/discussion.jpeg" alt="discussion" />
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
                <Typography
                  variant="h3"
                  gutterBottom
                  fontFamily={'"Barlow Condensed", sans-serif'}
                  fontWeight="bold"
                  color="primary"
                  component={'h2'}
                >
                  Our Values
                </Typography>
                <Typography variant="body1">
                  Rooted in the vision of our immigrant founder, ICS operates
                  with a foundation built on gratitude, honesty, partnership,
                  and an unwavering commitment to community upliftment. These
                  principles shape our values, guiding us in every endeavor we
                  undertake.
                </Typography>
                <Stack direction="column" gap={3} mt={3}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <SquareIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                      >
                        Honesty & Integrity
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SquareIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                      >
                        Inclusion & Diversity
                      </ListItemText>
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <SquareIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                      >
                        Partnership & Relationship Focus
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SquareIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{ sx: { fontWeight: 600 } }}
                      >
                        Social Responsibility
                      </ListItemText>
                    </ListItem>
                  </List>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ my: 16 }}>
        <Chip label="OUR EXPERTS" variant="outlined" color="primary" />
        <Typography
          variant="h3"
          gutterBottom
          fontFamily={'"Barlow Condensed", sans-serif'}
          fontWeight="bold"
          mb={4}
        >
          Meet Our Creative Staff
        </Typography>

        <Grid container spacing={2}>
          {users.map((user, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={`team-member-${index}`}
            >
              <Card elevation={0}>
                <CardMedia sx={{ height: 420, position: "relative" }}>
                  <Image
                    src={user.image}
                    fill
                    alt={user.name}
                    style={{ objectFit: "cover", borderRadius: 4 }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="body2" gutterBottom>
                    {user.role}
                  </Typography>
                  <Typography variant="body1" fontWeight={700}>
                    {user.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Page;
