import { about, blog, certificate, contact, projects, screen } from "./styles";
import About from "../about";
import { useSelector, useDispatch } from "react-redux";
import { updateString } from "@/store/mySlice";
import { RootState } from "@/store/reducers/reducers";
import ExplorerContact from "../explorerContact";
import Projects from "../projects";
import Skills from "../skills";

export const Explorer = () => {
  const myString = useSelector((state: RootState) => state.myReducer.myString);
  const theme = useSelector((state: RootState) => state.myReducer.theme);
  const dispatch = useDispatch();

  switch (myString) {
    case "About":
      return <About />;
    case "Skills":
      return <Skills />;
    case "Contact":
      return <ExplorerContact />;
    case "Projects":
      return <Projects />;
    case "Explorer":
      return (
        <div
          css={screen}
          style={
            theme === "light"
              ? { borderTop: "2rem solid black" }
              : { borderTop: "2rem solid #455361" }
          }
        >
          <div
            css={about}
            onClick={() => {
              dispatch(updateString("About"));
            }}
          >
            About Me
          </div>
          <div
            css={projects}
            onClick={() => {
              dispatch(updateString("Projects"));
            }}
          >
            Projects
          </div>
          <div
            css={certificate}
            onClick={() => {
              dispatch(updateString("Certificates"));
            }}
          >
            Certificates
          </div>
          <div
            css={blog}
            onClick={() => {
              dispatch(updateString("Skills"));
            }}
          >
            Skills
          </div>
          <div
            css={contact}
            onClick={() => {
              dispatch(updateString("Contact"));
            }}
          >
            Contacts
          </div>
        </div>
      );

    default:
      return <></>;
  }
};
