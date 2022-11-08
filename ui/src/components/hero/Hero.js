import { Box, Container, Grid, styled, Typography } from "@mui/material";
import lambo from "../../static/lambo.jpg";
import rolls from "../../static/blackbadge.jpeg";
import jeep from "../../static/jeep.jfif";
import audi from "../../static/audi2.jfif";
import Category from "../categoryList/Category";


const Hero = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("md")]: {
      height: 200,
    },
    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));
  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "white",
    background: "blue",
    fontSize: 20,
  });
  const StyledWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      paddingTop: "140%",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "40%",
    },
    width: "80%",
  }));
  return (
    <Container>
      <Grid container direction={"row"} columnSpacing={1} rowSpacing={1}>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${lambo})` }}>
            <StyledWrapper>
              <StyledTypography>Lamborghini</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${rolls})` }}>
            <StyledWrapper>
              <StyledTypography>Rolls Royce</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${jeep})` }}>
            <StyledWrapper>
              <StyledTypography>Range Rover</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${audi})` }}>
            <StyledWrapper>
              <StyledTypography>Genesis</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
      </Grid>
      <br/><br/><br/><br/><br/><br/>
      <Category />
      <br/><br/><br/><br/><br/><br/>
    </Container>
  );
};

export default Hero;
