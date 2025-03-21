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
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Fragment } from 'react'
import { InfoCard } from './_components/info-card'
import { FramedImage } from '../_components/framed-image'
import { p } from 'framer-motion/client'
import { PartnersCarousel } from '../_components/partners/PartnerCardCarousel'
import NextLink from 'next/link'

const profile = [
  {
    label: 'Full Legal Name',
    description: 'Icreativv Consulting and Service',
  },
  {
    label: 'Clients Serving',
    description: 'Federal, State, local & Commercials',
  },
  { label: 'Inception', description: '2017' },
  { label: 'Local  office', description: 'Atlanta, GA' },
]

const codes = [
  '518210 - Data Processing, Hosting and Related Services',
  '541511 - Custom Computer Programming Services',
  '541512 - Computer Systems Design Services',
  '541515 - IT Services',
  '541519 - Other Computer Related Services',
  '541611 - Administrative and Management Consulting Services',
  '54191 - Market Research and Public Opinion Polling',
  '541990 - Other Scientific and Technical Consulting Services',
  '561320 - Temporary Help Services',
  '111 & 112 - Crop & Animal Production',
]

const Page = () => {
  return (
    <>
      <Container sx={{ my: { xs: 8, md: 16 }, overflow: 'hidden' }}>
        <Grid container spacing={4}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: 'grid',
              alignItems: 'center',
              justifyContent: 'start',
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
                component={'h1'}
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
            sx={{ display: 'grid', placeItems: 'center' }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <FramedImage
                src="/images/government-clients.jpg"
                alt="Government clients"
                priority={true}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ my: { xs: 8, md: 16 } }}>
        <Box
          sx={{
            background: 'url(/images/teams.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            py: { xs: 8 },
            '&:before': {
              background:
                'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))',
              content: '""',
              position: 'absolute',
              inset: 0,
            },
          }}
        >
          <Container>
            <Card
              sx={{
                p: 2,
                position: 'relative',
                backgroundColor: 'rgba(0,0,0,0.15)',
                // backgroundColor: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.5)',
                textShadow: '0 2px 2px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(24px)',
                mx: 'auto',
                borderRadius: 3,
                boxShadow: '0px 4px 16px 0px #0821582B',
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  fontFamily={'"Barlow Condensed", sans-serif'}
                  fontWeight="bold"
                  color="secondary"
                  component={'h2'}
                >
                  Company Profile
                </Typography>

                <List>
                  {profile.map((item, index) => (
                    <Fragment key={`company-profile-${index}`}>
                      <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText
                          sx={{
                            display: { xs: 'block', md: 'grid' },
                            gap: 2,
                            alignItems: 'center',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                          }}
                          slotProps={{
                            primary: {
                              sx: { fontWeight: 500 },
                              component: 'div',
                              color: 'secondary',
                              variant: 'body1',
                            },
                            secondary: {
                              sx: { textAlign: 'start' },
                              component: 'div',
                              color: 'secondary',
                              variant: 'body1',
                            },
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
        </Box>

        <Box sx={{ bgcolor: 'tertiary.main', py: 8 }}>
          <Container>
            <Typography
              variant="h3"
              gutterBottom
              fontFamily={'"Barlow Condensed", sans-serif'}
              fontWeight="bold"
              color="secondary"
              component={'h2'}
            >
              Government Information
            </Typography>

            <List
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 2,
              }}
            >
              {codes.map((code, index) => (
                <ListItem key={`code-${index}`} sx={{ py: 0.5, px: 0 }}>
                  <ListItemText
                    primary={code}
                    primaryTypographyProps={{ color: 'secondary' }}
                  />
                </ListItem>
              ))}
            </List>
          </Container>
        </Box>
      </Box>

      <Box sx={{ position: 'relative', my: { xs: 8, md: 16 } }}>
        <Container maxWidth="md">
          <Stack direction="column" alignItems={'center'}>
            <Typography
              variant="h3"
              gutterBottom
              fontFamily={'"Barlow Condensed", sans-serif'}
              fontWeight="bold"
              textAlign={'center'}
            >
              Elevate your Projects with ICS
            </Typography>

            <Typography textAlign={'center'}>
              As a forward-thinking IT solutions provider, our company stands at
              the forefront of innovation, offering a robust capability
              statement tailored for you
            </Typography>

            <Typography sx={{ my: 3 }} textAlign={'center'}>
              Learn more why our clients trust ICS with there projects
            </Typography>

            <Button
              color="primary"
              variant="contained"
              size="large"
              sx={{ borderRadius: 1000, textTransform: 'capitalize' }}
              component={'a'}
              href="/file/Capability_Statement.pdf"
              download
            >
              Capability Statement
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ my: { xs: 8, md: 16 }, position: 'relative' }}>
        <Container maxWidth="md">
          <Stack direction="column" alignItems={'center'}>
            <Typography
              variant="h3"
              gutterBottom
              fontFamily={'"Barlow Condensed", sans-serif'}
              fontWeight="bold"
              textAlign={'center'}
            >
              PAST PERFORMANCE HIGHLIGHTS
            </Typography>

            <PartnersCarousel />
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          background: 'url(/images/teams.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          py: { xs: 8 },
          '&:before': {
            background:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))',
            content: '""',
            position: 'absolute',
            inset: 0,
          },
        }}
      >
        <Container sx={{ textAlign: 'center', position: 'relative' }}>
          <Typography
            color="secondary"
            variant="h3"
            gutterBottom
            fontWeight={'bold'}
          >
            Ready to bring your projects to life with ICS?
          </Typography>
          <Typography color="secondary" mb={4}>
            We value your career and want to be your go-to resource for your
            dream to come
          </Typography>

          <Button
            variant="outlined"
            size="large"
            LinkComponent={NextLink}
            color="secondary"
            href={'/contacts'}
            sx={{ display: { xs: 'none', md: 'initial' } }}
          >
            Get in touch
          </Button>
        </Container>
      </Box>

      <Container sx={{ my: { xs: 8, md: 16 } }}>
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
  )
}

export default Page
