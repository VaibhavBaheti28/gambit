import React, { ReactNode, useState } from "react";
import TaskBar from "@/modules/task-bar";
import { applicationList } from "@/modules/task-bar/application-list";
import { background, screen } from "../lock-screen/styles";
import { modalStyles, container } from "./styles";
import DesktopScreen from "./desktop-screen";
import Modal from "@/dynamic-components/modal";
import { useDispatch } from "react-redux";
import { updateString } from "@/store/mySlice";
const HomePage = () => {
  const [modalElement, setModalElement] = useState("def");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div css={background} />
      <section css={screen}>
        <div css={container}>
          <DesktopScreen />

          <Modal
            show={showModal}
            onClose={() => {
              setShowModal(false);
              dispatch(updateString("Explorer"));
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
