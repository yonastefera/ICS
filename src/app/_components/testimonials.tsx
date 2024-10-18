import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import Grid from "@mui/material/Grid2";
import Image from "next/image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";
import { containerSync, slideLeft, slideRight } from "@/animation";
import testimonials from "@/data/testimonials-data.json"

export const Testimonials = () => {
  const theme = useTheme();

  return (
    <>
      <Swiper loop>
        {testimonials.map((t, index) => (
            <SwiperSlide key={t.id}>
              <motion.div
                variants={containerSync}
                initial="hidden"
                whileInView={"shown"}
              >
                <Grid container>
                  <Grid size={{ xs: 12, md: 6 }} sx={{ px: 6 }}>
                    <motion.div
                      style={{
                        width: "100%",
                        aspectRatio: 1,
                        borderBottomLeftRadius: 1000,
                        borderBottomRightRadius: 1000,
                        borderTopLeftRadius: 1000,
                        overflow: "hidden",
                        maxWidth: 520,
                        position: "relative",
                      }}
                      variants={slideRight}
                    >
                      <Image
                        src={t.image}
                        fill
                        sizes={`${theme.breakpoints.down(
                          "sm"
                        )} 100vw, ${theme.breakpoints.up("sm")} 520`}
                        style={{ objectFit: "cover" }}
                        alt={t.imageAlt}
                      />
                    </motion.div>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 6 }}
                    sx={{
                      borderLeftWidth: 2,
                      borderLeftStyle: "solid",
                      borderLeftColor: "primary.main",
                      px: 6,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <motion.div variants={slideLeft}>
                      <FormatQuoteIcon sx={{ fontSize: 72 }} color="primary" />
                      <Typography fontWeight={600} mt={3} mb={4}>
                        {t.content}
                      </Typography>

                      <Typography color="primary" fontWeight={700} gutterBottom>
                        {t.userName}
                      </Typography>
                      <Typography variant="body2" >
                        {t.title}
                      </Typography>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
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
      <IconButton type="button" aria-label={forward ? "Next testimonial" : "Previous testimonial"}>
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
