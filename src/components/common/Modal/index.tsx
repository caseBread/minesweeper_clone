import { useRef } from 'react';
import styled from 'styled-components';
import { IModal } from './type';

export const Wrapper = styled.div``;
export const Outside = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const Main = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  background-color: white;

  padding: 1rem;
`;

const Modal = ({ children, close }: IModal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper ref={modalRef}>
      <Outside onClick={close} />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Modal;
