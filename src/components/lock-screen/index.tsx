import ResponsiveBlurImage from "@/modules/responsive-image";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  darkBackground,
  lightBackground,
  logo,
  navStyles,
  screen,
} from "./styles";
import { DateTime } from "@/modules/date-time";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers/reducers";
const LockScreen = () => {
  const theme = useSelector((state: RootState) => state.myReducer.theme);
  const homeScreen = theme === "light" ? lightBackground : darkBackground;
  return (
    <>
      <div css={homeScreen} />
      <div
        css={screen}
        style={theme === "light" ? { color: "black" } : { color: "white" }}
      >
        <DateTime />
        <ResponsiveBlurImage
<<<<<<< HEAD
          src="static/M4Ever_Logo.jpg"
=======
          src="/staticM4Ever_Logo.jpg"
>>>>>>> 4a64f39331d9d9f0e7e0cb2be8b86467176c5af4
          alt=""
          height={100}
          width={100}
          imageDimensionType="LOGO_SQUARE"
          imageByPixelDensity
          styles={logo}
        />
        Vaibhav Baheti
        <section style={{ fontSize: "2vw", fontFamily: "Georgia" }}>
          Unlock Device {<ArrowDropUpIcon style={{ fontSize: "2vw" }} />}
        </section>
      </div>
    </>
  );
};

export default LockScreen;
