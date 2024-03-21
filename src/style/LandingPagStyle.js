export const LandingStyle = {
  lightThemeHeaderClip: {
    width: "217px",
    height: "40px",
    flexShrink: 0,
    borderRadius: "8px",
    background: "#968864",
    color: "#FFFFFF",
    "&:hover": {
      background: "#7a6b4e",
    },
  },
  themeHeaderImage: {
    display: "flex",
    justifyContent: "space-between",
  },
  mainContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: `var(--Fill-Blue, radial-gradient(49.77% 45.59% at 48.47% -1.07%, rgba(29, 63, 88, 0.83) 0%, #081017 100%))`,
  },
};
