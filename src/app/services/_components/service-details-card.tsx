import { Card, CardContent, Typography } from "@mui/material";

export const ServiceDetailsCard: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <Card elevation={0} sx={{ height: "100%", bgcolor: '#082158', py: 3, px: 2, borderRadius: "16px" }}>
      <CardContent>
        <Typography variant="body1" gutterBottom fontWeight={700}  color="textSecondary">
          {title}
        </Typography>
        <Typography variant="body2" mt={2} color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
