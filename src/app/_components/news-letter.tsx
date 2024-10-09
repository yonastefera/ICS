"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useContext } from "react";
import { SnackbarContext } from "./providers/snackbar-provider";

export const NewsLetter = () => {
  const snackbar = useContext(SnackbarContext);

  return (
    <>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6 }}>
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
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{ display: "grid", alignItems: "center" }}
        >
          <Stack alignItems="center" gap={2}>
            <TextField
              placeholder="Enter your email"
              color="secondary"
              sx={{
                width: "100%",
                color: "white",
                input: {
                  color: "white",
                },
                ".MuiOutlinedInput-root": {
                  borderColor: "white",
                  borderRadius: 1000,
                },
              }}
            ></TextField>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize" }}
              size="large"
              onClick={() =>
                snackbar.setMessage({ message: "Thanks for subscribing!", type: "success" })
              }
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
