import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function ListContent() {
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
        maxHeight: 600,
        "& ul": { padding: 0 },
      }}
      subheader={<li/>}
    >
      {dataArray.map((data) => (
        <li key={data.date}>
          <ul>
            <ListSubheader
              style={{
                color: "#3F9CFF",
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
