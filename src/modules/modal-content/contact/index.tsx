import { useEffect, useState } from "react";
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
      displayName: "whatsapp",
      Icon: (
        <>
          <Image
<<<<<<< HEAD
            src="static/Whatsapp.png"
=======
            src="/staticWhatsapp.png"
>>>>>>> 4a64f39331d9d9f0e7e0cb2be8b86467176c5af4
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
<<<<<<< HEAD
            src="static/mail.png"
=======
            src="/staticmail.png"
>>>>>>> 4a64f39331d9d9f0e7e0cb2be8b86467176c5af4
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
<<<<<<< HEAD
            src="static/phone.png"
=======
            src="/staticphone.png"
>>>>>>> 4a64f39331d9d9f0e7e0cb2be8b86467176c5af4
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
<<<<<<< HEAD
            src="static/linkedin.png"
=======
            src="/staticlinkedin.png"
>>>>>>> 4a64f39331d9d9f0e7e0cb2be8b86467176c5af4
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
      displayName: "github",
      Icon: (
        <>
          <Image
<<<<<<< HEAD
            src="static/GitHub.png"
=======
            src="/staticGitHub.png"
>>>>>>> 4a64f39331d9d9f0e7e0cb2be8b86467176c5af4
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

const itemNames = ["whatsapp", "email", "phone", "linkedin", "github"];

export const Contact = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();
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
            if (slug) router.push(slug);
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
