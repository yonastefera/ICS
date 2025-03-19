import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
} from '@mui/material'
import Link from 'next/link'

export function InsightCard({
  slug,
  thumbnail,
  title,
  description,
}: {
  slug: string
  thumbnail: string
  title: string
  description: string
}) {
  return (
    <>
      <Card>
        <CardActionArea
          sx={{ position: 'relative', overflow: 'hidden' }}
          component={Link}
          href={`/outsourcing/${slug}`}
        >
          <CardMedia
            component={'img'}
            image={thumbnail}
            alt={title}
            sx={{ width: '100%', aspectRatio: 0.8 }}
          ></CardMedia>
          <CardContent
            component="div"
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
              background:
                'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))',
              px: 3,
              py: 4,
            }}
          >
            <Stack spacing={2} direction="column" alignItems={'start'}>
              <Typography
                gutterBottom
                variant="subtitle1"
                fontWeight={'bold'}
                component="div"
                color="white"
              >
                {title}
              </Typography>

              <Typography variant="body2" gutterBottom sx={{ color: 'white' }}>
                {description}
              </Typography>
              <Button color="secondary" variant="text">
                Read blog
              </Button>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
