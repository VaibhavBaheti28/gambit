import { useSelector } from "react-redux";
import Sidebar from "../sidebar";
import { container, skillsContainer } from "./styles";
import { RootState } from "@/store/reducers/reducers";

export const Skills = () => {
  const theme = useSelector((state: RootState) => state.myReducer.theme);
  return (
    <div
      css={container}
      style={
        theme === "light"
          ? { borderTop: "2vw solid black" }
          : { borderTop: "2vw solid #455361", borderLeft: "2px solid #455361" }
      }
    >
      <Sidebar />
      <div css={skillsContainer}>
        <ul>
          <li>Frontend</li>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Vanilla Javascript</li>
          </ul>
          <li>Backend</li>
          <ul>
            <li>Node.js</li>
          </ul>
          <li>Datababase Management</li>
          <ul>
            <li>MySql</li>
            <li>MongoDB</li>
          </ul>
          <li>Data Structures and Algorithms</li>
          <li>Gaming</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
