import { bodyStyles, navStyles } from "../styles";
import Image from "next/image";
import TuneIcon from "@mui/icons-material/Tune";
import { DateTime } from "@/modules/date-time";
import { useState } from "react";
import { configContent } from "./styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HelpIcon from "@mui/icons-material/Help";
import LockIcon from "@mui/icons-material/Lock";

const DesktopScreen = () => {
  const [config, setConfig] = useState(false);
  const configStyles = {
    display: config ? "block" : "none",
  };
  return (
    <>
      <nav css={navStyles}>
        <div style={{ color: "white" }}>
          <Image
            src="/M4Ever_Logo.jpg"
            alt="M4Ever-logo"
            height={35}
            width={35}
          />
        </div>
        <DateTime />
        <div
          onClick={() => setConfig(!config)}
          style={config ? { backgroundColor: "slategray", opacity: "0.5" } : {}}
        >
          <TuneIcon fontSize="large" />
        </div>
      </nav>
      <div style={configStyles}>
        <div css={configContent}>
          <div style={{ justifySelf: "center" }}>
            <LightModeIcon fontSize="large" />
          </div>
          <div style={{ justifySelf: "center" }}>
            <DarkModeIcon fontSize="large" />
          </div>
          <div style={{ justifySelf: "center" }}>
            <HelpIcon fontSize="large" />
          </div>
          <div style={{ justifySelf: "center" }}>
            <LockIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div css={bodyStyles}>
        <div>Vaibhav Baheti</div>
        <div>Logo</div>
        <div>Random text</div>
      </div>
    </>
  );
};

export default DesktopScreen;
