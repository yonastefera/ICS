'use client'

import React, { Suspense } from 'react'
import {
  Chip,
  Typography,
  Container,
  Box, Button,
  Stack
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import SouthEastIcon from '@mui/icons-material/SouthEast'
import NextLink from 'next/link'
import NextImage from 'next/image'

import services from '../../data/service-data.json'

const process = [
  {
    title: 'Strategize',
    description:
      'Multidisciplinary teams in ICS Continuum look at problems through specialty lenses – working with clients to frame the right problems to solve.',
  },
  {
    title: 'Design',
    description:
      'Multidisciplinary teams in ICS Continuum look at problems through specialty lenses – working with clients to frame the right problems to solve.',
  },
  {
    title: 'Engineer',
    description:
      'Multidisciplinary teams in ICS Continuum look at problems through specialty lenses – working with clients to frame the right problems to solve.',
  },
  {
    title: 'Operate',
    description:
      'Multidisciplinary teams in ICS Continuum look at problems through specialty lenses – working with clients to frame the right problems to solve.',
  },
  {
    title: 'Optimize',
    description:
      'Multidisciplinary teams in ICS Continuum look at problems through specialty lenses – working with clients to frame the right problems to solve.',
  },
]

const PageContent: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(process[0])

  return (
    <>
      <Box
        sx={{
          bgcolor: 'tertiary',
          backgroundImage: 'url(/images/footer-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          clipPath: {
            md: 'polygon(0 0, 75% 0%, 85% 100%, 0% 100%)',
          },
          py: 3,
          mt: 16,
        }}
      >
        <Container sx={{}}>
          <Chip label="WHAT WE OFFER" variant="outlined" color="secondary" />
          <Typography
            variant="h3"
            fontFamily={'"Barlow Condensed", sans-serif'}
            fontWeight="bold"
            color="secondary"
            component={'h1'}
            sx={{ mt: 2 }}
          >
            Service we can help you with
          </Typography>
        </Container>
      </Box>
      <Container sx={{ my: 8, mb: 16 }}>
        <Typography
          color="primary"
          variant="h4"
          gutterBottom
          fontWeight={'bold'}
        >
          At ICS, we offer the greatest services that will be beneficial in
          every manner.
        </Typography>
        <Typography>
          The transformation journey means many things to many different
          enterprises. No matter your goals – whether it’s growing and
          optimizing your business or disrupting the market – you need
          enterprise endurance on the path ahead. Partnering with you every step
          of the way or at any point in your journey, we help you anticipate
          disruption, thrive amid waves of change, reach breakthrough
          opportunities and drive revenue growth. We’re a global team of
          advisors, consultants, engineers, scientists and creatives. Our
          thinking lives in code, in products and in market. We don’t just
          create blueprints, operating models and business plans – we bend the
          mold until we discover the best solutions for your most complex
          challenges.
        </Typography>
      </Container>

      <Box
        sx={{
          background: 'url(/images/teams.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          py: { xs: 8 },
          '&:before': {
            background:
              'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.6))',
            content: '""',
            position: 'absolute',
            inset: 0,
          },
        }}
      >
        <Container sx={{ textAlign: 'center', position: 'relative' }}>
          <Typography color="secondary" variant="h3" mb={6} fontWeight={'bold'}>
            Our core services
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
          >
            {services.map((service, index) => (
              <Button
                variant="contained"
                size="large"
                LinkComponent={NextLink}
                color="secondary"
                href={`/services/${service.id}`}
                sx={{ display: { xs: 'none', md: 'initial' } }}
              >
                {service.name}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container sx={{ my: 8, mb: 16 }}>
        <Typography
          color="primary"
          variant="h4"
          gutterBottom
          fontWeight={'bold'}
        >
          We help clients set the right direction
        </Typography>
        <Typography>
          Multidisciplinary teams in ICS Continuum look at problems through
          specialty lenses – working with clients to frame the right problems to
          solve.
        </Typography>

        <Grid container mt={6}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Stack
              direction={{ sm: 'column', xs: 'row' }}
              gap={1}
              alignItems="start"
              justifyContent={'center'}
              height="100%"
            >
              {process.map((item, index) => (
                <Button
                  size={item.title === activeTab.title ? 'large' : 'small'}
                  variant={item.title === activeTab.title ? 'outlined' : 'text'}
                  color="primary"
                  startIcon={<SouthEastIcon />}
                  onClick={() => setActiveTab(item)}
                >
                  {item.title}
                </Button>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 8 }}>
            <Box sx={{ width: '100%', height: 225, position: 'relative' }}>
              <NextImage
                src="/images/image.png"
                fill
                alt="Strategize"
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
            </Box>
            <Typography
              gutterBottom
              color="primary"
              variant="h5"
              fontWeight={'medium'}
              mb={2}
              mt={3}
            >
              {activeTab.title}
            </Typography>
            <Typography>{activeTab.description}</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* <Container sx={{ mb: 16 }}>
        {services.map((service, index) => (
          <Accordion
            elevation={0}
            key={service.id}
            expanded={currentPanel === service.id}
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.primary.main}`,
              borderBottom: (theme) =>
                `1px solid ${theme.palette.primary.main}`,
              scrollMarginTop: '100px',
              mt: '-1px',
            }}
            slotProps={{ transition: { timeout: 0 } }}
          >
            <AccordionSummary
              id={service.id}
              component={NextLink}
              href={`/services?panel=${service.id}#${service.id}`}
            >
              <Stack
                direction="column"
                gap={2}
                alignItems={'start'}
                sx={{ py: 2 }}
              >
                <Button
                  color="primary"
                  variant="outlined"
                  sx={{ borderRadius: 1000 }}
                  endIcon={<SouthEastIcon />}
                >
                  0{index + 1}
                </Button>
                <Box>
                  <Typography
                    variant="h4"
                    fontFamily={'"Barlow Condensed", sans-serif'}
                    fontWeight="600"
                  >
                    {service.name}
                  </Typography>
                </Box>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              {service.descriptions.map((description, index) => (
                <Typography
                  variant="body2"
                  sx={{ mb: 4 }}
                  key={`${service.name}-desc-${index}`}
                >
                  {description}
                </Typography>
              ))}

              <Grid container spacing={2} mt={6}>
                {service.details.map((details) => (
                  <Grid
                    size={{ xs: 12, md: 4 }}
                    key={`${service.name}-${details.title}`}
                  >
                    <ServiceDetailsCard
                      title={details.title}
                      description={details.description}
                    ></ServiceDetailsCard>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container> */}
    </>
  )
}
const Page = () => {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  )
}
export default Page
