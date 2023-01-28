import { useMemo } from 'react';
import { IEdit } from './type';
import EditView from './view';

const Edit = ({ handleOpenModal }: IEdit) => {
  const EditViewProps = useMemo(() => {
    return {
      handleOpenModal,
    };
  }, [handleOpenModal]);

  return <EditView {...EditViewProps} />;
};
export default Edit;
