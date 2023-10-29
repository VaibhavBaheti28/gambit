import { resumePage } from "./styles";

export const Resume = () => {
  return (
    <div>
      <embed src="static/Resume.pdf" css={resumePage} />
    </div>
  );
};

export default Resume;
