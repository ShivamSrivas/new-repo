import { createSlice } from "@reduxjs/toolkit";

export const landingPageSlice = createSlice({
  name: "landingPage",
  initialState: {
    drawerOpen: false,
    theme: "Dark",
    style: {
      darkTheme: {
        width: "217px",
        height: "40px",
        flexShrink: 0,
        borderRadius: "8px",
        background: "#968864",
        color: "#FFFFFF",
        "&:hover": {
          background: "#7a6b4e",
        },
        headerAppBar: {
          display: "flex",
          justifyContent: "space-between",
        },
        brandName: {
          color: "#FFFFFF",
          fontFamily: "Blinker",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "30px",
        },
        themeHeaderImage: {
          display: "flex",
          justifyContent: "space-between",
        },
        mainContainer: {
          flex: 1,
          background: "var(--Fill-Blue, radial-gradient(49.77% 45.59% at 48.47% -1.07%, rgba(29, 63, 88, 0.83) 0%, #081017 100%))",
        },
        addActivityButton: {
          width: "217px",
          height: "40px",
          alignSelf: "center",
          flexShrink: 0,
          borderRadius: "8px",
          color: "#FFF",
          lineHeight: "20px",
          textTransform: "capitalize",
          marginTop:"20px",
          marginBottom:"25px",
          fontFamily: "Avenir",
          fontSize: "14px",
          color: "#3F9CFF",
          fontStyle: "normal",
          fontWeight: 400,
          letterSpacing: "-0.28px",
        },
        drawerIcon: {
          color: "#fff",
          display: "flex",
          width:"100px",
          cursor:"pointer"
         
        },
        themeImageSpan: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      lightTheme:{
        width: "217px",
        height: "40px",
        flexShrink: 0,
        borderRadius: "8px",
        background: "#968864",
        color: "#FFFFFF",
        "&:hover": {
          background: "#7a6b4e",
        },
        headerAppBar: {
          display: "flex",
          justifyContent: "space-between",
        },
        brandName: {
          color: "#424241;",
          fontFamily: "Blinker",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "30px",
        },
        themeHeaderImage: {
          display: "flex",
          justifyContent: "space-between",
        },
        mainContainer: {
          flex: 1,
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-evenly",
          minHeight: "100vh",
          background:"#fffff",
        },
        addActivityButton: {
          width: "217px",
          height: "40px",
          alignSelf: "center",
          flexShrink: 0,
          borderRadius: "8px",
          color: "#FFF",
          lineHeight: "20px",
          textTransform: "capitalize",
          marginTop:"20px",
          marginBottom:"25px",
          fontFamily: "Avenir",
          fontSize: "14px",
          color: "#968864",
          fontStyle: "normal",
          fontWeight: 400,
          letterSpacing: "-0.28px",
        },
        drawerIcon: {
          color: "#fff",
          display: "flex",
          width:"100px",
          cursor:"pointer"
         
        },
        themeImageSpan: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }
      }
    },
  },
  reducers: {
    toggleDrawer: (state, action) => {
      state.drawerOpen = !state.drawerOpen;
    },
    themeChanger: (state, action) => {
      return {
        ...state,
        theme: state.theme === "Dark" ? "Light" : "Dark",
      };
    },
  },
});

export const { toggleDrawer, themeChanger } = landingPageSlice.actions;
export default landingPageSlice.reducer;
