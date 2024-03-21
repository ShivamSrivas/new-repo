import ESG from "../../Images/ESG.png";
import WealthManagement from "../../Images/WealthManagement.png";
import InvestmentManagement from "../../Images/InvestmentManagement.png";

export const InitialStateCustomCard = {
  StepperChipsHeading: [
    "Wealth Management",
    "ESG",
    "Investment Management",
    "Marketplace",
    "Community",
    "Insights",
    "Initiatives",
  ],
  ContentSubHeading: "How can I help you today?",
  images: [
    {
      src: ESG,
      label: "ESG",
      style: { width: "230px", height: "289.8px", flexShrink: 0 },
      description:
        "Widespread group of squamate reptiles, with over 9,000 species, ranging across all continents except Antarctica",
    },
    {
      src: WealthManagement,
      label: "WealthManagement",
      style: { width: "250px", height: "315px", flexShrink: 0 },
      description:
        "Widespread group of squamate reptiles, with over 9,000 species, ranging across all continents except Antarctica",
    },
    {
      src: InvestmentManagement,
      label: "InvestmentManagement",
      style: { width: "230px", height: "289.8px", flexShrink: 0 },
      description:
        "Widespread group of squamate reptiles, with over 9,000 species, ranging across all continents except Antarctica",
    },
  ],
  CardActionArea: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    background: "transparent",
  },
  CardContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  DarkTheme: {
    StepperChips: {
      display: "inline-flex",
      padding: "16px",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
      borderRadius: "32px",
      background: "var(--Light-Primary, #968864)",
    },
    StepperChipsTypography: {
      color: "#FFF",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 800,
      lineHeight: "32px",
      letterSpacing: "1px", // Adjust as needed
      textTransform: "capitalize",
    },
    MessageHeading: {
      color: "#3F9CFF",
      fontFamily: "Poppins",
      marginLeft:"30px",
      fontSize: "24px",
      fontWeight: 800,
      lineHeight: "67.2px",
      letterSpacing: "1px", // Adjust as needed
      textTransform: "capitalize",
    },
    MessageSubHeading: {
      color: "#fff",
      fontFamily: "Poppins",
      fontSize: "15px",
      fontWeight: 600,
      lineHeight: "28.8px",
      letterSpacing: "1px", // Adjust as needed
      textTransform: "capitalize",
      marginLeft:"70px",
    },
    UpperCards: {
     
      // height: show ? "149px" : "97px",
      background: "#fff",
      borderRadius: "16px",
      marginLeft:"60px",
      "&:hover": {
        boxShadow: "md",
        borderColor: "neutral.outlinedHoverBorder",
      },
    },
  },
  LightTheme: {
    StepperChips: {
      display: "inline-flex",
      padding: "16px",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
      borderRadius: "32px",
      background: "var(--Light-Primary, #968864)",
    },
    StepperChipsTypography: {
      color: "#FFF",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 800,
      lineHeight: "32px",
      letterSpacing: "1px",
      textTransform: "capitalize",
    },
    MessageHeading: {
      color: "var(--Light-Primary, #968864)",
      fontFamily: "Poppins",
      marginLeft:"30px",
      fontSize: "24px",
      fontWeight: 800,
      lineHeight: "67.2px",
      letterSpacing: "1px",
      textTransform: "capitalize",
    },
    MessageSubHeading: {
      color: "var(--Light-Body-Text, #2C2C2C)",
      fontFamily: "Poppins",
      fontSize: "15px",
      fontWeight: 600,
      lineHeight: "28.8px",
      letterSpacing: "1px",
      marginLeft:"70px",
      textTransform: "capitalize",
    },
    UpperCards: {

      // height: show ? "149px" : "97px",
      background: "#fff",
      borderRadius: "16px",
      marginLeft:"60px",
      "&:hover": {
        boxShadow: "md",
        borderColor: "neutral.outlinedHoverBorder",
      },
    },
  },
};
