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
        onClick={() => {
          dispatch(updateString("Explorer"));
        }}
      >
        <ExploreIcon />
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
