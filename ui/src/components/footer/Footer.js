import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", height: "200px" }}>
      <Container>
        <Stack direction={"row"}>
        </Stack>
        <Typography variant="h4" align="center" mt={8} color={"white"}>
          May the best Car win!!!
        </Typography>
        <Typography variant="h6" align="center" mt={8} color={"white"}>
            Designed by Dayan Allamatti
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
