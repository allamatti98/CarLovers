import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Category from "../categoryList/Category";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Suggestions from "../suggestions/Suggestions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const DetailsPage = () => {
  const [blogDetails, setblogDetails] = useState([]);
  const [postIngredients, setPostIngredients] = useState("");
  let { slug } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blogs/${slug}`
        );
        setblogDetails(res.data);
        setPostIngredients(res.data.moreDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <Container>
      <Category />
      <Typography variant="h3" align="center" mt={4}>
        {blogDetails.title}
      </Typography>
      <Typography variant="body2" align="center" color={"GrayText"} p={4}>
        More details are as follows
      </Typography>
      <Typography variant="body1" align="center" m={2}>
        {blogDetails.content}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={blogDetails.image}
          alt="cardetails"
        />
      </Box>
      <Typography variant="body1" align="center" m={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Typography variant="h3" align="center" m={2}>
        {blogDetails.content2}
      </Typography>
      <List>
        {postIngredients.split(",").map((ingredients) => (
          <ListItemButton>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary={ingredients} />
          </ListItemButton>
        ))}
      </List>
      <Typography variant="body1" align="center" m={2}>
        {blogDetails.content2}
      </Typography>

      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        Cars other viewers searched
      </Typography>
      <Suggestions />
    </Container>
  );
};

export default DetailsPage;
