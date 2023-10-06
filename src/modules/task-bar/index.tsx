import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { applicationList } from "./application-list";
import { useRouter } from "next/router";
import { taskBarContainer, shortcutIcon } from "./styles";
const TaskBar = ({
  setShowModal,
  setModalElement,
  modalElement,
  showModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setModalElement: Dispatch<SetStateAction<string>>;
  modalElement: string;
  showModal: boolean;
}) => {
  const router = useRouter();
  return (
    <section css={taskBarContainer}>
      {Object.values(applicationList.data).map((app) => {
        const { displayName, onClick, modalComponent, Icon } = app;
        const handleOnClick = () => {
          console.log({ displayName, modalElement, showModal });
          if (displayName === modalElement && showModal === true) {
            setShowModal(false);
            return;
          } else if (!!modalComponent) {
            setShowModal(true);
            setModalElement(displayName);
          } else {
            router.push(onClick || "");
          }
        };
        return (
          <div key={displayName} onClick={handleOnClick} css={shortcutIcon}>
            {Icon}
          </div>
        );
      })}
    </section>
  );
};

export default TaskBar;
