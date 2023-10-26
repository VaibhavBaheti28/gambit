import { useSelector } from "react-redux";
import { Contact } from "../contact";
import Sidebar from "../sidebar";
import { contactContainer } from "./styles";
import { RootState } from "@/store/reducers/reducers";
import { container } from "../styles";

export const ExplorerContact = () => {
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
      <div css={contactContainer}>
        <Contact />
      </div>
    </div>
  );
};

export default ExplorerContact;
