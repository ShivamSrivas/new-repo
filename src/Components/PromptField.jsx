import React, { useState } from "react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";

const PromptField = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputHeight, setInputHeight] = useState("auto");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const textareaLineHeight = 24; // Adjust this value according to your textarea's line-height
    const minHeight = textareaLineHeight * 1; // Minimum height for one line
    const maxHeight = textareaLineHeight * 5; // Maximum height for five lines

    const previousHeight = event.target.style.height;
    event.target.style.height = "auto"; // Reset height to auto to calculate scroll height
    const scrollHeight = event.target.scrollHeight;
    event.target.style.height = previousHeight; // Restore previous height

    // Set input height within min and max height limits
    setInputHeight(
      `${Math.min(Math.max(scrollHeight, minHeight), maxHeight)}px`
    );
  };

  return (
    <footer
      style={{
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 17px",
        boxSizing: "border-box",
        width: "60%",
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          flex: "1",
          borderRadius: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0px 2px 37px 16px rgba(0, 0, 0, 0.07)",
          border: "1px solid #fff",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "14px 28px 14px 30px",
          maxWidth: "100%",
          gap: "20px",
        }}
      >
        <textarea
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            height: inputHeight,
            flex: "1",
            boxSizing: "border-box",
            fontFamily: "Alata",
            fontWeight: "500",
            padding: "15px 0px 0px 0px",
            fontSize: "16px",
            color: "white",
            resize: "none", // Prevent resizing by user
            overflowY: "auto", // Add scrollbar when needed
          }}
          placeholder="Enter a prompt here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0px 22px",
          }}
        >
          <IconButton
            style={{
              height: "36px",
              width: "36px",
              color: "white",
            }}
          >
            <KeyboardVoiceIcon />
          </IconButton>
          <IconButton
            style={{
              height: "36px",
              width: "36px",
              color: "white",
            }}
          >
            <AddPhotoAlternateIcon />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default PromptField;
