import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const SendMessage = () => {
  return (
    <Card elevation={0} sx={{ bgcolor: "#082158", borderRadius: 3.5 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h4"
          fontWeight="700"
          color="textSecondary"
          fontFamily={'"Barlow Condensed", sans-serif'}
        >
          Leave a message
        </Typography>
        <Stack direction="column" gap={3} mt={5}>
          <Stack gap={3} direction={{ xs: "column", sm: "row" }}>
            <TextField label="First name" fullWidth />
            <TextField label="Last name" fullWidth />
          </Stack>
          <TextField label="Subject" fullWidth />
          <TextField label="note" multiline rows={4} fullWidth />
        </Stack>
      </CardContent>
      <CardActions sx={{ p: 4 }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ borderRadius: 1000, textTransform: "Capitalize" }}
          size="large"
        >
          Get in touch
        </Button>
      </CardActions>
    </Card>
  );
};
