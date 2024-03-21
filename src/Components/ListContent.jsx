import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { useSelector } from "react-redux";

export default function ListContent() {
  const theme = useSelector((state) => state.landingPage.theme);
  const dataArray = [
    {
      date: "4 March 2024",
      items: [
        "What is ESG",
        "How ESG Works",
        "How ESG impact us",
        "Wealth Management",
        "Articles about wealth",
        "Start my Wealth Management",
      ],
    },
    {
      date: "5 March 2024",
      items: [
        "What is ESG",
        "How ESG Works",
        "How ESG impact us",
        "Wealth Management",
        "Articles about wealth",
        "Start my Wealth Management",
      ],
    },
    {
      date: "4 March 2024",
      items: [
        "What is ESG",
        "How ESG Works",
        "How ESG impact us",
        "Wealth Management",
        "Articles about wealth",
        "Start my Wealth Management",
      ],
    },
    {
      date: "6 March 2024",
      items: [
        "What is ESG",
        "How ESG Works",
        "How ESG impact us",
        "Wealth Management",
        "Articles about wealth",
        "Start my Wealth Management",
      ],
    },
    {
      date: "7 March 2024",
      items: [
        "What is ESG",
        "How ESG Works",
        "How ESG impact us",
        "Wealth Management",
        "Articles about wealth",
        "Start my Wealth Management",
      ],
    },
    {
      date: "8 March 2024",
      items: [
        "What is ESG",
        "How ESG Works", 
        "How ESG impact us",
        "Wealth Management",
        "Articles about wealth",
        "Start my Wealth Management",
      ],
    },
    {
      date: "9 March 2024",
      items: [
        "What is ESG",
        "How ESG Works",
        "How ESG impact us",
        "Wealth Management",
        "Articles about wealth",
        "Start my Wealth Management",
      ],
    },
  ];

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        background: "transparent",
        color: "#3F9CFF",
        position: "relative",
        overflow: "hidden auto",
        maxHeight: 400,
        "& ul": { padding: 0 },
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
      subheader={<li/>}
    >
      {dataArray.map((data) => (
        <li key={data.date}>
          <ul>
            <ListSubheader
              style={{
                color: theme === "Dark" ? "#3F9CFF": "#968864",
                background: "transparent",
                fontFamily: "Poppins",
                fontSize: "11px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "30px", // 272.727%
                letterSpacing: "-0.22px",
              }}
            >
              {data.date}
            </ListSubheader>
            {data.items.map((item, index) => (
              <ListItem
                key={`${data.date}-${index}`}
                sx={{
                  marginTop: 0,
                  marginBottom: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <ListItemText
                  sx={{
                    marginTop: 0,
                    marginBottom: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                  primary={item}
                  primaryTypographyProps={{
                    style: {
                      color: "#777",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      marginTop: 0,
                      marginBottom: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                      lineHeight: "33.6px",
                    },
                  }}
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
