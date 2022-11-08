import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PostSearch from "../search/PostSearch";
const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Cars", Link: "/cars" },
    { Name: "About Us", Link: "/about-us" },
    { Name: "Get in Touch", Link: "/get-in-touch" },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <>
      <AppBar color="default" position="sticky" elevation={0}>
        <StyledToolbar>
          <Box flex={{ xs: 25, md: 1 }}>
            <Link href="http://localhost:3000/" sx={{ textDecoration: "none" }}>
              <Typography
                variant="h4"
                color={"blue"}
                sx={{
                  fontFamily: "Splash , cursive",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                CarLovers
              </Typography>
            </Link>
          </Box>
          <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography variant="body2">{item.Name}</Typography>
            ))}
          </MenuBox>
          <Box flex={1}>
      

    
      <PostSearch />
            <MenuIcon
              sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          </Box>
        </StyledToolbar>
        <Drawer
          anchor={"top"}
          open={openMenu}
          onClose={() => setOpenMenu(!openMenu)}
        >
         
          <List>
            <ListItem>
              {MenuItems.map((item) => (
                <ListItemButton>{item.Name}</ListItemButton>
              ))}
            </ListItem>
       
          </List>
          <PostSearch />
        </Drawer>

      </AppBar>
      <br/><br/><br/>
      <Typography align="center" variant="h2" mr={{ xs: 0, md: 1 }}>
          Welcome to CarLovers blog website!!!
        </Typography>
        <br/><br/><br/>
    </>
  );
};

export default Navbar;

