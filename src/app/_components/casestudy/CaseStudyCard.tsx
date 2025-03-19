import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import Link from 'next/link'

export const CaseStudyCard: React.FC<{
  title: string
  category: string
  date: string
  thumbnail: string
  slug: string
}> = ({ thumbnail, title, category, date, slug }) => {
  return (
    <Card>
      <CardActionArea
        sx={{ position: 'relative', overflow: 'hidden' }}
        component={Link}
        href={`/casestudies/${slug}`}
      >
        <CardMedia
          component={'img'}
          image={thumbnail}
          alt={title}
          sx={{ width: '100%', aspectRatio: 0.68 }}
        ></CardMedia>
        <CardContent
          component="div"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background:
              'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))',
            px: 3,
            py: 4,
          }}
        >
          <Box>
            <Chip
              label="Case study"
              variant="filled"
              color="primary"
              sx={{ mb: 1.5, borderRadius: 0 }}
            ></Chip>
            <Typography
              gutterBottom
              variant="subtitle1"
              fontWeight={'bold'}
              component="div"
              color="white"
            >
              {title}
            </Typography>
          </Box>
          <Stack spacing={0} direction="column">
            <Box
              sx={{ height: 4, width: 40, bgcolor: 'primary.main' }}
              mb={1}
            />
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: 'white' }}
              fontWeight={'bold'}
            >
              {category}
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              {date}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
