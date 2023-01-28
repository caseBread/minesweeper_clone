import { useRef } from 'react';
import { Main, Outside, Wrapper } from './style';
import { IModal } from './type';

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
