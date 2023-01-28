import { useState } from 'react';
import Modal from '../common/Modal';
import { Wrapper } from './style';
import { IEditView } from './type';

const EditView = ({ handleOpenModal }: IEditView) => {
  return (
    <Wrapper>
      <button type="button" onClick={handleOpenModal}>
        edit
      </button>
    </Wrapper>
  );
};
export default EditView;
