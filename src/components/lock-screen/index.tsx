import ResponsiveBlurImage from "@/modules/responsive-image";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { background, logo, navStyles, screen } from "./styles";
const LockScreen = () => {
  return (
    <>
      <div css={background} />
      <div css={screen}>
        <nav css={navStyles}>
          <span>Calender</span>
          <span>Time</span>
        </nav>
        <ResponsiveBlurImage
          src="/M4Ever_Logo.jpg"
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
