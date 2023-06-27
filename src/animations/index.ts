import { keyframes } from "styled-components";




export const enterAnim = keyframes`
0% {
  transform: scaleY(0);
  transform-origin: top;
}

100% {
  transform: scaleY(1);
  transform-origin: top;
}
`