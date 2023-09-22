import React, { useState } from "react";
import {
  closeIcon,
  modal,
  modalContent,
} from "@/dynamic-compoents/modal/styles";

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
        <span css={closeIcon} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
