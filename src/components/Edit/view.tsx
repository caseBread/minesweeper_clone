import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.25rem;
  font-size: 0.75rem;
`;

const EditView = () => {
  return (
    <Wrapper>
      <button>edit</button>
    </Wrapper>
  );
};
export default EditView;
