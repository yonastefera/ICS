"use client";

import { slideUp } from "@/animation";
import { Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServiceCard } from "./service-card";
import services from "../../data/service-data.json";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./service-carousel.css";

import { PaginationOptions } from "swiper/types";

export const ServiceCarousel = () => {
  const theme = useTheme();

  const pagination: PaginationOptions = {
    clickable: true,
    bulletElement: 'div'
  };

  return (
    <Stack sx={{ mt: 6 }} alignItems={"center"} gap={1}>
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
    </Stack>
  );
};

// const SliderButton = ({
//   direction,
//   slider,
// }: {
//   direction?: "left" | "right";
//   slider: any;
// }) => {
//   if (direction == "left")
//     return (
//       <IconButton>
//         <ChevronLeftIcon
//           fontSize="large"
//           onClick={() => slider?.current.slidePrev()}
//         />
//       </IconButton>
//     );

//   return (
//     <IconButton>
//       <ChevronRightIcon
//         fontSize="large"
//         onClick={() => slider?.current.slideNext()}
//       />
//     </IconButton>
//   );
// };
