'use client'

import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  alpha,
  useScrollTrigger,
  useTheme,
} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'
import { container, opacity } from '@/animation'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import services from '@/data/service-data.json'

export const headerLinks = [
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Services',
    href: '/services',
    subItems: services.map((link) => ({
      label: link.name,
      href: `/services/${link.id}`,
    })),
  },
  { label: 'Government', href: '/government' },
  { label: 'Outsourcing', href: '/outsourcing' },
]

export const Header = () => {
  const theme = useTheme()
  const pathName = usePathname()

  const [menuShown, setMenuShown] = useState(false)
  const trigger = useScrollTrigger({ disableHysteresis: true })

  const isOnLandingPage = pathName === '/'
  const bgColor = alpha(theme.palette.tertiary.main, 0.95)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Container>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: !isOnLandingPage
              ? bgColor
              : !trigger
              ? 'transparent'
              : bgColor,
            height: 74,
          }}
        >
          <Container sx={{ position: 'relative' }}>
            <Toolbar
              sx={{
                bgcolor: 'transparent',
                justifyContent: 'space-between',
                px: { xs: 0 },
                py: { xs: 2 },
              }}
            >
              <Link
                component={NextLink}
                href="/"
                color="warning"
                variant="h4"
                fontWeight={700}
              >
                ICS
              </Link>

              <Stack alignItems={'center'} gap={3}>
                <Stack gap={2.5} display={{ xs: 'none', md: 'flex' }}>
                  {headerLinks.map((link) => (
                    <ButtonGroup key={`desktop-${link.href}`}>
                      <Button
                        variant="text"
                        component={NextLink}
                        href={link.href}
                        color={
                          pathName.startsWith(link.href)
                            ? 'warning'
                            : 'secondary'
                        }
                        sx={{
                          fontWeight: pathName.startsWith(link.href)
                            ? 'bold'
                            : 'normal',
                        }}
                      >
                        {link.label}
                      </Button>
                      {link.subItems && (
                        <>
                          {' '}
                          <IconButton
                            color={
                              pathName.startsWith(link.href)
                                ? 'warning'
                                : 'secondary'
                            }
                            id="services-button"
                            aria-controls={open ? 'service-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            size="small"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                          <Menu
                            id="service-menu"
                            aria-labelledby="services-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                            MenuListProps={{
                              sx: { p: 2 },
                            }}
                          >
                            {link.subItems.map((item) => (
                              <Link
                                component={NextLink}
                                key={item.href}
                                href={item.href}
                                color='text.primary'
                              >
                                <MenuItem
                                  key={`submenu-${item.href}`}
                                  onClick={handleClose}
                                  sx={{ py: 2, pl: 2, pr: 8 }}
                                  aria-label={`Navigate to ${link.label} service`}
                                >
                                  {item.label}
                                </MenuItem>
                              </Link>
                            ))}
                          </Menu>
                        </>
                      )}
                    </ButtonGroup>
                  ))}
                </Stack>

                <Button
                  variant="outlined"
                  color={pathName != '/contacts' ? 'secondary' : 'warning'}
                  size="large"
                  LinkComponent={NextLink}
                  href={'/contacts'}
                  sx={{ display: { xs: 'none', md: 'initial' } }}
                >
                  Get in touch
                </Button>

                <IconButton
                  color="secondary"
                  sx={{ display: { md: 'none' } }}
                  onClick={() => setMenuShown(() => true)}
                  type="button"
                  aria-label="Open menu"
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer
          open={menuShown}
          onClose={() => setMenuShown(false)}
          anchor="top"
        >
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: 'divider',
              borderBottomStyle: 'solid',
            }}
          >
            <Link component={NextLink} variant="h5" fontWeight={700} href="/">
              ICS
            </Link>
            <IconButton
              onClick={() => setMenuShown(false)}
              type="button"
              aria-label="Close menu"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Box sx={{ width: 'auto', my: 2 }}>
            <List>
              {[...headerLinks, { label: 'Contact Us', href: '/contacts' }].map(
                (link) => (
                  <ListItem key={link.label} disablePadding>
                    <ListItemButton
                      LinkComponent={NextLink}
                      href={link.href}
                      sx={{ px: 4 }}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          color:
                            link.href == pathName ? 'primary' : 'textPrimary',
                          fontWeight: link.href == pathName ? 700 : 400,
                        }}
                      >
                        {link.label}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
      </Container>

      {pathName === '/' && <Hero />}
    </>
  )
}

export const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        backgroundImage: 'url(/images/hero-bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        pt: '96px',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* <video
        autoPlay
        muted
        loop
        style={{
          top: 0,
          left: 0,
          height: "100%",
          width: "100vw",
          position: "absolute",
          objectFit: "cover",
        }}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video> */}
      <Box
        sx={{ bgcolor: 'rgba(0,0,0,0.35)', position: 'absolute', inset: 0 }}
      />
      <Container sx={{ position: 'relative' }}>
        <motion.div variants={container} initial="hidden" whileInView="shown">
          <Box sx={{ maxWidth: 'sm', py: 12 }}>
            <motion.div variants={opacity}>
              <Typography
                color="secondary"
                variant="h2"
                component={'h1'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={{ xs: '10vw', sm: '6.5vw', md: '4.5vw' }}
              >
                Transforming Business with{' '}
                <Typography
                  color="primary"
                  component={'span'}
                  variant="h2"
                  fontWeight={700}
                  lineHeight={1.2}
                  fontSize={{ xs: '10vw', sm: '6.5vw', md: '4.5vw' }}
                >
                  Technology
                </Typography>{' '}
              </Typography>
            </motion.div>
            <motion.div variants={opacity}>
              <Typography color="secondary" variant="h6" sx={{ mt: 4, mb: 6 }}>
                ICS was Founded in 2017. Icreativv Consulting and Service, LLC
                offers Enterprise IT Solutions, Software Engineering,
                Cybersecurity, and Program & Project Management.
              </Typography>
            </motion.div>
            <motion.div variants={opacity}>
              <Button
                color="warning"
                variant="contained"
                disableElevation
                endIcon={<ArrowOutwardIcon />}
                size="large"
                LinkComponent={NextLink}
                sx={{ borderRadius: 1000 }}
                href={'/services'}
              >
                Explore More
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
