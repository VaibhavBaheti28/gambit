import { useState } from "react";
import { search, screen, app, appContainer } from "./styles";
import { searchText } from "./modules/search";
import Image from "next/image";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
export const items: {
  data: {
    [key: string]: {
      displayName: string;
      Icon: React.JSX.Element;
      onClick: string;
      slug?: string;
    };
  };
} = {
  data: {
    Whatsapp: {
      displayName: "Whatsapp",
      Icon: (
        <>
          <Image
            src="static/Whatsapp.png"
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
      displayName: "Email",
      Icon: (
        <>
          <Image
            src="static/mail.png"
            alt="Mail-logo"
            height={100}
            width={100}
            css={app}
          />
        </>
      ),
      onClick: "vaibhavbaheti99@gmail.com",
    },
    phone: {
      displayName: "Phone",
      Icon: (
        <>
          <Image
            src="static/phone.png"
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
      displayName: "Linkedin",
      Icon: (
        <>
          <Image
            src="static/linkedin.png"
            alt="Linkedin-logo"
            height={100}
            width={100}
            css={app}
          />
        </>
      ),
      onClick: "",
      slug: "https://www.linkedin.com/in/vaibhav-baheti-28-m4ever/",
    },
    Github: {
      displayName: "Github",
      Icon: (
        <>
          <Image
            src="static/GitHub.png"
            alt="Github-logo"
            height={100}
            width={100}
            css={app}
          />
        </>
      ),
      onClick: "",
      slug: "https://github.com/VaibhavBaheti28?tab=repositories",
    },
  },
};

const itemNames = ["Whatsapp", "Email", "Phone", "Linkedin", "Github"];

export const Contact = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();

  const openInNewTab = (url: string) => {
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      router.push(url);
    }
  };
  const composeEmail = (emailAddress: string) => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink, "_blank");
  };
  return (
    <div css={screen}>
      <div style={{ width: "80%" }}>
        <Autocomplete
          freeSolo
          options={itemNames}
          value={inputValue}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setInputValue(newValue);
            } else {
              setInputValue("");
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Type something..."
              variant="outlined"
              onChange={(e) => setInputValue(e.target.value)}
              css={search}
            />
          )}
        />
      </div>
      <div css={appContainer}>
        {Object.values(items.data).map((item) => {
          const { displayName, onClick, Icon, slug } = item;
          const handleOnClick = () => {
            if (slug) openInNewTab(slug);
            else if (onClick) composeEmail(onClick);
          };
          if (searchText(displayName.toLowerCase(), inputValue.toLowerCase()))
            return (
              <div
                key={displayName}
                onClick={handleOnClick}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {Icon}
                <span style={{ fontSize: "20px" }}>{displayName}</span>
              </div>
            );
        })}
      </div>
    </div>
  );
};
