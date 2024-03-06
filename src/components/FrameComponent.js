import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

const FrameComponent = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[15px] pl-0 box-border gap-[12px_0px] max-w-full text-left text-21xl text-gray-400 font-alata" style={{height:"6vh"}}>
      <header className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-5xl text-gray-700 font-blinker">
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <div className="flex flex-row items-center justify-start gap-[0px_13px]">
            <img
              className="h-[43px] w-[46px] relative object-cover"
              loading="lazy"
              alt=""
              src="/asset-logo-page0001-1@2x.png"
            />
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[30px] font-normal font-inherit whitespace-nowrap">
              Investment . AI
            </h2>
          </div>
        </div>
        <div className="w-[306px] flex flex-col items-start justify-start gap-[59px_0px] text-center text-lg text-springgreen-100 font-avenir mq450:gap-[59px_0px]">
          <div className="self-stretch flex flex-row items-start justify-end">
            <div className="w-[264px] flex flex-row items-center justify-start py-0 pr-0 pl-5 box-border gap-[0px_21px]">
              <Button
                className="h-12 flex-1"
                startIcon={
                  <img width="25.9px" height="32px" src="/group-9.svg" />
                }
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#42ff54",
                  fontSize: "20",
                  background: "#244c23",
                  borderRadius: "8px",
                  "&:hover": { background: "#244c23" },
                  height: 48,
                }}
              >
                {`00:05:10 `}
              </Button>
              <img
                className="h-[60px] w-[60px] relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                onClick={toggleContent}
                style={{ cursor: "pointer" }}
                src="/ellipse-56@2x.png"
              />
            </div>
          </div>
          {showContent && (
            <div className="w-[234px] flex flex-row items-start justify-between gap-[20px]">
              <div>
                <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[20px] font-medium font-inherit whitespace-nowrap">
                  Recent Activities
                </h3>
              </div>
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[20px] font-normal font-inherit text-gray-300">
                Plugins
              </h3>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default FrameComponent;
