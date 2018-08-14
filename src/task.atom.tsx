import styled from 'styled-components';

export const Task = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: .5em;
  }
`;