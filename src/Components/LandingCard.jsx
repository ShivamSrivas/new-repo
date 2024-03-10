import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ESG from "../../src/images/ESG.png";
import InvestmentManagement from "../../src/images/InvestmentManagement.png";
import WealthManagement from "../../src/images/WealthManagement.png";
import "../style/LandingCard.css";


export default function BasicGrid() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Grid
        sm={12}
        xs={12}
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
        sm={12}
        xs={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="content-container-outter"
        >
          <div
           className="container"
          >
            <div
              style={{
                width: "230px",
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
                  src={ESG}
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
                      ESG
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
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "40px 0px",
                minWidth: "162px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: "315px",
                  position: "relative",
                  borderRadius: "16px",
                  flexShrink: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    height: "100%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    flexShrink: "0",
                    objectFit: "contain",
                    position: "absolute",
                    left: "0px",
                    top: "4px",
                    width: "100%",
                    transform: "scale(1.128)",
                  }}
                  loading="lazy"
                  alt=""
                  src={WealthManagement}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 10px",
                }}
              >
                <div
                  style={{
                    flex: "1",
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
                      padding: "0px 28px",
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
                        fontWeight: "800",
                        color: "#42ff54",
                        fontFamily: "inherit",
                      }}
                    >
                      Wealth Management
                    </h3>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      fontSize: "12px",
                      lineHeight: "180%",
                      fontFamily: "Poppins",
                      color: "white",
                    }}
                  >
                    {`ellus amet at aliquet auctor id vitae non amet tincidunt. Condimentum a neque natoque scelerisque varius vitae maecenas purus. `}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "231px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "40px 0px",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  height: "291px",
                  position: "relative",
                  borderRadius: "16px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                loading="lazy"
                alt=""
                src={InvestmentManagement}
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 3px",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    gap: "14px 0px",
                  }}
                >
                  <h3
                    style={{
                      margin: "0",
                      alignSelf: "stretch",
                      height: "13px",
                      position: "relative",
                      fontSize: "inherit",
                      letterSpacing: "-0.02em",
                      lineHeight: "20px",
                      fontWeight: "800",
                      fontFamily: "inherit",
                      display: "flex",
                      color: "#42ff54",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Investment Management
                  </h3>
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 10px",
                      fontSize: "12px",
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        position: "relative",
                        lineHeight: "180%",
                      }}
                    >
                      Consequat cursus vitae sed amet elementum malesuada. A ac
                      vitae at nulla a laoreet proin vel sed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
