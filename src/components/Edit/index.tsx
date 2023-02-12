import React, { useMemo } from 'react';
import { type IEdit } from './type';
import EditView from './view';

const Edit: React.FC<IEdit> = ({ handleOpenModal }: IEdit) => {
  const EditViewProps = useMemo(() => {
    return {
      handleOpenModal,
    };
  }, [handleOpenModal]);

  return <EditView {...EditViewProps} />;
};
export default Edit;
