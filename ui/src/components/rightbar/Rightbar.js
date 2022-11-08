import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import add from "../../static/grad.jfif";

import { Send as SendIcon } from "@mui/icons-material";
const Rightbar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" align="center" mt={5}>
        Looking for a Scholarship in U.S.A?
      </Typography>
      <CardMedia
        component={"img"}
        height="300px"
        image={add}
        alt="burger_image"
        sx={{
          width: "400px",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            boxSizing: "border-box",
            zIndex: 1,
            transition: `all 0.50s ease`,
          },
        }}
      />
      <Typography align="left" variant="body1">
        {" "}
        We are offering scholarships to the first 100 people to apply.{" "}
      </Typography>
      <Typography align="left" variant="body1">
        {" "}
        Contact us on sperane.offers.com <br />{" "}
        <a href="google.com">Read More</a>
      </Typography>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          Ads Here
        </Typography>
      </Card>
      <Typography align="center" color="white" bgcolor="blue" mt={2}>
        Subscribe Via Email
      </Typography>
      <Box sx={{ pl: 10 }}>
        <TextField
          label="Your Email here!"
          variant="standard"
          color="primary"
        />
        <IconButton>
          <SendIcon sx={{ color: "blue" }} />
        </IconButton>
      </Box>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          Ads Here
        </Typography>
      </Card>
    </Box>
  );
};

export default Rightbar;
