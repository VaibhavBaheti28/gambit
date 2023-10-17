import { Contact } from "../contact";
import Sidebar from "../sidebar";
import { container } from "./styles";

export const ExplorerContact = () => {
  return (
    <div css={container}>
      <Sidebar />
      <Contact />
    </div>
  );
};

export default ExplorerContact;
