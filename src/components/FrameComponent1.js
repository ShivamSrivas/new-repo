import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FrameComponent1 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      className="h-[1024px] flex flex-col items-center justify-start pt-[33px] pb-[41px] pr-4 pl-3.5 box-border relative gap-[40px_0px] text-center text-sm text-gray-200 font-avenir mq975:hidden mq975:pt-[21px] mq975:pb-[27px] mq975:box-border mq450:pt-5 mq450:pb-5 mq450:box-border"
      style={{ height: "100vh" }}
    >
      <div
        className={`w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 ${
          isDrawerOpen ? "block" : "hidden"
        }`}
        onClick={handleDrawerToggle}
      />
      {!isDrawerOpen && (
        <img
          className="w-[33px] h-[33px] relative overflow-hidden shrink-0 z-[1] cursor-pointer"
          loading="lazy"
          alt=""
          src="/cihamburgerlg.svg"
          onClick={handleDrawerToggle}
        />
      )}
      {!isDrawerOpen && (
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
          <div className="h-10 w-10 relative">
            <div className="absolute top-0 left-0 rounded-lg bg-springgreen-200 w-full h-full z-[1]" />
            <img
              className="absolute top-[13px] left-[13px] w-3.5 h-3.5 z-[2]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      )}
      {!isDrawerOpen && (
        <div className="relative tracking-[-0.02em] leading-[20px] font-extrabold z-[1]">
          <p className="m-0">Add</p>
          <p className="m-0">Activity</p>
        </div>
      )}
      <div
        className="flex flex-col items-end justify-start gap-17px_0px"
        style={{ position: "absolute", bottom: "20px" }}
      >
        {!isDrawerOpen && (
          <>
            <img
              className="w-22.6px h-6 relative z-1"
              loading="lazy"
              alt=""
              src="/group.svg"
            />
            <img
              className="w-7 h-7 relative overflow-hidden shrink-0 z-1"
              loading="lazy"
              alt=""
              src="/help-fill0-wght400-grad0-opsz24-1.svg"
            />
          </>
        )}
      </div>

      {/* Drawer content */}
      <div
        className={`fixed left-0 top-0 h-full w-[250px] shadow-lg ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[2]`}
        style={{ backgroundColor: "#172214" }}
      >
        <img
          className="w-[33px] h-[33px] relative overflow-hidden shrink-0 z-[1] cursor-pointer"
          style={{ top: "25px", right: "90px" }}
          loading="lazy"
          alt=""
          src="/cihamburgerlg.svg"
          onClick={handleDrawerToggle}
        />
        <div
          className="h-[1024px] flex flex-col items-center justify-start pt-[33px] pb-[41px] pr-4 pl-3.5 box-border relative gap-[40px_0px] text-center text-sm text-gray-200 font-avenir md:hidden md:pt-[21px] md:pb-[27px] md:box-border sm:pt-5 sm:pb-5 sm:box-border"
          style={{ height: "100vh" }}
        >
          <div className="flex-1 flex flex-col items-center justify-start gap-[12px_0px]">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
              <div className="h-10 w-10 relative">
                  <Button
                    startIcon={<AddIcon />}
                    style={{
                      width: "217px",
                      height: "40px",
                      borderRadius: "8px",
                      color:"white",
                      backgroundColor: "#204E20",
                      right:"5.5rem"
                    }}
                  >
                    Add Activity
                  </Button>
  
              </div>
            </div>
          </div>
        </div>
        <p className="p-4">Drawer Content</p>
      </div>
    </div>
  );
};

export default FrameComponent1;
