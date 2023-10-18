import { useEffect, useState } from "react";
import {
  container,
  cssTyping,
  inputBox,
  navbar,
  terminalContent,
} from "./styles";
import { commands } from "./constants";
import { useRouter } from "next/router";

export const Terminal = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");

  const [output, setOutput] = useState<string[]>([]);

  const handleExecuteCommand = () => {
    if (commands[input]?.slug) router.push(commands[input]?.slug);
    if (commands[input]?.text)
      return setOutput([
        ...output,
        `Monarch4Ever: ${input}`,
        commands[input].text,
      ]);

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
};

export default Terminal;
