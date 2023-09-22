import React, { ReactNode, useState } from "react";
import { bodyStyles, dateTime, navStyles } from "../styles";
import Image from "next/image";
import TuneIcon from "@mui/icons-material/Tune";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Modal from "@/dynamic-compoents/modal";

const DesktopScreen = () => {
  const date = new Date().toLocaleDateString("en-GB");
  const temp = new Date();
  const hours = temp.getHours();
  const minutes = temp.getMinutes();
  const seconds = temp.getSeconds();

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
        <div css={dateTime}>
          <span style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <CalendarTodayIcon />
            {date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <AccessTimeIcon />
            {hours +
              ":" +
              (minutes < 10 ? "0" : "") +
              minutes +
              ":" +
              (seconds < 10 ? "0" : "") +
              seconds}
          </span>
        </div>
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
