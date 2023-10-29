import { useEffect, useState } from "react";
import {
  commandLine,
  inputBox,
  navbar,
  terminalContainer,
  terminalContent,
} from "./styles";
import { commands } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { updateString } from "@/store/mySlice";
import { RootState } from "@/store/reducers/reducers";
import About from "../about";
import Skills from "../skills";
import ExplorerContact from "../explorerContact";
import Projects from "../projects";
import { Explorer } from "../explorer";

export const Terminal = () => {
  const [input, setInput] = useState<string>("");

  const [output, setOutput] = useState<string[]>([]);
  const dispatch = useDispatch();
  const myString = useSelector((state: RootState) => state.myReducer.myString);
  const theme = useSelector((state: RootState) => state.myReducer.theme);

  function capitalizeFirstLetter(str: string): string {
    if (str.length === 0) return str; // Handle empty strings

    // Use toUpperCase() to make the first character uppercase, and slice() to get the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleExecuteCommand = () => {
    if (commands.command[capitalizeFirstLetter(input)]) {
      if (commands.command[capitalizeFirstLetter(input)].text)
        return setOutput([
          ...output,
          `<h3>Monarch@4Ever:~/$</h3><p>&nbsp;${input}</p>`,
          commands.command[input].text || "",
        ]);
      else if (commands.command[capitalizeFirstLetter(input)].modalComponent) {
        console.log(commands.command[capitalizeFirstLetter(input)]);
        dispatch(updateString(capitalizeFirstLetter(input)));

        return setOutput([
          ...output,
          `<h3>Monarch@4Ever:~/$</h3><p>&nbsp;${input}</p>`,
          input,
        ]);
      } else {
        return setOutput([""]);
      }
    }
    setOutput([
      ...output,
      `<h3>Monarch@4Ever:~/$</h3><p>&nbsp;${input}</p>`,
      "<p>Command not found!</p>",
    ]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default Enter key behavior (e.g., form submission)
      handleExecuteCommand();

      setInput("");
    }
  };
  const scrollableDiv = document.getElementById("terminalContent");

  useEffect(() => {
    if (scrollableDiv) scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
  }, [output, scrollableDiv]);

  useEffect(() => {
    var input = document.getElementById("input");
    input?.focus();
  }, [myString]);

  switch (myString) {
    case "About":
      return <About />;
    case "Skills":
      return <Skills />;
    case "Contact":
      return <ExplorerContact />;
    case "Projects":
      return <Projects />;
    case "Explorer":
      return <Explorer />;
    default:
      return (
        <div css={terminalContainer}>
          <div
            css={navbar}
            style={theme === "dark" ? { backgroundColor: "#2b2626" } : {}}
          >
            Terminal
          </div>
          <div
            id="terminalContent"
            css={terminalContent}
            style={theme === "dark" ? { backgroundColor: "antiquewhite" } : {}}
            onClick={() => document.getElementById("input")?.focus()}
          >
            {output.map((line: string, key: number) => {
              return (
                <div key={key} dangerouslySetInnerHTML={{ __html: line }} />
              );
            })}
            <div css={commandLine}>
              <h3>Monarch@4Ever:~/$ </h3>
              <input
                id="input"
                type="text"
                value={input}
                css={inputBox}
                onChange={handleInputChange}
                onKeyPress={handleInputKeyPress}
                autoFocus
              />
            </div>
          </div>
        </div>
      );
  }
};

export default Terminal;
