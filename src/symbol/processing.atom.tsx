import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Symbol} from './symbol.atom';

const spin = keyframes`
  from {
    transform: rotate(0deg) scale(.8);
  }

  to {
    transform: rotate(360deg) scale(.8);
  }
`;

const ChildSpin = styled.div`
  box-sizing: border-box;
  border: 1px solid currentColor;
  border-radius: 0%;
  width: 100%;
  height: 100%;
  background: transparent;
  flex: auto;
  display: flex;
  /* position: absolute; */
  /* animation: ${spin} linear infinite; */
  /* top: 0; */
  /* left: 0; */
`;

export const Processing = styled(Symbol).attrs({
  children: <></>
})`
  /* animation: ${spin} 1s steps(4, end) 0s linear infinite; */
  animation: ${spin} 1s steps(16, end) infinite;
  color: #fed640;
  border: 2px solid currentColor;
  border-left: 2px dotted currentColor;
  background: transparent;
  box-sizing: border-box;
  display: flex;
  border-radius: 50%;
  /* position: relative; */

  & > ${ChildSpin} {
    /* border-top-color: transparent; */
    transform-origin: center center;
    /* animation: ${spin} 1s linear infinite; */
  }

  /* & > ${ChildSpin} > ${ChildSpin} { */
    /* border-right-color: transparent; */
    /* transform-origin: center center; */
    /* opacity: .5; */
  /* } */
`;

// export const Processing = styled(Symbol)`
//   animation: ${spin} 1s linear infinite;
//   border: 1px solid #fed640;
//   box-sizing: border-box;
//   border-bottom-color: transparent;
//   border-left-color: transparent;
//   border-radius: 50%;
//   position: relative;

//   &:before,
//   &:after {
//     content: '';
//     box-sizing: border-box;
//     border: 1px solid #fed640;
//     border-radius: 50%;
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     animation: ${spin} linear infinite;
//     top: 0;
//     left: 0;
//   }

//   &:before {
//     /* transform: translate3d(50%, 50%, 0) rotate(45deg); */
//     animation-duration: 1.75s;
//     border-left-color: transparent;
//     border-top-color: transparent;
//     border-right-color: transparent;
//   }

//   &:after {
//     /* transform: translate3d(50%, 50%, 0) rotate(30deg); */
//     animation-duration: 3s;
//     border-top-color: transparent;
//     border-right-color: transparent;
//     border-bottom-color: transparent;
//   }
// `;