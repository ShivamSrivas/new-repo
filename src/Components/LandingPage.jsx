import React from "react";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import ProfileLogo from "../Images/ProfileLogo.png";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AddIcon from "@mui/icons-material/Add";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import BrandLogo from "../Images/BrandLogo.png";
import { Divider, Typography, Grid } from "@mui/material";
import "../Style/global.css";
import { LandingStyle } from "../Style/LandingPagStyle";
import LightBrandLogo from "../Images/LightBrandLogo.png";
import "../Style/font.css";
import PromptBox from "./PromptBox";
import ListContent from "../Components/ListContent";
import {
  toggleDrawer,
  themeChanger,
  changeScreen,
} from "../Features/LandingPageSlice";
import { DarkMode } from "@mui/icons-material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const drawerWidth = 240;

const openedMixin = (theme, state) => ({
  width: drawerWidth,
  background: state.theme === "Dark" ? "#091a24" : "#F6F4F1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backdropFilter: "blur(2px)",
  overflowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme, state) => ({
  background: state.theme === "Dark" ? "#091a24" : "#F6F4F1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backdropFilter: "blur(2px)",
  width: `calc(${theme.spacing(7)} + 1px)`,
  overflowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: "transparent",
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: "none",
  width: `calc(100% - ${64}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    background: "transparent",
    marginLeft: drawerWidth,
    boxShadow: "none",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, state }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open ? openedMixin(theme, state) : closedMixin(theme, state)),
  "& .MuiDrawer-paper": {
    ...(open ? openedMixin(theme, state) : closedMixin(theme, state)),
  },
}));

const styles = `
.MuiDrawer-paper {
transition: width 1000ms cubic-bezier(0.25, 0.8, 0.25, 1) 0ms;
}
`;
export default function MiniDrawer() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.landingPage);
  const open = state.drawerOpen;

  const handleDrawer = () => {
    dispatch(toggleDrawer());
  };

  const handleTheme = () => {
    dispatch(themeChanger());
  };
  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden auto" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={LandingStyle.themeHeaderImage}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ display: "flex" }}>
              <img
                src={state.theme === "Dark" ? BrandLogo : LightBrandLogo}
                loading="lazy"
                alt="BrandLogo"
              />
            </span>
            <span>
              <Typography
                sx={
                  state.theme === "Dark"
                    ? state.style.darkTheme.brandName
                    : state.style.lightTheme.brandName
                }
                onClick={() => dispatch(changeScreen("landingCard"))}
              >
                Investment.AI
              </Typography>
            </span>
          </div>
          <div className="lightThemeImageSpan">
            <Avatar alt="Cindy Baker" src={ProfileLogo} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        state={state}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <DrawerHeader>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleDrawer}>
              <MenuIcon
                sx={{ color: state.theme === "Dark" ? "#fff" : "#968864" }}
              />
            </IconButton>
            <div style={{ width: 16 }} />
          </div>
        </DrawerHeader>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            marginBottom: open ? 16 : 0,
          }}
        >
          {open && (
            <>
              <Button
                sx={
                  state.theme === "Dark"
                    ? state.style.darkTheme.addActivityButton
                    : state.style.lightTheme.addActivityButton
                }
                variant="outlined"
                startIcon={<AddIcon />}
              >
                Add Activity
              </Button>
              <ListContent />
            </>
          )}
          <Divider color="red" />
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              ...state.style.darkTheme.drawerIcon,
              color: state.theme === "Dark" ? "#ffff" : "#968864",
            }}
          >
            <SettingsOutlinedIcon />
            {open && <span style={{ marginLeft: "25px" }}>Settings</span>}
          </div>
          <div
            style={{
              ...state.style.darkTheme.drawerIcon,
              color: state.theme === "Dark" ? "#fcee14" : "#968864",
            }}
          >
            <DarkMode onClick={handleTheme} />
            {open && <span style={{ marginLeft: "25px" }}>{state.theme}</span>}
          </div>

          <div
            style={{
              ...state.style.darkTheme.drawerIcon,
              color: state.theme === "Dark" ? "#ffff" : "#968864",
            }}
          >
            <HelpOutlineIcon />
            {open && <span style={{ marginLeft: "25px" }}>Help</span>}
          </div>
        </div>
      </Drawer>
      <Box
        sx={
          state.theme === "Dark"
            ? state.style.darkTheme.mainContainer
            : state.style.lightTheme.mainContainer
        }
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "90%",
            overflow: "hidden auto",
            padding: "4%",
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
          {state && state.pages[state.pageToBeRender]}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <PromptBox />
        </Box>
      </Box>
    </Box>
  );
}
