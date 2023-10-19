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
    help: {
      text: "about   skills   contact   projects",
    },
    about: {
      modalComponent: <About />,
    },
    skills: {
      modalComponent: <Skills />,
    },
    contact: {
      modalComponent: <Contact />,
    },
    projects: {
      modalComponent: <Projects />,
    },
  },
};
