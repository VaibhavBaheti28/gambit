import ExploreIcon from "@mui/icons-material/Explore";
import { explore, sidebar } from "./styles";
import { Contact } from "../contact";
export const Sidebar = () => {
  return (
    <div css={sidebar}>
      <div css={explore}>
        <ExploreIcon />
        <p>Explorer</p>
      </div>
      <div>
        <p>About Me</p>
      </div>
      <div>
        <p>Skills</p>
      </div>
      <div>
        <p>Certifications</p>
      </div>
      <div
        onClick={() => {
          return <Contact />;
        }}
      >
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Sidebar;
