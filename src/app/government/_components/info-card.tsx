import { Card, CardContent, Typography } from "@mui/material";

export const InfoCard = ({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) => {
  return (
    <Card
      elevation={0}
      sx={{ bgcolor: "tertiary.main", height: "100%", borderRadius: 2, p: 1.5 }}
    >
      <CardContent>
        <Typography sx={{ fontWeight: 700 }} color="textSecondary">
          {primary}
        </Typography>
        <Typography variant="body2" color="textSecondary" mt={1.5}>
          {secondary}
        </Typography>
      </CardContent>
    </Card>
  );
};
