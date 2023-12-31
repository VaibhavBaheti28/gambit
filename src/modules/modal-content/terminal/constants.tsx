import About from "../about";
import { Contact } from "../contact";
import Projects from "../projects";
import Skills from "../skills";

export const commands: {
  command: {
    [key: string]: {
      text?: string;
      modalComponent?: React.JSX.Element;
    };
  };
} = {
  command: {
    Help: {
      text: "About   Skills   Contact   Projects   clear",
    },
    About: {
      modalComponent: <About />,
    },
    Skills: {
      modalComponent: <Skills />,
    },
    Contact: {
      modalComponent: <Contact />,
    },
    Projects: {
      modalComponent: <Projects />,
    },
    Clear: {},
  },
};
