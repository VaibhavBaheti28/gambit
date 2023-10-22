import { useSelector } from "react-redux";
import Sidebar from "../sidebar";
import { aboutContainer, whoami } from "./styles";
import { RootState } from "@/store/reducers/reducers";
import { container } from "../styles";

export const About = () => {
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
      <div css={aboutContainer}>
        <div css={whoami}>
          <h1>Who am i?</h1>
          <p>
            Greetings, I&apos;m Vaibhav Baheti, a versatile web developer
            skilled in both front-end and back-end technologies. Apart from my
            passion for coding, I find joy in gaming, indulging in anime, and
            exploring captivating TV shows.
          </p>
        </div>
        <div>
          <div>
            <p>
              I am a graduate of National Institute of Technology, Surathkal
              2025 batch majoring in Electronic and Communication Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
