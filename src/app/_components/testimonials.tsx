import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import Grid from "@mui/material/Grid2";
import Image from "next/image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Testimonials = () => {
  return (
    <>
      <Swiper loop>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <Grid container>
                <Grid size={{xs: 12, md: 6}} sx={{ px: 6 }}>
                  <Box
                    sx={{
                     
                      width: "100%",
                      aspectRatio: 1,
                      borderBottomLeftRadius: 1000,
                      borderBottomRightRadius: 1000,
                      borderTopLeftRadius: 1000,
                      overflow: "hidden",
                      maxWidth: 520,
                    }}
                    position={"relative"}
                  >
                    <Image
                      src="/images/discussion.jpeg"
                      layout="fill"
                      objectFit="cover"
                      style={{}}
                      alt="logo"
                    />
                  </Box>
                </Grid>
                <Grid
                  size={{xs: 12, md: 6}}
                  sx={{
                    borderLeftWidth: 2,
                    borderLeftStyle: "solid",
                    borderLeftColor: "primary.main",
                    px: 6,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Box>
                    <FormatQuoteIcon sx={{ fontSize: 72 }} color="primary" />
                    <Typography fontWeight={700} mt={3} mb={4}>
                      Lorem ipsum dolor sit amet consectetur. Egestas sit
                      tincidunt amet interdum nunc ac et egestas augue. Tellus
                      cursus a blandit cum ultrices quam imperdiet pulvinar
                      adipiscing. Tincidunt proin nunc gravida vitae id posuere
                      at massa erat. Sit sem consectetur elit turpis vitae amet
                      dolor blandit. Ultrices ut nullam cursus nisi sagittis
                      neque{" "}
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                      John Doe
                    </Typography>
                    <Typography color="primary" fontWeight={700}>
                      John Doe
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}

        <Stack justifyContent={"end"}>
          <Arrow />
          <Arrow forward />
        </Stack>
      </Swiper>
    </>
  );
};

const Arrow = ({ forward }: { forward?: boolean }) => {
  const swipper = useSwiper();

  return (
    <>
      <IconButton>
        {!forward ? (
          <ChevronLeftIcon
            color="primary"
            sx={{ fontSize: 48 }}
            onClick={() => swipper.slidePrev()}
          />
        ) : (
          <ChevronRightIcon
            color="primary"
            sx={{ fontSize: 48 }}
            onClick={() => swipper.slideNext()}
          />
        )}
      </IconButton>
    </>
  );
};
