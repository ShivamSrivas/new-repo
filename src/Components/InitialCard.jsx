import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Paper, Grid, IconButton, Typography } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { useNavigate } from "react-router-dom";


export default function InitialCard({ darkMode }) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#172214" : "#172214",
    ...theme.typography.body2,
    borderRadius: "10px",
    padding: theme.spacing(2),
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
  const theme = useTheme();
  const navigate = useNavigate();
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = fadeInAnimation;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  const handleCardClick = (item) => {
    // Navigate to a new route on card click
    // The route can be dynamic based on the item clicked
    navigate(`/ChatList`);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2),
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: "#fff", fontWeight: 700 }}
          >
            Hello <span style={{ color: "#42ff54" }}>Vipul,</span>
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "grey", fontWeight: 500 }}
          >
            How can I help you today?
          </Typography>
        </Grid>
        {[
          "Create an image of an intergalactic event",
          "Brainstorm about new AI Software",
          "Come up with Concept",
          "Generate investment report",
          "Write product description",
          "Show risks and benefits of investment",
        ].map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <Item
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleCardClick(item)}
            >
              <IconButton sx={{ background: "#42ff54", color: "#fff" }}>
                <InsertPhotoIcon />
              </IconButton>
              <Typography variant="body2" sx={{ marginTop: 2, color: "#fff" }}>
                {item}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
