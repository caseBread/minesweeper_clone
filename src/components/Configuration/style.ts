import styled from 'styled-components';

export const ConfigurationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > input {
    padding: 0.5rem;
    border: 1px solid white;
    border-radius: 0.25rem;

    :hover {
      border: 1px solid #111111;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 0.5rem;
`;
