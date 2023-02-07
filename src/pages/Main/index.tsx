import { useCallback, useMemo, useState } from 'react';
import Board from '../../components/Board';
import Modal from '../../components/common/Modal';
import Configuration from '../../components/Configuration';
import Edit from '../../components/Edit';
import Setting from '../../components/Setting';
import * as S from './style';

const Main = () => {
  const [viewModal, setViewModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setViewModal(true);
  }, []);

  const EditProps = useMemo(() => {
    return {
      handleOpenModal,
    };
  }, [handleOpenModal]);

  return (
    <>
      <S.Wrapper>
        <Edit {...EditProps} />
        <Setting />
        <Board />
      </S.Wrapper>
      {viewModal && (
        <Modal close={() => setViewModal(false)}>
          <Configuration close={() => setViewModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default Main;
