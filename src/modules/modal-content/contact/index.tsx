import { search, screen, app, appContainer } from "./styles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Image from "next/image";
export const items: {
  data: {
    [key: string]: {
      displayName: string;
      Icon: React.JSX.Element;
      onClick: string;
    };
  };
} = {
  data: {
    Whatsapp: {
      displayName: "whatsapp",
      Icon: (
        <>
          <Image
            src="/Whatsapp.png"
            alt="Whatsapp-logo"
            height={100}
            width={100}
            css={app}
          />
        </>
      ),
      onClick: "",
    },
    Email: {
      displayName: "email",
      Icon: (
        <>
          <Image
            src="/mail.png"
            alt="Mail-logo"
            height={100}
            width={100}
            css={app}
          />
        </>
      ),
      onClick: "",
    },
    contact: {
      displayName: "contact",
      Icon: (
        <>
          <Image
            src="/phone.png"
            alt="Phone-logo"
            height={100}
            width={100}
            css={app}
          />
        </>
      ),
      onClick: "",
    },

    Linkedin: {
      displayName: "linkedin",
      Icon: (
        <>
          <Image
            src="/linkedin.png"
            alt="Linkedin-logo"
            height={100}
            width={100}
            css={app}
          />
        </>
      ),
      onClick: "",
    },
    Github: {
      displayName: "github",
      Icon: (
        <>
          <Image
            src="/GitHub.png"
            alt="Github-logo"
            height={100}
            width={100}
            css={app}
          />
        </>
      ),
      onClick: "",
    },
  },
};

export const Contact = () => {
  return (
    <div css={screen}>
      <div style={{ width: "80%" }}>
        <input css={search} />
      </div>
      <div css={appContainer}>
        {Object.values(items.data).map((item) => {
          const { displayName, onClick, Icon } = item;
          const handleOnClick = () => {
            console.log({ displayName });
          };
          return (
            <div key={displayName} onClick={handleOnClick}>
              {Icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};
