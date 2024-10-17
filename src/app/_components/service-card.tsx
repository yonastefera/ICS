"use client";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import NextLink from "next/link";

export const ServiceCard: React.FC<{
  title: string;
  description: string;
  order: string;
  image: string;
  id: string;
}> = ({ title, description, image, id }) => {
  return (
    <>
      <Card
        elevation={0}
        sx={{ bgcolor: "#082158", height: "100%", borderRadius: "12px" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            gap: 4,
            p: 3,
          }}
        >
          <Stack gap={3} direction={"column"}>
            <Image
              src={image}
              width={55}
              height={55}
              alt={`${title} service`}
              style={{ margin: "0 auto" }}
            />
            <Box sx={{}}>
              <Typography
                color="textSecondary"
                variant="h6"
                component={'h3'}
                fontWeight={700}
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                {title}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                textAlign={"center"}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  lineClamp: '2',
                  'WebkitLineClamp': '2',
                  'WebkitBoxOrient': 'vertical'
                }}
              >
                {description}
              </Typography>
            </Box>
          </Stack>

          <Stack sx={{ mt: "auto" }} gap={3} justifyContent={"end"}>
            {/* <Typography sx={{ fontWeight: 700, width: 55, textAlign: "right" }}color="textSecondary" variant="h6">{order}</Typography> */}
            <Button
              variant="text"
              endIcon={<ArrowOutwardIcon />}
              color="secondary"
              component={NextLink}
              href={`/services?panel=${id}#${id}`}
            >
              Explore More
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
