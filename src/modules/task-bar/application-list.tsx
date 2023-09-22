import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AppsIcon from "@mui/icons-material/Apps";
import DescriptionIcon from "@mui/icons-material/Description";
import ExploreIcon from "@mui/icons-material/Explore";
import { Contact } from "../modal-content/contact";
export const applicationList: {
  data: {
    [key: string]: {
      displayName: string;
      Icon: React.JSX.Element;
      onClick: string;
      modalComponent: React.JSX.Element;
    };
  };
} = {
  data: {
    Explorer: {
      displayName: "Explorer",
      Icon: <ExploreIcon />,
      onClick: "",
      modalComponent: <>Explorer</>,
    },
    resume: {
      displayName: "resume",
      Icon: <DescriptionIcon />,
      onClick: "",
      modalComponent: <>Resume</>,
    },
    "contact-me": {
      displayName: "contact-me",
      Icon: <PermContactCalendarIcon />,
      onClick: "",
      modalComponent: <Contact />,
    },

    def: {
      displayName: "def",
      Icon: <AppsIcon />,
      onClick: "",
      modalComponent: <>Error</>,
    },
  },
};
