"use client";

import { SnackbarContext } from "@/app/_components/providers/snackbar-provider";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useContext } from "react";
import { InferType, object, string } from "yup";

const Schema = object({
  fullName: string().required(),
  email: string().email().required(),
  subject: string().required(),
  note: string().required(),
});

export type Message = InferType<typeof Schema>;

export const SendMessage = () => {
  const snackbar = useContext(SnackbarContext);

  const {
    handleBlur,
    handleChange,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    values,
  } = useFormik({
    validationSchema: Schema,
    initialValues: { fullName: "", email: "", subject: "", note: "" },
    onSubmit: async (value, { resetForm }) => {
      try {
        const response = await fetch("/contacts/message", {
          method: "POST",
          body: JSON.stringify(value),
        });
        if (response.ok) {
          snackbar?.setMessage({
            message: "Thanks you for sending us a message!",
            type: "success",
          });

          resetForm();
          return;
        }
        snackbar?.setMessage({
          message: "Unable to send the message!",
          type: "error",
        });
      } catch {}
    },
  });

  return (
    <Card
      elevation={0}
      sx={{ bgcolor: "#082158", borderRadius: 3.5 }}
      component="form"
      onSubmit={handleSubmit}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h4"
          fontWeight="700"
          color="textSecondary"
          fontFamily={'"Barlow Condensed", sans-serif'}
          component={'h1'}
        >
          Leave a message
        </Typography>
        <Stack direction="column" gap={3} mt={5}>
          <Stack gap={3} direction={{ xs: "column", sm: "row" }}>
            <TextField
              label="Full name"
              name="fullName"
              fullWidth
              color="secondary"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.fullName}
              sx={{
                input: {
                  color: "white",
                },
              }}
              error={touched.fullName && !!errors.fullName}
              helperText={touched.fullName ? errors.fullName : undefined}
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              color="secondary"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.email && !!errors.email}
              helperText={touched.email ? errors.email : undefined}
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
            value={values.subject}
            name="subject"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.subject && !!errors.subject}
            helperText={touched.subject ? errors.subject : undefined}
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
            value={values.note}
            name="note"
            color="secondary"
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.note && !!errors.note}
            helperText={touched.note ? errors.note : undefined}
            sx={{
              textarea: {
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
          type="submit"
        >
          {isSubmitting && (
            <>
              <CircularProgress size={"1.75em"} value={50} />
            </>
          )}
          {!isSubmitting && "Get in touch"}
        </Button>
      </CardActions>
    </Card>
  );
};
