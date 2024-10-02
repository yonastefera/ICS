"use client";

import {
  Chip,
  Typography,
  Container,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { ServiceDetailsCard } from "./_components/service-details-card";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import services from "../../data/service-data.json";

export const Page = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [panel, setPanel] = useState<string>(
    searchParams.get("panel") || "software_development"
  );


  useEffect(() => {
    router.push(`${pathName}?panel=${panel}`, { scroll: false });
  }, [panel]);

  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          backgroundImage: "url(/images/footer-bg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          clipPath: {md: "polygon(0 0, 75% 0%, 85% 100%, 0% 100%)", xs: "polygon(0 0, 87% 0%, 95% 100%, 0% 100%)"},
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
            color="textSecondary"
            sx={{ mt: 2 }}
          >
            Service we can help you with
          </Typography>
        </Container>
      </Box>
      <Container sx={{ mt: 4, mb: 16 }}>
        <Typography>
          At ICS, we offer the greatest services that will be beneficial in
          every manner.
        </Typography>
      </Container>

      <Container sx={{ mb: 16 }}>
        {services.map((service, index) => (
          <Accordion
            elevation={0}
            key={service.id}
            defaultExpanded={index === 0}
            expanded={panel === service.id}
            onChange={() => setPanel(service.id)}
            id={service.id}
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.primary.main}`,
              borderBottom: (theme) =>
                `1px solid ${theme.palette.primary.main}`,
              mt: "-1px",
            }}
          >
            <AccordionSummary>
              <Stack
                direction="column"
                gap={2}
                alignItems={"start"}
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
      </Container>
    </>
  );
};

export default Page;
