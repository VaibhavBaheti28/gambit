"use client";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { dateTime } from "./styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers/reducers";

export const DateTime = () => {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
  const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setCurrentDate(getCurrentDate());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  function getCurrentDate(): string {
    const now = new Date();
    const dateString = `${now.toDateString()}`;
    return dateString;
  }
  function getCurrentTime(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds}`;

    return timeString;
  }
  const theme = useSelector((state: RootState) => state.myReducer.theme);
  return (
    <div css={dateTime} style={theme === "dark" ? { color: "white" } : {}}>
      <span style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <CalendarTodayIcon />
        {currentDate}
      </span>
      <span
        style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        suppressHydrationWarning
      >
        <AccessTimeIcon />
        {currentTime}
      </span>
    </div>
  );
};
