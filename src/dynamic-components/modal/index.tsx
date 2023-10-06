import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  closeIcon,
  modal,
  modalContent,
} from "@/dynamic-components/modal/styles";

const Modal = ({
  show,
  onClose,
  children,
}: {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const modalStyles = {
    display: show ? "block" : "none",
  };

  return (
    <div css={modal} style={modalStyles}>
      <div css={modalContent}>
        <CloseIcon css={closeIcon} onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
