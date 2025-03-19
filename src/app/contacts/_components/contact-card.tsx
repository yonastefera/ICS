import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

export const ContactCard: React.FC<{
    icon: ReactNode;
    title: string;
    primary: string;
    secondary?: string;
  }> = ({ title, icon, primary, secondary }) => {
    return (
      <>
        <Card elevation={0} sx={{ bgcolor: "#082158", height: "100%", borderRadius: 3.5 }}>
          <CardMedia sx={{ display: "grid", placeItems: "center", py: 4 }}>
            {icon}
          </CardMedia>
          <CardContent>
            <Typography
              fontWeight={700}
              gutterBottom
              color="secondary"
              textAlign={"center"}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              textAlign={"center"}
              gutterBottom
            >
              {primary}
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              textAlign={"center"}
            >
              {secondary}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  };