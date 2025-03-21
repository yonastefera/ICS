'use client'

import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import SouthEastIcon from '@mui/icons-material/SouthEast'

import services from '../../../data/service-data.json'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const serviceIndex = services.findIndex((s) => s.id === params.slug)

  if (serviceIndex == -1) {
    router.push('/services')
    return null
  }

  const service = services[serviceIndex]

  return (
    <>
      <Box
        sx={{
          background: 'url(/images/teams.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          mt: '74px',
          py: { xs: 8 },
          '&:before': {
            background: 'rgba(0, 0, 0, 0.65)',
            content: '""',
            position: 'absolute',
            inset: 0,
          },
        }}
      >
        <Container sx={{ position: 'relative' }}>
          <Button
            color="secondary"
            variant="outlined"
            sx={{ borderRadius: 1000 }}
            endIcon={<SouthEastIcon />}
          >
            0{serviceIndex + 1}
          </Button>
          <Typography color="secondary" variant="h3" my={2} fontWeight={'bold'}>
            {service.name}
          </Typography>
          {service.descriptions.map((description, index) => (
            <Typography
              variant="body1"
              sx={{ mb: 4 }}
              key={`${service.name}-desc-${index}`}
              color="secondary"
            >
              {description}
            </Typography>
          ))}
        </Container>
      </Box>

      <Container>
        <Grid container spacing={4} sx={{ my: 8, mb: 16 }}>
          {service.details.map((detail, index) => (
            <Grid size={{ xs: 12, sm: 6 }}>
              {/* <Box sx={{ width: '100%', height: 225, position: 'relative' }}>
                <Card>
                  <CardMedia
                    component={NextImage}
                    image={detail.image}
                    src={detail.image}
                    alt="Strategize"
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </Card>
              </Box> */}
              <Typography variant="subtitle2" gutterBottom>
                {detail.title}
              </Typography>
              <Typography variant="body2">{detail.description}</Typography>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} sx={{ my: 8, mb: 16 }}>
          <Grid size={{ xs: 12 }}>
            <Typography color="primary" variant="h4" mb={4} fontWeight={'bold'}>
              Benefits of {service.name} services
            </Typography>
          </Grid>
          {(service.benefits ?? []).map((detail, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <img
                src={detail.image}
                style={{ height: 52, width: 52, objectFit: 'contain' }}
              />
              <Typography variant="subtitle2" gutterBottom>
                {detail.title}
              </Typography>
              <Typography variant="body2">{detail.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
