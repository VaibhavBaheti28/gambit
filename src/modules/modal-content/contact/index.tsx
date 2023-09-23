import { useEffect, useState } from "react";
import { search, screen, app, appContainer } from "./styles";
import { searchText } from "./modules/search";
import Image from "next/image";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
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
    phone: {
      displayName: "phone",
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

const itemNames = ["whatsapp", "email", "phone", "linkedin", "github"];

export const Contact = () => {
  const [inputValue, setInputValue] = useState<string>("");

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
          const { displayName, onClick, Icon } = item;
          const handleOnClick = () => {
            console.log({ displayName });
          };
          if (searchText(displayName, inputValue))
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
