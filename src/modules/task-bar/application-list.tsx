import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AppsIcon from "@mui/icons-material/Apps";
import DescriptionIcon from "@mui/icons-material/Description";
import ExploreIcon from "@mui/icons-material/Explore";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Contact } from "../modal-content/contact";
import { Explorer } from "../modal-content/explorer";
import { Terminal } from "../modal-content/terminal";
export const applicationList: {
  data: {
    [key: string]: {
      displayName: string;
      Icon: React.JSX.Element;
      onClick?: string;
      modalComponent?: React.JSX.Element;
    };
  };
} = {
  data: {
    Explorer: {
      displayName: "Explorer",
      Icon: <ExploreIcon />,
      onClick: "",
      modalComponent: <Explorer />,
    },
    resume: {
      displayName: "resume",
      Icon: <DescriptionIcon />,
      onClick: "/resume",
    },
    "contact-me": {
      displayName: "contact-me",
      Icon: <PermContactCalendarIcon />,
      onClick: "",
      modalComponent: <Contact />,
    },
    terminal: {
      displayName: "terminal",
      Icon: <TerminalIcon />,
      onClick: "",
      modalComponent: <Terminal />,
    },

    def: {
      displayName: "def",
      Icon: <AppsIcon />,
      onClick: "",
      modalComponent: <>Error</>,
    },
  },
};
