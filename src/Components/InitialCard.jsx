import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Idea from "../images/approval_delegation_FILL0_wght200_GRAD-25_opsz24.png";
import { IconButton, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#172214" : "#172214",
  ...theme.typography.body2,
  borderRadius:"10px",
  padding: theme.spacing(3),
  color: theme.palette.text.secondary,
  animation: "fadeIn 0.5s ease-out",
  animationFillMode: "both", 
}));

const fadeInAnimation = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function InitialCard() {
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = fadeInAnimation;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid xs={12}>
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "19px 0px",
              paddingLeft:"20px",
              marginBottom:"40px"
            }}
          >
            <h1
              style={{
                margin: "0",
                height: "23px",
                position: "relative",
                fontSize: "40px",
                fontFamily: "inherit",
                fontWeight: "700",
                display: "inline-block",
              }}
            >
              <span style={{ color: "white" }}>{`Hello `}</span>
              <span style={{ color: "#42ff54" }}>Vipul,</span>
            </h1>
            <h1
              style={{
                margin: "0",
                height: "30px",
                position: "relative",
                fontSize: "40px",
                fontWeight: "500",
                fontFamily: "Alata",
                color: "grey",
                display: "inline-block",
              }}
            >
              How can I help you today?
            </h1>
          </div>
        </Grid>
        {[
          "Create an image of an intergalactic event",
          "Brainstorm about new AI Software",
          "Come up with Concept",
          "Generate investment report",
          "Write product description",
          "Show risks and benefits of investment",
        ].map((item, index) => (
          <Grid key={index} item xs={4}>
            <Item style={{ animationDelay: `${index * 0.2}s` }}>
              <IconButton sx={{ background: "#42ff54" }}>
                <InsertPhotoIcon />
              </IconButton>
              <Typography
                sx={{
                  color: "#ffff",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Avenir Next",
                  fontSize: "12px",
                  marginTop: "25px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "18px",
                }}
              >
                {item}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
