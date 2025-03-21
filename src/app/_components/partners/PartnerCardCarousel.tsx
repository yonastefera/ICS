'use client'

import { Card, CardMedia, Grid2, Stack, Tooltip, useTheme } from '@mui/material'
import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { blue, red } from '@mui/material/colors'

export const PartnersCarousel = () => {
  const theme = useTheme()

  console.log(theme.breakpoints.values)

  const settings: Settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 4 },
      },
    ],
  }

  const partnerLogos = [
    { image: '/images/logos/captial-one.png', name: 'Capitol one' },
    { image: '/images/logos/cisco.png', name: 'Cisco' },
    { image: '/images/logos/tiaa.png', name: 'TIAA' },
    { image: '/images/logos/ibm.png', name: 'IBM' },
    { image: '/images/logos/pnc.png', name: 'PNC' },
    {
      image: '/images/logos/University_of_Maryland_Medical_Center_logo.svg.png',
      name: 'University of Maryland Medical Center',
    },
    {
      image:
        '/images/logos/United_States_Department_of_Transportation_seal.svg',
      name: 'United States Department of Transportation',
    },
    { image: '/images/logos/lowes-logo.png', name: 'Lowes' },
    {
      image: '/images/logos/kaiser-permanente-logo-png-transparent.png',
      name: 'Kaiser Permanente',
    },
    { image: '/images/logos/Kimberly-Clark_Logo.png', name: 'Kimberly Clark' },
    { image: '/images/logos/aspiration.png', name: 'Aspiration' },
  ]

  return (
    <>
      <Slider {...settings}>
        {partnerLogos.map((logo, index) => (
          <Grid2 size={{ xs: 5, sm: 3 }} key={logo.image}>
            <Tooltip title={logo.name}>
              <Card
                elevation={0}
                sx={{ p: 4, '&:hover': { background: 'primary.light' } }}
              >
                <CardMedia
                  image={logo.image}
                  alt={logo.name}
                  component={'img'}
                  sx={{
                    height: 120,
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                />
              </Card>
            </Tooltip>
          </Grid2>
        ))}
      </Slider>
    </>
  )
}
