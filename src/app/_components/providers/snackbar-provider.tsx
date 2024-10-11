"use client";

import { Alert, Slide, SlideProps, Snackbar } from "@mui/material";
import { ReactNode, createContext, useState } from "react";

export const SnackbarContext = createContext<{
  content: { message: string; type: "success" | "error" } | undefined;
  setMessage: (
    content: { message: string; type: "success" | "error" } | undefined
  ) => void;
} | null>(null);

export const SnackBarProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<
    { message: string; type: "success" | "error" } | undefined
  >(undefined);
  return (
    <SnackbarContext.Provider
      value={{
        content,
        setMessage: (
          content: { message: string; type: "success" | "error" } | undefined
        ) => setContent(content),
      }}
    >
      {children}
      <Snackbar
        open={!!content}
        autoHideDuration={3000}
        onClose={() => setContent(undefined)}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setContent(undefined)}
          sx={{ minWidth: "sm" }}
          variant="filled"
          severity={content?.type}
        >
          {content?.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

const SlideTransition = (props: SlideProps) => {
  return <Slide direction="down" {...props} />;
};
