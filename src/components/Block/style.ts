import styled from 'styled-components';

export const Button = styled.button`
  width: 1rem;
  height: 1rem;
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 700;
  font-size: 0.75rem;
  color: white;
`;

export const ClosedButton = styled(Button)`
  background-color: rgb(209, 213, 219);
  border-color: rgb(156, 163, 175);
  border-width: 2px;
  font-size: 0.5rem;
  color: black;
`;
export const OpenedButton = styled(Button)<{ isRed: boolean }>`
  background-color: ${(props) => props.isRed && 'red'};
  padding: 2px;
`;
