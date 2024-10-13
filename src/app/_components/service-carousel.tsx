"use client";

import { slideUp } from "@/animation";
import { Box, Grid, IconButton, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import { ServiceCard } from "./service-card";
import services from "../../data/service-data.json";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef } from "react";

export const ServiceCarousel = () => {
  const theme = useTheme();
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <Stack sx={{ mt: 6 }} alignItems={"center"} gap={1}>
      <SliderButton direction={"left"} slider={swiperRef} />
      <Swiper
        loop
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          [theme.breakpoints.values.md]: { slidesPerView: 2 },
          [theme.breakpoints.values.lg]: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={`service-card-${index}`} style={{ height: "auto" }}>
            <motion.div
              variants={slideUp}
              style={{ height: "100%", boxSizing: "border-box" }}
            >
              <ServiceCard
                title={service.name}
                description={service.descriptions[0]}
                order={`0${index + 1}`}
                image={service.icon ?? ""}
                id={service.id}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButton slider={swiperRef} />
    </Stack>
  );
};

const SliderButton = ({
  direction,
  slider,
}: {
  direction?: "left" | "right";
  slider: any;
}) => {
  if (direction == "left")
    return (
      <IconButton>
        <ChevronLeftIcon
          fontSize="large"
          onClick={() => slider?.current.slidePrev()}
        />
      </IconButton>
    );

  return (
    <IconButton>
      <ChevronRightIcon
        fontSize="large"
        onClick={() => slider?.current.slideNext()}
      />
    </IconButton>
  );
};
