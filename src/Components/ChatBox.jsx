import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Profile from "../images/ProfileLogo.png";
import BrandLogo from "../images/LandPage-LOGO.png";
import { Typography } from "@mui/material";
import AnsweredList from "./AnsweredList";
import TransitionsModal from "./TransitionsModal"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "transparent" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  animation: "fadeIn 1s", // Added animation here
}));

const ChatBox = () => {
  const [openModal,setOpenModal] = React.useState(false);
  const handleClose = () => setOpenModal(false);

  
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
    <Box sx={{ flexGrow: 1, maxHeight: 800, overflowY: "auto" }}>
      <TransitionsModal openModal={openModal} answerInList={Chats.answerInList} handleClose={handleClose}/>
      <Grid container spacing={0.5} p={2}>
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
                cursor:"pointer"
              }}
              onClick={()=>setOpenModal(true)}
              >
              {questionAsked}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={BrandLogo}/>
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
          <Item sx={{ display: "flex", marginLeft: "40px" }}>
            <AnsweredList answerInList={Chats.answerInList}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatBox;

