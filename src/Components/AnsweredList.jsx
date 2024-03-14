import React from "react";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton } from "@mui/material";
import "../style/Answered.css";

export default function AnsweredList({ answerInList , openModal }) {
  const [itemsRendered, setItemsRendered] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setItemsRendered(true);
    }, answerInList.length * 1000); // Adjust the timeout based on the animation duration

    return () => clearTimeout(timeoutId);
  }, [answerInList]);
  return (
    <>
      <List
       className="list"
      >
        {answerInList.map((item, index) => (
          <ListItem key={`item-${index}`}>
            <ListItemText
              primary={``}
              primaryTypographyProps={{
                sx: {
                  "&::after": {
                    content: `'${index+': '+item}'`,
                    animation: `revealText 1s ease-in-out forwards ${index}s`,
                    opacity: 0,
                  },
                },
              }}
            />
          </ListItem>
        ))}
        {itemsRendered && (
          <IconButton
          sx={{
            color: "#42ff54",
            width: "200px",
            display: "flex",
            justifyContent: "space-around",
            alignSelf: "flex-start",
            animation: "revealText 1s ease-in-out forwards",
            flexShrink: 0,
            opacity: 0.8,
          }}        
          >
            <ThumbUpOffAltIcon />
            <ThumbDownOffAltIcon />
            <FileDownloadIcon />
            <ContentCopyIcon />
            <VolumeUpIcon />
          </IconButton>
        )}
      </List>
      <style jsx>{`
        @keyframes revealText {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
