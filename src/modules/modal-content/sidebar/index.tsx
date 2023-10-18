import ExploreIcon from "@mui/icons-material/Explore";
import { explore, sidebar } from "./styles";
import { Contact } from "../contact";
import { useDispatch, useSelector } from "react-redux";
import { updateString } from "@/store/mySlice";
import { RootState } from "@/store/reducers/reducers";
export const Sidebar = () => {
  const myString = useSelector((state: RootState) => state.myReducer.myString);

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
        <p>Explorer</p>
      </div>
      <div
        onClick={() => {
          dispatch(updateString("About"));
        }}
      >
        <p>About Me</p>
      </div>
      <div
        onClick={() => {
          dispatch(updateString("Projects"));
        }}
      >
        <p>Projects</p>
      </div>
      <div
        onClick={() => {
          dispatch(updateString("Skills"));
        }}
      >
        <p>Skills</p>
      </div>
      <div>
        <p>Certifications</p>
      </div>
      <div
        onClick={() => {
          dispatch(updateString("Contact"));
        }}
      >
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Sidebar;
