import ResponsiveBlurImage from "@/modules/responsive-image";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { background, logo, navStyles, screen } from "./styles";
import { DateTime } from "@/modules/date-time";
const LockScreen = () => {
  return (
    <>
      <div css={background} />
      <div css={screen}>
        <DateTime />
        <ResponsiveBlurImage
          src="/static/M4Ever_Logo.jpg"
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
