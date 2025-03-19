'use client'

import {
  Box,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import { FramedImage } from '../_components/framed-image'
import SquareIcon from '@mui/icons-material/Square'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
// import "./service-carousel.css";

import { PaginationOptions } from 'swiper/types'
import caseStudies from '../../data/case-studies.json'
import blogs from '../../data/blogs.json'
import { motion } from 'framer-motion'
import { CaseStudyCard } from '../_components/casestudy/CaseStudyCard'
import { slideUp } from '@/animation'
import NextLink from 'next/link'
import { InsightCard } from '../_components/insight/InsightCard'

const pagination: PaginationOptions = {
  clickable: true,
  bulletElement: 'div',
}

export default function Page() {
  const theme = useTheme()

  return (
    <>
      <Container sx={{ my: 16, overflow: 'hidden' }}>
        <Stack direction="column" gap={10}>
          <Box component="section">
            <Chip label="Outsourcing" sx={{ mb: 2 }}></Chip>
            <Typography
              gutterBottom
              variant="h3"
              color="primary"
              component="h1"
              fontWeight="bold"
            >
              Transform Your Operations with Our Business Process Solutions.
            </Typography>
            <Typography variant="h6">
              Boost business margins and streamline your operations with more
              resources.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <FramedImage src="/images/teams.jpg" alt="ICS missions" />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
              <Box
                sx={{
                  wdith: '100%',
                  height: ' 100%',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    gutterBottom
                    fontFamily={'"Barlow Condensed", sans-serif'}
                    fontWeight="medium"
                    color="primary"
                    component={'h4'}
                  >
                    Our Mission
                  </Typography>

                  <Stack direction="column" gap={3}>
                    <Typography variant="body1">
                      Established in 2017, Icreativv Consulting and Service
                      (ICS) is a leading technology solutions provider based in
                      Atlanta, Georgia. Committed to prioritizing our clients'
                      needs, we deliver exceptional solutions and services at
                      competitive prices.
                    </Typography>

                    <Typography variant="body1">
                      At ICS, we believe that quality and affordability go
                      hand-in-hand. Contact us today to learn more about how we
                      can help your organization achieve success with our
                      affordable, high-quality solutions.
                    </Typography>

                    <Typography variant="body1">
                      We cultivate strong relationships with our clients,
                      fostering trust and transparency as the cornerstones of
                      our interactions. At ICS, we firmly believe that quality
                      and affordability can coexist harmoniously. Contact us
                      today to discover how our affordable, high-quality
                      solutions can empower your organization to achieve
                      remarkable success.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <FramedImage src="/images/teams.jpg" alt="ICS missions" />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
              <Box
                sx={{
                  wdith: '100%',
                  height: ' 100%',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    gutterBottom
                    fontFamily={'"Barlow Condensed", sans-serif'}
                    fontWeight="medium"
                    color="primary"
                    component={'h4'}
                  >
                    Accelerate Your Digital Journey
                  </Typography>

                  <Stack direction="column" gap={3}>
                    <Typography variant="body1">
                      Rooted in the vision of our immigrant founder, ICS
                      operates with a foundation built on gratitude, honesty,
                      partnership, and an unwavering commitment to community
                      upliftment. These principles shape our values, guiding us
                      in every endeavor we undertake.
                    </Typography>

                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <SquareIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          slotProps={{
                            primary: {
                              sx: { fontWeight: 600 },
                            },
                          }}
                        >
                          Access to skilled developers with proven project
                          experience
                        </ListItemText>
                      </ListItem>

                      <ListItem>
                        <ListItemIcon>
                          <SquareIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          slotProps={{
                            primary: {
                              sx: { fontWeight: 600 },
                            },
                          }}
                        >
                          Identify and fix issues more quickly
                        </ListItemText>
                      </ListItem>

                      <ListItem>
                        <ListItemIcon>
                          <SquareIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          slotProps={{
                            primary: {
                              sx: { fontWeight: 600 },
                            },
                          }}
                        >
                          Align with your business needs with modules and
                          extensions
                        </ListItemText>
                      </ListItem>

                      <ListItem>
                        <ListItemIcon>
                          <SquareIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          slotProps={{
                            primary: {
                              sx: { fontWeight: 600 },
                            },
                          }}
                        >
                          Supported by leading hardware and software providers
                        </ListItemText>
                      </ListItem>

                      <ListItem>
                        <ListItemIcon>
                          <SquareIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          slotProps={{
                            primary: {
                              sx: { fontWeight: 600 },
                            },
                          }}
                        >
                          More robust coding for easy customization with
                          reliable support community
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <FramedImage src="/images/teams.jpg" alt="ICS missions" />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
              <Box
                sx={{
                  wdith: '100%',
                  height: ' 100%',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    gutterBottom
                    fontFamily={'"Barlow Condensed", sans-serif'}
                    fontWeight="medium"
                    color="primary"
                    component={'h4'}
                  >
                    Access Top IT Talent at Competitive Rates
                  </Typography>

                  <Stack direction="column" gap={3}>
                    <Typography variant="body1">
                      At the core of our mission is the relentless pursuit of
                      empowering businesses with cutting-edge solutions that
                      transcend industry standards. Established with a passion
                      for technology, our journey is woven with a tapestry of
                      expertise, collaboration, and a steadfast commitment to
                      our clients.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box>
            <Typography
              variant="h4"
              gutterBottom
              textAlign={'center'}
              fontWeight={'bold'}
            >
              Case study
            </Typography>
            <Typography gutterBottom textAlign={'center'} mb={4}>
              As a forward-thinking IT solutions provider, our company stands at
              the forefront of <br /> innovation, offering a robust capability
              statement tailored for you
            </Typography>

            <Swiper
              loop
              slidesPerView={1}
              spaceBetween={16}
              modules={[Pagination]}
              pagination={pagination}
              breakpoints={{
                [theme.breakpoints.values.md]: { slidesPerView: 2 },
                [theme.breakpoints.values.lg]: { slidesPerView: 3 },
              }}
            >
              {caseStudies.slice(0, 3).map((caseStudy, index) => (
                <SwiperSlide
                  key={`casestudy-card-${index}`}
                  style={{ height: 'auto' }}
                >
                  <motion.div
                    variants={slideUp}
                    style={{ height: '100%', boxSizing: 'border-box' }}
                  >
                    <CaseStudyCard {...caseStudy} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Stack justifyContent={'center'} alignItems={'center'}>
              <Button
                variant="contained"
                sx={{ mt: 4 }}
                LinkComponent={NextLink}
                href="/casestudies"
              >
                Read more case studies
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>

      <Box
        sx={{
          background: 'url(/images/teams.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          py: { xs: 6 },
          '&:before': {
            background:
              'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))',
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
            Take the Next Step
          </Typography>
          <Typography color="secondary" mb={4}>
            Scale faster cost effectively with the perfect balance of people and
            technology.
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

      <Container sx={{ my: 10, overflow: 'hidden' }}>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            textAlign={'center'}
            fontWeight={'bold'}
          >
            Insights
          </Typography>
          <Typography gutterBottom textAlign={'center'} mb={4}>
            As a forward-thinking IT solutions provider, our company stands at
            the forefront of <br />
            innovation, offering a robust capability statement tailored for you
          </Typography>

          <Swiper
            loop
            slidesPerView={1}
            spaceBetween={16}
            modules={[Pagination]}
            pagination={pagination}
            breakpoints={{
              [theme.breakpoints.values.md]: { slidesPerView: 2 },
              [theme.breakpoints.values.lg]: { slidesPerView: 3 },
            }}
          >
            {blogs.map((blog, index) => (
              <SwiperSlide
                key={`insight-card-${blog.slug}`}
                style={{ height: 'auto' }}
              >
                <motion.div
                  variants={slideUp}
                  style={{ height: '100%', boxSizing: 'border-box' }}
                >
                  <InsightCard
                    title={blog.title}
                    slug={blog.slug}
                    thumbnail={blog.thumbnail}
                    description={blog.description}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </>
  )
}
