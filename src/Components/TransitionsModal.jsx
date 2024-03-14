import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Profile from "../images/ProfileLogo.png";
import BrandLogo from "../images/LandPage-LOGO.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: 5,
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#172214",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "transparent" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  animation: "fadeIn 1s", // Added animation here
}));

export default function TransitionsModal({
  openModal,
  answerInList,
  handleClose,
}) {
  const Chats = {
    questionAsked: "Generate my investment report",
    answerHeading:
      "To generate an investment report, I would need some specific details such as:",
    answerSubHeading: "",
    answerInList: [
      "Your initial investment amount",
      "The duration of your investment",
      "Types of investments (stocks, bonds, mutual funds, etc.)",
      "Investment returns or losses over the duration",
      "Any additional contributions or withdrawals made during the investment period",
      "Any relevant benchmarks or indices for comparison",
    ],
  };
  const { questionAsked, answerHeading } = Chats;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                color="#42ff54"
              >
                Generate my investment report
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                color="#fff"
              >
                11:00AM
              </Typography>
            </div>
            <Divider sx={{ color: "white", bgcolor: "white" }} />
            <Grid container spacing={0.5} p={1}>
              <Grid item xs={12}>
                <Item sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={Profile} />
                  <Typography
                    sx={{
                      color: "#42ff54",
                      leadingTrim: "both",
                      textEdge: "cap",
                      fontFamily: "Avenir Next",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "0px",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    {questionAsked}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={BrandLogo} />
                  <Typography
                    sx={{
                      color: "#ffff",
                      leadingTrim: "both",
                      textEdge: "cap",
                      fontFamily: "Avenir Next",
                      animation: "revealText 1s ease-in-out forwards",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "32px",
                      marginLeft: "20px",
                    }}
                  >
                    {answerHeading}
                  </Typography>
                </Item>
              </Grid>
            </Grid>
            <List style={{marginLeft:"56px"}}>
              {answerInList.map((item, index) => (
                <ListItem key={`item-${index}`}>
                  <ListItemText
                    primary={``}
                    primaryTypographyProps={{
                      sx: {
                        color: "#fff",
                        "&::after": {
                          content: `'${index + ": " + item}'`,
                          animation: `revealText 1s ease-in-out forwards ${index}s`,
                          opacity: 0,
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
            <Button
              sx={{ bgcolor: "#204d21", color: "#fff", marginLeft: "60px" }}
            >
              Use this prompt
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
