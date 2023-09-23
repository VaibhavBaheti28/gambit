import { bodyStyles, navStyles } from "../styles";
import Image from "next/image";
import TuneIcon from "@mui/icons-material/Tune";
import { DateTime } from "@/modules/date-time";

const DesktopScreen = () => {
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
        <div>
          <TuneIcon fontSize="large" />
        </div>
      </nav>
      <div css={bodyStyles}>
        <div>Vaibhav Baheti</div>
        <div>Logo</div>
        <div>Random text</div>
      </div>
    </>
  );
};

export default DesktopScreen;
