"use client";

import {
  Card,
  CardContent,
  Typography,
  Button,
  useTheme,
  Stack,
  Box,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";

export const ServiceCard: React.FC<{
  title: string;
  description: string;
  order: string;
  image: string;
}> = ({ title, description, order, image }) => {
  const theme = useTheme();
  return (
    <>
      <Card
        elevation={0}
        sx={{ bgcolor: theme.palette.primary.dark, height: "100%", borderRadius: '12px' }}
      >
        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 4,
            p: 3
          }}
        >
          <Stack gap={3} direction={'column'}>
            <Image src={image} width={55} height={55} alt={title} style={{margin: "0 auto"}}/>
            <Box sx={{}}>
              <Typography
                color="textSecondary"
                variant="h5"
                fontWeight={700}
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                {title}
              </Typography>
              <Typography color="textSecondary" variant="body2" textAlign={"center"}>{description}</Typography>
            </Box>
          </Stack>

          <Stack sx={{ mt: "auto" }} gap={3} justifyContent={'end'}>
            {/* <Typography sx={{ fontWeight: 700, width: 55, textAlign: "right" }}color="textSecondary" variant="h6">{order}</Typography> */}
            <Button
              variant="text"
              endIcon={<ArrowOutwardIcon />}
              color="secondary"
            >
              Explore More
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
