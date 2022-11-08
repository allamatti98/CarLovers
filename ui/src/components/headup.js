import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
const Headsup = () => {
  return (
    <div>
    <br/><br/><br/><br/><br/><br/>
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          padding: 1,
        }}
      >
        <Typography align="center" variant="h4" mr={{ xs: 0, md: 1 }}>
        Below are the most bought cars as of this year.
        </Typography>
        <br/>
        <br/><br/><br/><br/>
        <Typography
          variant="h4"
          color={"blue"}
          align="center"
          sx={{ fontFamily: "Splash , cursive" }}
        >
          Please don't forget to like and subscribe.
        </Typography>
      </Box>
      <br/><br/><br/><br/><br/><br/> 
      </div>
  );
};

export default Headsup;