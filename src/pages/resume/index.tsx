import { display } from "./styles";

export const Resume = () => {
  return (
    <div>
      <embed src="/Resume.pdf" css={display} />
    </div>
  );
};

export default Resume;
