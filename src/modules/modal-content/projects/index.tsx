import { useSelector } from "react-redux";
import Sidebar from "../sidebar";
import { projectContainer } from "./styles";
import { url } from "inspector";
import { RootState } from "@/store/reducers/reducers";
import { container } from "../styles";

interface Project {
  id: number;
  name: string;
  description: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "PokeVerse",
    description: `A React application with a focus on deployment and hosting the website on Git Pages. a React application hosted on Git Pages to showcase a collection of Pokémon cards along with detailed
      information about each Pokémon. Demonstrated proficiency in React, API integration, and front-end development
      in a real-world project `,
    url: "https://vaibhavbaheti28.github.io/Pokemon/",
  },
  {
    id: 2,
    name: "Exam DBMS",
    description: `Developed a Python application with a graphical user interface (GUI) using the Tkinter library and integrated
      it with MySQL using the Python Connector. Created an intuitive and user-friendly interface for efficient data
      entry, retrieval, and manipulation. Utilized Tkinter’s widget toolkit to design interactive elements such as buttons,
      menus, and forms. Employed the MySQL Python Connector to establish a connection between the application
      and the MySQL database, enabling seamless data integration.`,
  },
  // Add more projects as needed
];

export const Projects = () => {
  const theme = useSelector((state: RootState) => state.myReducer.theme);
  return (
    <div
      css={container}
      style={
        theme === "light"
          ? { borderTop: "2rem solid black" }
          : { borderTop: "2rem solid #455361" }
      }
    >
      <Sidebar />
      <div css={projectContainer}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              flex: "1",
              paddingRight: "10px",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  fontSize: "30px",
                }}
              >
                <a href={project.url} style={{ color: "Green" }}>
                  {project.name}
                </a>
                <div>{project.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
