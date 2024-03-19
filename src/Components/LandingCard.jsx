import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const ActionAreaCard = ({ index, image, storeState, storeStyle }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        background: "transparent",
        boxShadow: "none",
        transform: index === 1 ? "scale(1.1)" : "",
        marginBottom: index === 1 ? "50px" : "",
        maxWidth: 300,
      }}
    >
      <CardActionArea sx={storeState.CardActionArea}>
        <CardMedia
          component="img"
          image={image.src}
          alt={image.label}
          sx={image.style}
        />
        <CardContent sx={storeState.CardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={storeStyle.CardLabel}
          >
            {image.label}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
            sx={storeStyle.CardDescription}
          >
            {image.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

function LandingCard() {
  const theme = useSelector((state) => state.landingPage.theme);
  const state = useSelector((state) => state.landingCard);
  const style = theme === "Dark" ? state.DarkTheme : state.LightTheme;
  return (
    <Box sx={{ maxWidth: 1000, flexGrow: 1,display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <Grid container spacing={2} rowGap={2}>
        <Grid item xs={12} display={"flex"} flexDirection={"column"} rowGap={4}>
          <Typography sx={style.ContentHeading}>
            Hello
            <Typography gutterBottom sx={style.ContentHeadingName}>Vipul</Typography>
          </Typography>

          <Typography gutterBottom sx={style.ContentSubHeading}>
            {state.ContentSubHeading}
          </Typography>
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Box sx={{ flexGrow: 1, maxWidth: 800, display: "flex" }}>
            {state &&
              state.images.map((image, index) => (
                <ActionAreaCard
                  key={index}
                  index={index}
                  image={image}
                  storeState={state}
                  storeStyle={style}
                />
              ))}
          </Box>
        </Grid>
      </Grid>
      </Box>
  );
}

export default LandingCard;
