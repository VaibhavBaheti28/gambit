import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AppsIcon from "@mui/icons-material/Apps";
import DescriptionIcon from "@mui/icons-material/Description";
import ExploreIcon from "@mui/icons-material/Explore";
import TerminalIcon from "@mui/icons-material/Terminal";
import BookIcon from "@mui/icons-material/Book";
import { Contact } from "../modal-content/contact";
import { Explorer } from "../modal-content/explorer";
import { Terminal } from "../modal-content/terminal";
export const applicationList: {
  data: {
    [key: string]: {
      displayName: string;
      Icon?: React.JSX.Element;
      onClick?: string;
      modalComponent?: React.JSX.Element;
    };
  };
} = {
  data: {
    Explorer: {
      displayName: "Explorer",
      Icon: <ExploreIcon />,
      onClick: "Explorer",
      modalComponent: <Explorer />,
    },
    resume: {
      displayName: "resume",
      Icon: <DescriptionIcon />,
      onClick: "/gambit/resume",
    },
    contact: {
      displayName: "contact",
      Icon: <PermContactCalendarIcon />,
      onClick: "contact",
      modalComponent: <Contact />,
    },
    terminal: {
      displayName: "terminal",
      Icon: <TerminalIcon />,
      onClick: "terminal",
      modalComponent: <Terminal />,
    },
    blog: {
      displayName: "blog",
      Icon: <BookIcon />,
      onClick:
        "https://medium.com/@vaibhavbaheti28/my-memorable-trip-to-agumbe-f9e75412c801",
    },

    def: {
      displayName: "def",
      onClick: "",
    },
  },
};
