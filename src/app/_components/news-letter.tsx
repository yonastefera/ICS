"use client";

import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useContext } from "react";
import { SnackbarContext } from "./providers/snackbar-provider";
import { object, string } from "yup";
import { useFormik } from "formik";

const emailSchema = object({
  email: string().email().required(),
});

export const NewsLetter = () => {
  const snackbar = useContext(SnackbarContext);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
    values
  } = useFormik({
    validationSchema: emailSchema,
    onSubmit: async (value, { resetForm }) => {
      try {
        const res = await fetch("/api/newsletter", {
          method: "POST",
          body: JSON.stringify(value),
        });

        if (res.ok) {
          snackbar.setMessage({
            message: "Thank You for Subscribing!",
            type: "success",
          });
          resetForm();
          return;
        }

        throw new Error();
      } catch {
        snackbar.setMessage({
          message: "Something went wrong. Please try again.",
          type: "error",
        });
      }
    },
    initialValues: { email: "" },
  });

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
          <form onSubmit={handleSubmit}>
            <Stack alignItems="center" gap={2}>
              <TextField
                placeholder="Enter your email"
                color="secondary"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.email ? errors.email : undefined}
                error={touched.email && !!errors.email}
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
                type="submit"
              >
                {isSubmitting && (
                  <>
                    <CircularProgress
                      size={"1.75em"}
                      value={50}
                      color="secondary"
                    />
                  </>
                )}
                {!isSubmitting && "Subscribe"}
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
