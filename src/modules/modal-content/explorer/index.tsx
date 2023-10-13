import { useRouter } from "next/router";
import { about, blog, certificate, contact, projects, screen } from "./styles";
import About from "../about";
import { useState } from "react";

export const Explorer = () => {
  let router = useRouter();
  const [comp, setComp] = useState("Explorer");
  switch (comp) {
    case "About":
      return <About />;
    case "Explorer":
      return (
        <div css={screen}>
          <div
            css={about}
            onClick={() => {
              setComp("About");
            }}
          >
            About Me
          </div>
          <div
            css={projects}
            onClick={() => {
              setComp("Projects");
            }}
          >
            Projects
          </div>
          <div
            css={certificate}
            onClick={() => {
              setComp("Certificates");
            }}
          >
            Certificates
          </div>
          <div css={blog}>Blog</div>
          <div
            css={contact}
            onClick={() => {
              setComp("Contact");
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
