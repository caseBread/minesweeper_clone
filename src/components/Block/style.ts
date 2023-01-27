import styled from 'styled-components';

export const Button = styled.button`
  width: 1rem;
  height: 1rem;
  margin: 0;
  padding: 0;
`;

export const ClosedButton = styled(Button)`
  background-color: rgb(209, 213, 219);
  border-color: rgb(156, 163, 175);
  border-width: 2px;
`;
export const OpenedButton = styled(Button)<{ isRed: boolean }>`
  text-align: center;
  background-color: ${(props) => props.isRed && 'red'};
  font-weight: 700;
  color: white;
`;
