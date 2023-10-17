import { about, blog, certificate, contact, projects, screen } from "./styles";
import About from "../about";
import { useSelector, useDispatch } from "react-redux";
import { updateString } from "@/store/mySlice";
import { RootState } from "@/store/reducers/reducers";
import ExplorerContact from "../explorerContact";
import Projects from "../projects";

export const Explorer = () => {
  const myString = useSelector((state: RootState) => state.myReducer.myString);

  const dispatch = useDispatch();

  switch (myString) {
    case "About":
      return <About />;
    case "Explorer":
      return (
        <div css={screen}>
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
          <div css={blog}>Blog</div>
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
    case "Contact":
      return <ExplorerContact />;
    case "Projects":
      return <Projects />;
    default:
      return <></>;
  }
};
