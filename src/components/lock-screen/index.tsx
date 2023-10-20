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
      <div css={screen}>
        <DateTime />
        <ResponsiveBlurImage
          src="static/M4Ever_Logo.jpg"
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
