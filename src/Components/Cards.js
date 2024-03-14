export const Cards = ()=>{return(import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer as MuiDrawer,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { Settings as SettingsIcon, HelpOutline as HelpOutlineIcon, Add as AddIcon, Menu as MenuIcon } from "@mui/icons-material";

// Assuming you have an "images" folder inside "src"
import InvestmentImage from "../images/Investment.png";
import LandingPageLogo from "../images/LandPage-LOGO.png";
import TimerImage from "../images/Timer.png";
import DigitalTimeImage from "../images/DigitalTime.png";
import ProfileLogo from "../images/ProfileLogo.png";

import "../style/DrawerFrame.css"; // Ensure this path is correct

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    backgroundColor: "#172214",
    ...(open && openedMixin(theme)),
    ...(!open && closedMixin(theme)),
  },
}));

const DrawerFrame = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box className="drawerContainer">
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        {/* Drawer content */}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: "#061101",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <DrawerHeader>
          {/* Header content */}
        </DrawerHeader>
        {props.children}
      </Box>
    </Box>
  );
};

export default DrawerFrame;
))}