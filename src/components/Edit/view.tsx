import { useState } from 'react';
import Modal from '../common/Modal';
import { Wrapper } from './style';

const EditView = () => {
  const [viewModal, setViewModal] = useState(false);
  return (
    <Wrapper>
      <button type="button" onClick={() => setViewModal(true)}>
        edit
      </button>
      {viewModal && <Modal close={() => setViewModal(false)}>blah</Modal>}
    </Wrapper>
  );
};
export default EditView;
