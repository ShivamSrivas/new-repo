import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardOne from ".././Images/CardOne.png";
import CardTwo from ".././Images/CardTwo.png";
import CardThree from ".././Images/CardThree.png";
import FourthCard from ".././Images/FourthCard.png";
import CardFivth from ".././Images/CardFivth.png";
import CardSix from ".././Images/CardSixth.png";
import ESGToday from ".././Images/ESG Today.png";
import Morgan from ".././Images/Morgan Stanley.png";
import Forbes from ".././Images/Forbes.png";
import Harvard from ".././Images/Harvard.png";
import EsgNews from ".././Images/ESG News.png";
import Deloitte from ".././Images/Deloitte.png";
import { Avatar } from "@mui/material";
import Profile from ".././Images/ProfileLogo.png";
import { PieChart } from "@mui/x-charts/PieChart";
import { useSelector, useDispatch } from "react-redux";

const data = [
  { id: 0, value: 10, label: "series A", color: "red" },
  { id: 1, value: 15, label: "series B", color: "green" },
  { id: 2, value: 20, label: "series C", color: "blue" },
];
const PieActiveArc = () => {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={200}
    />
  );
};

const InteractiveCard = ({ src, show, style }) => {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        ...style.UpperCards,
        height: show ? "149px" : "97px",
      }}
    >
      <CardContent>
        <Typography
          level="title-lg"
          id="card-description"
          textAlign={show ? "start" : "center"}
          sx={{
            
            background: src.label === ESGToday ? "black" : "null",
          }}
        >
          <img src={src.label} alt="title" />
        </Typography>
        <Typography
          level="body-sm"
          aria-describedby="card-description"
          mb={1}
          textAlign={show ? "start" : "center"}
          sx={{
            color: "var(--Light-Body-Text, #2C2C2C)",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "160%",
          }}
        >
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: "text.tertiary" }}
          >
            BlackRock to purchase Portland Natural Gas Transmission ...
          </Link>
        </Typography>
      </CardContent>
      {show ? (
        <AspectRatio
          ratio="1"
          sx={{
            width: "140px",
            height: "133px",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <img src={src.image} srcSet={src.image} loading="lazy" alt="" />
        </AspectRatio>
      ) : null}
    </Card>
  );
};

export default function ESGCards() {
  const open = useSelector((state) => state.landingPage.theme);
  const state = useSelector((state) => state.customCard);
  const style = open === "Dark" ? state.DarkTheme : state.LightTheme;
  const images = [
    { image: CardTwo, label: ESGToday },
    { image: CardThree, label: EsgNews },
    { image: FourthCard, label: Forbes },
    { image: CardFivth, label: Deloitte },
    { image: CardOne, label: Harvard },
    { image: CardSix, label: Morgan },
  ];
  return (
    <Box sx={{ flexGrow: 1, padding: "2%" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Avatar src={Profile} sx={{ width: "36px", height: "36px" }} />
          <Typography
            level="title-lg"
            id="card-description"
            textAlign={"start"}
            sx={style.MessageHeading}
          >
            Environmental, social and governance (ESG)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            level="body-sm"
            aria-describedby="card-description"
            mb={1}
            textAlign={"start"}
     
            sx={style.MessageSubHeading}
          >
            Most Read News Articles
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          display={"flex"}
          justifyContent={"center"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {images.slice(0, 3).map((src, index) => (
              <InteractiveCard src={src} show={true} style={style} />
            ))}
          </div>
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          display={"flex"}
          justifyContent={"center"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {images.slice(3).map((src, index) => (
              <InteractiveCard src={src} show={true} style={style} />
            ))}
          </div>
        </Grid>

        <Grid item xs={12} mt={4}>
          <Typography
            level="body-sm"
            aria-describedby="card-description"

            textAlign={"start"}
            sx={style.MessageSubHeading}
          >
            Most Relevant Articles
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          display={"flex"}
          justifyContent={"center"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {images.slice(0, 3).map((src, index) => (
              <InteractiveCard src={src} show={false} style={style} />
            ))}
          </div>
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          display={"flex"}
          justifyContent={"center"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {images.slice(3).map((src, index) => (
              <InteractiveCard src={src} show={false} style={style} />
            ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
