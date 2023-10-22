import ResponsiveBlurImage from "@/modules/responsive-image";
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
import Image from "next/image";
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
        <Image
          src="static/M4Ever_Logo.jpg"
          alt="M4Ever-Logo"
          height={100}
          width={100}
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
