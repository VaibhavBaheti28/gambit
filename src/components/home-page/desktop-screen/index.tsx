import { bodyStyles, navStyles } from "../styles";
import Image from "next/image";
import TuneIcon from "@mui/icons-material/Tune";
import { DateTime } from "@/modules/date-time";
import { useState } from "react";
import { configContent, name } from "./styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HelpIcon from "@mui/icons-material/Help";
import LockIcon from "@mui/icons-material/Lock";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/reducers/reducers";
import { updateLock, updateTheme } from "@/store/mySlice";

const DesktopScreen = () => {
  const [config, setConfig] = useState(false);
  const configStyles = {
    display: config ? "block" : "none",
    zIndex: 200,
  };
  const theme = useSelector((state: RootState) => state.myReducer.theme);
  const dispatch = useDispatch();
  return (
    <>
      <nav css={navStyles}>
        <div>
          <Image
            src="static/M4Ever_Logo.jpg"
            alt="M4Ever-logo"
            height={35}
            width={35}
            style={{ borderRadius: "35" }}
          />
        </div>
        <DateTime />
        <div
          onClick={() => setConfig(!config)}
          style={config ? { backgroundColor: "opacity: '0.5'" } : {}}
        >
          <TuneIcon
            fontSize="large"
            style={theme === "light" ? { color: "black" } : { color: "white" }}
          />
        </div>
      </nav>
      <div style={configStyles}>
        <div
          css={configContent}
          style={theme === "dark" ? { backgroundColor: "#4d3f2c" } : {}}
        >
          <div
            style={{ justifySelf: "center" }}
            onClick={() => {
              dispatch(updateTheme("light"));
            }}
          >
            <LightModeIcon fontSize="large" />
          </div>
          <div
            style={{ justifySelf: "center" }}
            onClick={() => {
              dispatch(updateTheme("dark"));
            }}
          >
            <DarkModeIcon fontSize="large" />
          </div>
          <div style={{ justifySelf: "center" }}>
            <HelpIcon fontSize="large" />
          </div>
          <div
            style={{ justifySelf: "center" }}
            onClick={() => dispatch(updateLock(true))}
          >
            <LockIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div css={bodyStyles} style={theme === "light" ? { color: "black" } : {}}>
        <div css={name}>Vaibhav Baheti</div>
        <div style={{ fontSize: "20px", width: "40%" }}>
          Life is full of ups and downs, but it&apos;s the journey that makes it
          worthwhile. We learn, we grow, and we appreciate the good moments even
          more because of the challenges we face.
        </div>
      </div>
    </>
  );
};

export default DesktopScreen;
