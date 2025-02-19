"use client";
import { Box, Typography } from "@mui/material";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export const Numbers = () => {
  const experience = useMotionValue(0);
  const projects = useMotionValue(0);
  const teams = useMotionValue(0);

  const experienceRounded = useTransform(experience, Math.round);
  const projectsRounded = useTransform(projects, Math.round);
  const teamRounded = useTransform(teams, Math.round);

  useEffect(() => {
     // eslint-disable-next-line react-hooks/exhaustive-deps
    animate(experience, 10, { duration: 1 });
    animate(projects, 50, { duration: 1 });
    animate(teams, 20, { duration: 1 });
  }, []);

  return (
    <>
      <Box>
        <Typography fontWeight={700} gutterBottom>
          <motion.span>{experienceRounded}</motion.span>+
        </Typography>
        <Typography>years of experience</Typography>
      </Box>
      <Box>
        <Typography fontWeight={700} gutterBottom>
          <motion.span>{projectsRounded}</motion.span>+
        </Typography>
        <Typography>completed projects</Typography>
      </Box>
      <Box>
        <Typography fontWeight={700} gutterBottom>
          <motion.span>{teamRounded}</motion.span>+
        </Typography>
        <Typography>Clients</Typography>
      </Box>
    </>
  );
};
