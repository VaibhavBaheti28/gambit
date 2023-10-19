import Sidebar from "../sidebar";
import { container, skillsContainer } from "./styles";

export const Skills = () => {
  return (
    <div css={container}>
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
