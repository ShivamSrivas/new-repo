import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { IconButton, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#172214" : "#172214",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  color: theme.palette.text.secondary,
  animation: "fadeIn 0.5s ease-out", // Animation added here
  animationFillMode: "both", // Make sure the final state of the animation is retained
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
        {[
          "Create an image of an intergalactic event",
          "Brainstorm about new AI Software",
          "Come up with Concept",
          "Generate investment report",
          "Write product description",
          "Show risks and benefits of investment"
        ].map((item, index) => (
          <Grid key={index} item xs={4}>
            <Item style={{ animationDelay: `${index * 0.2}s` }}>
              <IconButton>
                <InsertPhotoIcon />
              </IconButton>
              <Typography
                sx={{
                  color: "#ffff",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Avenir Next",
                  fontSize: "12px",
                  marginTop:"25px",
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
