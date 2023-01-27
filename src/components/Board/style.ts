import styled from 'styled-components';

export const Wrapper = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}rem`};
`;
