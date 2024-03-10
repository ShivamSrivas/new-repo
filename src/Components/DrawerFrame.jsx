import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Investment from "../../src/images/Investment . AI.png";
import LandingPageLogo from "../../src/images/LandPage-LOGO.png";
import Timer from "../../src/images/Timer.png";
import DigitalTime from "../../src/images/DigitalTime.png"
import ProfileLogo from "../../src/images/ProfileLogo.png";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LandingCard from "./LandingCard";
import PromptField from "./PromptField";

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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    backgroundColor: "#172214",
    ...(open && openedMixin(theme)),
    ...(!open && closedMixin(theme)),
  },
  ...(open && openedMixin(theme)),
  ...(!open && closedMixin(theme)),
}));

export default function DrawerFrame() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            alignSelf: open ? "self-start" : "center",
          }}
        >
          {/* sx={{color:"white",width:"24.75px",height:"13.75px"}} */}
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              color: "white",
            }}
          >
            {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {["Add Activity"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "flex-start" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    backgroundColor: "#204d21",
                    width: open ? "200px" : "40px",
                    height: "40px",
                    borderRadius: "8px",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <AddIcon
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                  {open ? (
                    <span
                      style={{
                        opacity: open ? 1 : 0,
                        fontSize: open ? "10px" : "0px",
                        marginLeft: "8px",
                      }}
                    >
                      {text}
                    </span>
                  ) : null}
                </ListItemIcon>
              </ListItemButton>
              {!open ? (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "white", fontSize: "10px" }}>Add</span>
                  <span style={{ color: "white", fontSize: "10px" }}>
                    Activity
                  </span>
                </span>
              ) : null}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            {
              "Previous 30 days": [
                "Wealth Management",
                "Articles about wealth ...",
                "Start my Wealth Management",
                "Tools that help in wealth ...",
                "How I can use YNAB",
                "Suggest planning options",
              ],
            },
            {
              "Jan 2024": [
                "What is ESG",
                "How ESG Works",
                "How ESG impact us",
                "Wealth Management",
                "Articles about wealth",
                "Start my Wealth Management",
                "Tools that helps in wealth ..",
                "How I can use YNAB",
                "Suggest me planning options",
                "How can I Contribute in ESG",
                "How my contribution impact ...",
              ],
            },
          ].map((items, index) => (
            <div key={index}>
              {Object.entries(items).map(([category, itemList], idx) => (
                <ListItem
                  key={category}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: "flex-start",
                      px: 2.5,
                      display: open ? "flex" : "none",
                    }}
                  >
                    <ListItemText
                      primary={category}
                      sx={{
                        color: "#6EC04A",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 600,
                        fontStyle: "normal",
                        // Matching padding with message-like structure
                        marginBottom: "5px", // Adjusted spacing for consistency with messages
                      }}
                    />
                  </ListItemButton>
                  <div
                    style={{
                      paddingLeft: "20px",
                      marginBottom: "20px",
                      display: open ? "block" : "none",
                    }}
                  >
                    {itemList.map((item, idx) => (
                      <div key={idx} style={{ cursor: "pointer" }} title={item}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 100,
                            fontSize: "12px",
                            fontStyle: "normal",
                            color: "white",
                            marginBottom: "5px",
                          }}
                        >
                          {item.length > 30 ? `${item.slice(0, 30)}...` : item}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </ListItem>
              ))}
            </div>
          ))}
        </List>
        <Drawer />
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{ p: 2 }}
          flexDirection={"column"}
          display={"flex"}
          alignItems={"flex-start"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SettingsIcon sx={{ color: "#ffffff", cursor: "pointer", mr: 2 }} />{" "}
            {open ? (
              <Typography
                sx={{
                  color: "#ffffff",
                  cursor: "pointer",
                  mr: 2,
                  fontSize: "12px",
                }}
              >
                Settings
              </Typography>
            ) : null}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HelpOutlineIcon
              sx={{ color: "#ffffff", cursor: "pointer", mr: 2 }}
            />{" "}
            {open ? (
              <Typography
                sx={{
                  color: "#ffffff",
                  cursor: "pointer",
                  mr: 2,
                  fontSize: "12px",
                }}
              >
                Help
              </Typography>
            ) : null}
          </div>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#061101" ,display:"flex",flexDirection:"column",justifyContent:"space-between"
      ,minHeight:"100vh"
    }}>
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={LandingPageLogo} alt="Logo" />
            <img src={Investment} alt="Logo" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              marginRight:"1rem"
            }}>
            <img src={Timer} alt="Logo" />
            <img src={DigitalTime}alt="logo" style={{marginTop:"0.5rem",marginLeft:"0.5rem"}}/>

            </div>
            
            <img src={ProfileLogo} alt="Logo" />
          </div>
        </DrawerHeader>
        <LandingCard/>
        <PromptField/>
      </Box>
    </Box>
  );
}
