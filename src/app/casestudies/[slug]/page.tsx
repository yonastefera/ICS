'use client'

import { Banner } from '@/app/_components/banner'
import {
  Box,
  Button,
  Chip,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material'
import Container from '@mui/material/Container'
import Link from 'next/link'
import { slideUp } from '@/animation'
import { ServiceCard } from '@/app/_components/service-card'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
// import "./service-carousel.css";

import { PaginationOptions } from 'swiper/types'

import caseStudies from '../../../data/case-studies.json'
import { CaseStudyCard } from '@/app/_components/casestudy/CaseStudyCard'
import { useRouter } from 'next/navigation'

import SouthEastIcon from '@mui/icons-material/SouthEast'
import { IsInViewSection } from '@/app/_components/IsInViewSection'
import { useState } from 'react'

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const theme = useTheme()

  const data = caseStudies.find((caseStudy) => caseStudy.slug === params.slug)

  const [activeSection, setActiveSection] = useState(0)

  if (!data) {
    router.push('/outsourcing')
    return null
  }

  const pagination: PaginationOptions = {
    clickable: true,
    bulletElement: 'div',
  }

  return (
    <Container sx={{ my: { xs: 8, md: 16 } }}>
      <Banner>
        <Chip label="Case study" color="secondary"></Chip>
        <Typography
          variant="h3"
          fontFamily={'"Barlow Condensed", sans-serif'}
          fontWeight="bold"
          color="secondary"
          component={'h1'}
          sx={{ mt: 2 }}
        >
          Accounts Payable Automation Case <br />
          Study for Retailer
        </Typography>
      </Banner>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          mb: 4,
          position: 'sticky',
          top: 74,
          zIndex: 2,
          bgcolor: 'background.default',
        }}
      >
        <Tabs value={activeSection} aria-label="basic tabs example">
          <Tab
            label="Client Profile"
            {...a11yProps(0)}
            color="primary"
            LinkComponent={Link}
            href={`#client-profile`}
          />
          <Tab
            label="Business Challenge"
            {...a11yProps(1)}
            color="primary"
            LinkComponent={Link}
            href={`#business-challenge`}
          />
          <Tab
            label="Solution & Approach"
            {...a11yProps(2)}
            color="primary"
            LinkComponent={Link}
            href={`#solution-approach`}
          />
          <Tab
            label="Results"
            {...a11yProps(3)}
            color="primary"
            LinkComponent={Link}
            href={`#results`}
          />
        </Tabs>
      </Box>
      {}

      <Stack direction="column" gap={2}>
        <IsInViewSection
          onChange={(isInView) => {
            isInView && setActiveSection(0)
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            gutterBottom
            id="client-profile"
          >
            Client Profile
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {data.clientProfile}
          </Typography>
        </IsInViewSection>

        <IsInViewSection
          onChange={(isInView) => {
            isInView && setActiveSection(1)
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            gutterBottom
            id="business-challenge"
          >
            Business Challenge
          </Typography>
          <Typography variant="body1">
            <span style={{ whiteSpace: 'pre-wrap' }}>
              {data.businessChallenge}
            </span>
          </Typography>
        </IsInViewSection>

        <IsInViewSection
          onChange={(isInView) => {
            console.log(isInView, )
            isInView && setActiveSection(2)
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            gutterBottom
            id="solution-approach"
          >
            Solution & Approach
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {data.solutionApproach}
          </Typography>
        </IsInViewSection>

        <IsInViewSection
          onChange={(isInView) => {
            isInView && setActiveSection(3)
          }}
        >
          <Typography variant="h6" color="primary" gutterBottom id="results">
            Results
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {data.results}
          </Typography>
        </IsInViewSection>
      </Stack>

      <Box sx={{ my: 4 }}>
        <Button
          color="primary"
          variant="outlined"
          sx={{ borderRadius: 1000, mb: 2 }}
          endIcon={<SouthEastIcon />}
        >
          Related Case studies
        </Button>

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
          {caseStudies.map((caseStudy, index) => (
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
      </Box>
    </Container>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
