import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepConnector from "@mui/material/StepConnector";
import { Chip } from "@mui/material";
import { styled } from "@mui/system";
import CustomCards from "../utlis/CustomCards";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const steps = [
  "Wealth Management",
  "ESG",
  "Investment Management",
  "Marketplace",
  "Community",
  "Insights",
  "Initiatives",
];

const CustomStepConnector = styled(StepConnector)({
  "& .MuiStepConnector-line": {
    display: "none",
  },
});

export default function InteractiveCard() {
  useEffect(() => {
    const stepper = {
      WealthManagement: 0,
      ESG: 1,
      InvestmentManagement: 2,
    };

    const handleStepper = () => {
      setActiveStep(stepper[state.interactiveCard]);
    };
    handleStepper();
  }, []);

  const state = useSelector((state) => state.landingPage);
  const theme = state.theme;
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        connector={<CustomStepConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <Chip
              label={label}
              sx={{
                display: "inline-flex",
                padding: "16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                background:
                  activeStep === index
                    ? theme === "Dark"
                      ? "var(--Dark-Heading, #3F9CFF)"
                      : "#968864"
                    : "transparent",
                "& .MuiChip-label": {
                  color:
                    activeStep === index
                      ? theme === "Dark"
                        ? "#FFF"
                        : "#FFF"
                      : theme === "Dark"
                      ? "#FFF"
                      : "#968864",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "800",
                  lineHeight: "32px",
                },
              }}
              onClick={handleStep(index)}
            ></Chip>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 ? (
        <CustomCards WealthManagement={true} />
      ) : activeStep === 1 ? (
        <CustomCards WealthManagement={false} />
      ) : null}
    </Box>
  );
}
