import { Box, Container, Chip, Typography } from '@mui/material'

export const Banner = ({ children }: { children: React.ReactNode }) => {
  return (
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
      }}
    >
      <Container sx={{}}>{children}</Container>
    </Box>
  )
}
