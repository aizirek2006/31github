import { createPortal } from "react-dom";
import styled from "styled-components";
const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
const BackDrop = ({ onClose }) => {
  return <StyledBackDrop onClick={onClose}></StyledBackDrop>;
};

const ModalContent = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

const StyledModalContent = styled.div`
  background-color: white;
  padding: 1rem;
  border: 14px;
  z-index: 30;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  width: 40rem;
  position: fixed;
  top: 20vh;
  left: calc(50% - 20rem);
  animation: slide-down 300ms ease-out forwards;
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <BackDrop onClose={onClose} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <ModalContent>{children}</ModalContent>,
        document.getElementById("modal-content")
      )}
    </>
  );
};
export default Modal;
