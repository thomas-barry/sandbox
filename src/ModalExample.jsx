import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
// import { createPortal } from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 600px;
  height: 600px;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 4px;
`;

// const StyledCalendarOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   left: 0;
//   bottom: 0;
//   display: flex;
//   justify-content: center;
//   background-color: transparent;
// `;

// const StyledContent = styled.div`
//   position: absolute;
//   top: 40px;
//   border: 1px solid rgb(204, 204, 204);
//   background: rgb(255, 255, 255);
//   overflow: auto;
//   border-radius: 4px;
//   outline: none;
//   padding: 20px;
// `;

// const StyledFullScreenOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: -1;
// `;

// const CalendarOverlay = ({ onClick }, contentElement) => {
//   return (
//     <StyledCalendarOverlay onClick={onClick}>{contentElement}</StyledCalendarOverlay>
//   );
// };

// const ModalContent = (props, children) => {
//   const onClick = (e) => e.stopPropagation();
//   return <StyledContent onClick={onClick}>{children}</StyledContent>;
// };

// const FullScreenOverlay = ({ children }) => (
//   <StyledFullScreenOverlay>{children}</StyledFullScreenOverlay>
// );

const ModalExample = () => {
  const containerRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  // const closeModal = () => setIsModalOpen(false);

  const onRequestClose = () => setIsModalOpen(false);

  const getModalContainer = () => containerRef.current;

  return (
    <>
      <StyledContainer ref={containerRef}>
        <Button variant="primary" size="lg" onClick={openModal}>
          Open Modal
        </Button>
      </StyledContainer>
      {/* {isModalOpen && <FullScreenOverlay />} */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        parentSelector={getModalContainer}
        // overlayElement={CalendarOverlay}
        // contentElement={ModalContent}
      >
        <div>I am a modal</div>
      </Modal>
    </>
  );
};

export default ModalExample;
