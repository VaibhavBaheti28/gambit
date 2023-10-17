import { Contact } from "../contact";
import Sidebar from "../sidebar";
import { contactContainer, container } from "./styles";

export const ExplorerContact = () => {
  return (
    <div css={container}>
      <Sidebar />
      <div css={contactContainer}>
        <Contact />
      </div>
    </div>
  );
};

export default ExplorerContact;
