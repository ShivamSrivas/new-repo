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
import { Avatar, Divider } from "@mui/material";
import Profile from ".././Images/ProfileLogo.png";
import { PieChart } from "@mui/x-charts/PieChart";
import { useSelector } from "react-redux";
import Screenshot from "../Images/ScreenShot.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const PieActiveArc = ({ theme }) => {
  const data = [
    { id: 0, value: 50, color: theme === "Dark" ? "#D93F3F" : "#BBBBA4" },
    { id: 1, value: 25, color: theme === "Dark" ? "#F8B200" : "#9E6D58" },
    { id: 2, value: 20, color: theme === "Dark" ? "#04C6E7" : "#F2CA63" },
  ];
  return (
    <PieChart
      sx={{ cursor: "pointer", border: "transparent" }}
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

export default function CustomCards({ WealthManagement }) {
  const theme = useSelector((state) => state.landingPage.theme);
  const state = useSelector((state) => state.customCard);
  const style = theme === "Dark" ? state.DarkTheme : state.LightTheme;
  const images = [
    { image: CardTwo, label: ESGToday },
    { image: CardThree, label: EsgNews },
    { image: FourthCard, label: Forbes },
    { image: CardFivth, label: Deloitte },
    { image: CardOne, label: Harvard },
    { image: CardSix, label: Morgan },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "2%",
        height: "100%",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "6px", // Adjust as needed for the thickness of the scrollbar
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust the color of the thumb
          borderRadius: "3px", // Adjust the border radius of the thumb
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the hover color of the thumb
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent", // Set the background color of the track to transparent
        },
      }}
    >
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
            {WealthManagement
              ? "Wealth Management"
              : "Environmental, social and governance (ESG)"}
          </Typography>
        </Grid>
        {WealthManagement ? (
          <Grid item xs={12} display={"flex"} justifyContent={"flex-start"}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "55px",
              }}
            >
              <img src={Screenshot} alt={"ScreenShot"} />
              <span style={{ color: theme === "Dark" ? "white" : "black" }}>
                PDF Reports
              </span>
            </div>
          </Grid>
        ) : null}

        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            level="body-sm"
            aria-describedby="card-description"
            mb={1}
            textAlign={"start"}
            sx={style.MessageSubHeading}
          >
            {WealthManagement ? "Risk Spectrum" : "Most Read News Articles"}
          </Typography>
          {WealthManagement ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "350px",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <Brightness1Icon
                  sx={{ color: theme === "Dark" ? "#D93F3F" : "#BBBBA4" }}
                />
                <span style={{ color: theme === "Dark" ? "white" : "black" }}>
                  Cash
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <Brightness1Icon
                  sx={{ color: theme === "Dark" ? "#F8B200" : "#9E6D58" }}
                />
                <span style={{ color: theme === "Dark" ? "white" : "black" }}>
                  Real State
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <Brightness1Icon
                  sx={{ color: theme === "Dark" ? "#04C6E7" : "#F2CA63" }}
                />
                <span style={{ color: theme === "Dark" ? "white" : "black" }}>
                  Stock
                </span>
              </div>
            </div>
          ) : null}
        </Grid>
        {WealthManagement ? (
          <Grid item xs={12} sm={12} md={12} mt={4}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginLeft: "-50px",
              }}
            >
              {[
                "Conservative",
                "Moderate",
                "Balanced",
                "Growth",
                "Aggressive Growth",
              ].map((label) => (
                <Typography
                  key={label}
                  sx={{
                    color: theme === "Dark" ? "#FFF" : "#968864",
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "1.5",
                  }}
                >
                  {label}
                </Typography>
              ))}
            </div>
          </Grid>
        ) : null}

        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          {WealthManagement ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                {images.slice(0, 5).map((image, index) => (
                  <PieActiveArc theme={theme} />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "3rem",
                  flexDirection:"column"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <KeyboardArrowLeftIcon
                    sx={{ color: theme === "Dark" ? "#fff" : "#968864" }}
                  />
                  <div
                    style={{
                      width: "80%",
                      height: "0.5px",
                      background: theme === "Dark" ? "#fff" : "#968864",
                    }}
                  ></div>
                  <KeyboardArrowRightIcon
                    sx={{ color: theme === "Dark" ? "#fff" : "#968864" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <Typography
                    sx={{
                      color: theme === "Dark" ? "#fff" : "#968864",
                      fontFamily: "Poppins",
                    }}
                  >
                    Decreasing investment risk and increasing inflation risk
                  </Typography>
                  <Typography
                    sx={{
                      color: theme === "Dark" ? "#fff" : "#968864",
                      fontFamily: "Poppins",
                    }}
                  >
                    Increasing investment risk and decreasing inflation risk
                  </Typography>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {images.slice(0, 3).map((src, index) => (
                <InteractiveCard
                  key={index}
                  src={src}
                  show={true}
                  style={style}
                />
              ))}
            </div>
          )}
        </Grid>
        {!WealthManagement ? (
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
        ) : null}
        {!WealthManagement ? (
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
        ) : (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            display={"flex"}
            justifyContent={"space-around"}
          ></Grid>
        )}
        {!WealthManagement ? (
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
        ) : null}
        {!WealthManagement ? (
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
        ) : null}
      </Grid>
    </Box>
  );
}
