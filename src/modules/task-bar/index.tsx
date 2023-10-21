import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { applicationList } from "./application-list";
import { useRouter } from "next/router";
import { taskBarContainer, shortcutIcon } from "./styles";
import { useDispatch } from "react-redux";
import { updateString } from "@/store/mySlice";
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

  const openInNewTab = (url: string) => {
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      router.push(url);
    }
  };
  const dispatch = useDispatch();
  return (
    <section css={taskBarContainer}>
      {Object.values(applicationList.data).map((app) => {
        const { displayName, onClick, modalComponent, Icon } = app;
        const handleOnClick = () => {
          console.log({ displayName, modalElement, showModal });
          if (displayName === modalElement && showModal === true) {
            setShowModal(false);
            dispatch(updateString(""));
            return;
          } else if (!!modalComponent) {
            setShowModal(true);
            setModalElement(displayName);
            dispatch(updateString(onClick || ""));
          } else {
            openInNewTab(onClick || "");
          }
        };
        if (displayName === "def") return;
        else
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
