import React, { useState, useEffect } from "react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import StopCircleIcon from "@mui/icons-material/StopCircle";

const PromptField = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputHeight, setInputHeight] = useState("auto");
  const [listening, setListening] = useState(false);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  useEffect(() => {
    // Update input height when input value changes
    updateInputHeight(document.getElementById("promptTextArea"));
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const updateInputHeight = (target) => {
    if (!target) return;

    const textareaLineHeight = 24; // Adjust this value according to your textarea's line-height
    const minHeight = textareaLineHeight * 1; // Minimum height for one line
    const maxHeight = textareaLineHeight * 5; // Maximum height for five lines

    const previousHeight = target.style.height;
    target.style.height = "auto"; // Reset height to auto to calculate scroll height
    const scrollHeight = target.scrollHeight;
    target.style.height = previousHeight; // Restore previous height

    // Set input height within min and max height limits
    setInputHeight(
      `${Math.min(Math.max(scrollHeight, minHeight), maxHeight)}px`
    );
  };

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      console.error("Browser doesn't support speech recognition.");
    }
  }, [browserSupportsSpeechRecognition]);

  const handleVoiceInput = (text) => {
    setInputValue(text);
  };

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ onResult: handleVoiceInput });
    }
    setListening(!listening);
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
        width: "95%",
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          flex: "1",
          borderRadius: "80px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0px 2px 37px 16px rgba(0, 0, 0, 0.07)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "0px 30px 0px 30px",
          maxWidth: "100%",
          gap: "20px",
        }}
      >
        <textarea
          id="promptTextArea"
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            height: inputHeight,
            flex: "1",
            boxSizing: "border-box",
            fontFamily: "Alata",
            fontWeight: "500",
            padding: "23px 0px 0px 0px",
            fontSize: "16px",
            color: "white",
            resize: "none",
            overflowY: "auto",
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
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            style={{
              height: "36px",
              width: "36px",
              color: "white",
            }}
          >
            <AddPhotoAlternateIcon />
            <VisuallyHiddenInput type="file" />
          </IconButton>
          <IconButton
            style={{
              height: "36px",
              width: "36px",
              color: "white",
            }}
            onClick={toggleListening}
          >
            {listening ? <StopCircleIcon /> : <KeyboardVoiceIcon />}
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default PromptField;
