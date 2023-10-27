import ExploreIcon from "@mui/icons-material/Explore";
import { explore, sidebar } from "./styles";
import { Contact } from "../contact";
import { useDispatch, useSelector } from "react-redux";
import { updateString } from "@/store/mySlice";
import { RootState } from "@/store/reducers/reducers";
export const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div css={sidebar}>
      <div
        css={explore}
        style={{
          borderBottom: "3px solid black",
          borderTop: "1px solid black",
        }}
        onClick={() => {
          dispatch(updateString("Explorer"));
        }}
      >
        <ExploreIcon fontSize="large" />
        Explorer
      </div>
      <div
        onClick={() => {
          dispatch(updateString("About"));
        }}
      >
        About Me
      </div>
      <div
        onClick={() => {
          dispatch(updateString("Projects"));
        }}
      >
        Projects
      </div>
      <div
        onClick={() => {
          dispatch(updateString("Skills"));
        }}
      >
        Skills
      </div>
      <div>Certifications</div>
      <div
        onClick={() => {
          dispatch(updateString("Contact"));
        }}
      >
        Contact
      </div>
    </div>
  );
};

export default Sidebar;
