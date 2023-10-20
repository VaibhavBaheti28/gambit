import { useEffect, useState } from "react";
import {
  container,
  cssTyping,
  inputBox,
  navbar,
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

export const Terminal = () => {
  const [input, setInput] = useState<string>("");

  const [output, setOutput] = useState<string[]>([]);
  const dispatch = useDispatch();
  const myString = useSelector((state: RootState) => state.myReducer.myString);
  const handleExecuteCommand = () => {
    if (commands.command[input]) {
      if (commands.command[input].text)
        return setOutput([
          ...output,
          `Monarch4Ever: ${input}`,
          commands.command[input].text || "",
        ]);
      if (commands.command[input].modalComponent) {
        console.log(commands.command[input]);
        dispatch(updateString(input));

        return setOutput([...output, `Monarch4Ever: ${input}`, input]);
      }
    }
    setOutput([...output, `Monarch4Ever: ${input}`, "Command not Found"]);
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
  switch (myString) {
    case "About":
      return <About />;
    case "Skills":
      return <Skills />;
    case "Contact":
      return <ExplorerContact />;
    case "Projects":
      return <Projects />;
    default:
      return (
        <div>
          <div css={navbar}>Terminal</div>
          <div id="terminalContent" css={container}>
            {output.map((line: string, key: number) => {
              return <p key={key}>{line}</p>;
            })}
            <div css={terminalContent}>
              <h3>Monarch4Ever: </h3>
              <input
                type="text"
                value={input}
                css={inputBox}
                onChange={handleInputChange}
                onKeyPress={handleInputKeyPress}
              />
            </div>
          </div>
        </div>
      );
  }
};

export default Terminal;
