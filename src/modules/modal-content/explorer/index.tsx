import { about, blog, certificate, contact, projects, screen } from "./styles";

export const Explorer = () => {
  return (
    <div css={screen}>
      <div css={about}>About Me</div>
      <div css={projects}>Projects</div>
      <div css={certificate}>Certificates</div>
      <div css={blog}>Blog</div>
      <div css={contact}>Contacts</div>
    </div>
  );
};
