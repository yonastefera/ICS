"use client";

import { SnackbarContext } from "@/app/_components/providers/snackbar-provider";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";

export const SendMessage = () => {

  const snackbar = useContext(SnackbarContext);

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
            <TextField
              label="First name"
              fullWidth
              color="secondary"
              sx={{
                input: {
                  color: "white",
                },
              }}
            />
            <TextField
              label="Last name"
              fullWidth
              color="secondary"
              sx={{
                input: {
                  color: "white",
                },
              }}
            />
          </Stack>
          <TextField
            label="Subject"
            fullWidth
            color="secondary"
            sx={{
              input: {
                color: "white",
              },
            }}
          />
          <TextField
            label="note"
            multiline
            rows={8}
            fullWidth
            color="secondary"
            sx={{
              input: {
                color: "white",
              },
            }}
          />
        </Stack>
      </CardContent>
      <CardActions sx={{ p: 4 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{ textTransform: "Capitalize" }}
          size="large"
          onClick={() =>
            snackbar.setMessage({ message: "Failed to send the message", type: "error" })
          }
        >
          Get in touch
        </Button>
      </CardActions>
    </Card>
  );
};
