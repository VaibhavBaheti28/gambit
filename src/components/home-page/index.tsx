import React, { ReactNode, useState } from "react";
import TaskBar from "@/modules/task-bar";
import { applicationList } from "@/modules/task-bar/application-list";
import { darkBackground, lightBackground, screen } from "../lock-screen/styles";
import { container } from "./styles";
import DesktopScreen from "./desktop-screen";
import Modal from "@/dynamic-components/modal";
import { useDispatch, useSelector } from "react-redux";
import { updateString } from "@/store/mySlice";
import { RootState } from "@/store/reducers/reducers";
const HomePage = () => {
  const [modalElement, setModalElement] = useState("def");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.myReducer.theme);
  const homeScreen = theme === "light" ? lightBackground : darkBackground;
  return (
    <>
      <div css={homeScreen} />
      <section css={screen}>
        <div css={container}>
          <DesktopScreen />

          <Modal
            show={showModal}
            onClose={() => {
              setShowModal(false);
              dispatch(updateString(""));
            }}
            aria-labelledby="modal-application"
            aria-describedby="modal-modal-description"
          >
            {applicationList.data[modalElement].modalComponent}
          </Modal>
        </div>
        <TaskBar
          setModalElement={setModalElement}
          setShowModal={setShowModal}
          modalElement={modalElement}
          showModal={showModal}
        />
      </section>
    </>
  );
};

export default HomePage;
