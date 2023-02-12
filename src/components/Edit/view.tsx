import React from 'react';
import * as S from './style';
import { type IEditView } from './type';

const EditView: React.FC<IEditView> = ({ handleOpenModal }: IEditView) => {
  return (
    <S.Wrapper>
      <button type="button" onClick={handleOpenModal}>
        edit
      </button>
    </S.Wrapper>
  );
};
export default EditView;
