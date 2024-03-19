import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, InputAdornment } from "@mui/material";
import { useSelector } from "react-redux";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';

export default function PromptBox() {
  const theme = useSelector((state) => state.landingPage.theme);
  const state = useSelector((state) => state.promptBox);
  const style = theme === "Dark" ? state.DarkTheme : state.LightTheme;
  const icon = theme === "Dark" ? state.darkIcon : state.lightIcon;
  const [value, setValue] = React.useState("");

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleListeningClick = () => {
    if (!listening) {
      console.log("Start listening...");
      SpeechRecognition.startListening();
    } else {
      console.log("Stop listening...");
      SpeechRecognition.stopListening();
    }
  };

  React.useEffect(() => {
    if (!listening) {
      setValue(transcript);
    }
  }, [transcript, listening]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setValue(file.name);
    console.log("Selected file:", file);
  };
  
  const handleClose = () =>{
    SpeechRecognition.stopListening();
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} p={4}>
        <Grid item xs={12} display={"flex"} justifyContent={"end"}>
          <img src={icon} alt="Dark Theme Chat Bot" />
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"end"}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            multiline
            maxRows={4}
            value={value}
            sx={style}
            placeholder="Enter the prompt...."
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <InsertPhotoOutlinedIcon sx={{ color: style.iconColor, cursor: "pointer" }} onClick={() => document.getElementById('fileInput').click()} />
                  {listening ? (
                    <StopCircleOutlinedIcon sx={{ color: style.iconColor, cursor: "pointer" }} onClick={handleClose} />
                  ) : (
                    <KeyboardVoiceOutlinedIcon sx={{ color: style.iconColor, cursor: "pointer" }} onClick={handleListeningClick} />
                  )}
                  <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileSelect} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
