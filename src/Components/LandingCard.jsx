import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import ESG from "../../src/images/ESG.png";
import InvestmentManagement from "../../src/images/InvestmentManagement.png";
import WealthManagement from "../../src/images/WealthManagement.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: "300px", // Maximum width for responsive behavior
  margin: "auto", // Center align the cards horizontally
}));

export default function BasicGrid() {
  const itemData = [
    {
      img: ESG,
      title: "ESG",
      style: { width: "230px", height: "291px" },
    },
    {
      img: WealthManagement,
      title: "Wealth Management",
      style: { width: "250px", height: "315px" },
    },
    {
      img: InvestmentManagement,
      title: "Investment Management",
      style: { width: "230px", height: "291px" },
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 37px 25px",
            boxSizing: "border-box",
            marginRight: "33%",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "19px 0px",
              maxWidth: "100%",
            }}
          >
            <h1
              style={{
                margin: "0",
                height: "23px",
                position: "relative",
                fontSize: "40px",
                fontFamily: "inherit",
                fontWeight: "700",
                display: "inline-block",
              }}
            >
              <span style={{ color: "white" }}>{`Hello `}</span>
              <span style={{ color: "#42ff54" }}>Vipul,</span>
            </h1>
            <h1
              style={{
                margin: "0",
                height: "30px",
                position: "relative",
                fontSize: "40px",
                fontWeight: "500",
                fontFamily: "Alata",
                color: "white",
                display: "inline-block",
              }}
            >
              How can I help you today?
            </h1>
          </div>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0px 20px 27px",
            boxSizing: "border-box",
            maxWidth: "100%",
            textAlign: "center",
            fontSize: "18px",
            color: "#968864",
            fontFamily: "Alata",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "754px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              gap: "0px 21.5px",
            }}
          >
            {itemData.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  maxWidth: "230px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 27px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "41.2px 0px",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "stretch",
                      height: "289.8px",
                      position: "relative",
                      borderRadius: "16px",
                      maxWidth: "100%",
                      overflow: "hidden",
                      flexShrink: "0",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                    alt=""
                    src={item.img}
                  />
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "88px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      gap: "14px 0px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 2px",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0",
                          flex: "1",
                          position: "relative",
                          fontSize: "inherit",
                          letterSpacing: "-0.02em",
                          lineHeight: "13px",
                          color: "#42ff54",
                          fontWeight: "800",
                          fontFamily: "inherit",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        flex: "1",
                        position: "relative",
                        fontSize: "12px",
                        lineHeight: "180%",
                        fontFamily: "Poppins",
                        color: "white",
                      }}
                    >
                      {`Lorem ipsum dolor sit amet consectetur. Lobortis tempor enim libero risus nulla. `}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
