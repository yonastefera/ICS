import { Container, Typography } from "@mui/material";

const Page = () => {
  return (
    <Container
      sx={{
        border: "1px solid #f2f2f2",
        padding: "60px 60px",
        backgroundColor: "#081F58",
        color: "fff",
        my: 24,
      }}
    >
      <Typography textAlign="center" fontWeight={300} sx={{ fontSize: "1.6rem", color: "#fff" }}>
      You have been unsubscribed from Icreativv Consulting and Service.  
      <br /> 😢 Sorry to see you go! 💙
      </Typography>
    </Container>
  );
};

export default Page;
