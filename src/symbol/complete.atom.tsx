import styled, {keyframes} from 'styled-components';
import {Symbol} from './symbol.atom';

const complete = keyframes`
  0% {
    border-left: 2px solid transparent;
    height: 0;
  }

  50% {
    border-left: 2px solid green;
    border-bottom: 2px solid transparent;
    width: 0;
    height: .5em;
  }

  100% {
    border-left: 2px solid green;
    border-bottom: 2px solid green;
    width: 1em;
    height: .5em;
  }
`;

export const Complete = styled(Symbol)`
  animation: ${complete} .5s ease-out forwards;
  width: 1em;
  height: .5em;
  box-sizing: border-box;
  border: 2px solid transparent;
  position: relative;
  top: -.15em;
  transform: rotate(-45deg) scale(.8);
`;