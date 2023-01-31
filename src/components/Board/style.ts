import styled from 'styled-components';

export const Wrapper = styled.div<{ width: number; height: number }>`
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
`;
