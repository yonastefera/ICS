import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

export const NewsLetter = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid size={{xs: 12, sm: 6}}>
          <Typography
            color="textSecondary"
            gutterBottom
            fontFamily={'"Barlow Condensed", sans-serif'}
            fontWeight="bold"
            variant="h3"
          >
            Newsletter
          </Typography>
          <Typography color="textSecondary">
            Sign up to get weekly newsletter to get the latest updates.
          </Typography>
        </Grid>
        <Grid size={{xs: 12, sm: 6}} sx={{ display: "grid", alignItems: "center" }}>
          <Stack alignItems="stretch" gap={2}>
            <TextField
              placeholder="Enter your email"
              color="secondary"
              sx={{
                width: "100%",
                ".MuiOutlinedInput-root": {
                  borderColor: "white",
                },
              }}
            ></TextField>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize" }}
              size="large"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
