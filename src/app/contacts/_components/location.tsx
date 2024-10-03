"use client";

import { Box } from "@mui/material";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export const Location = () => {
  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            minHeight: "500px",
            borderRadius: 3.5,
            overflow: "hidden",
          }}
          position={"relative"}
        >
          <Map
            defaultZoom={13}
            defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
          ></Map>

          {/* <Image src="/images/map.png" fill alt="ICS location" /> */}
        </Box>
      </APIProvider>
    </>
  );
};
