import styled, {css} from "styled-components";
import { CardEnum } from "./type";

export const StyledContainerCard = styled.div`
  margin: 0;
  transform-origin: right top;
  perspective: 50rem;
  cursor: pointer;
`;

export const StyledCard = styled.div<{ stateCard: string }>`
  position: relative;
  width: 64vh;
  height: 32.5vh;
  border-radius: 6vh;
  transform-style: preserve-3d;
  transform-origin: right;
  transition: ease-in 0.4s;
  background: rgba(167, 29, 246, 0.35);
  box-shadow: 0 0 1.5rem black;

  ${({ stateCard }) =>
    stateCard === CardEnum.FLIPPED
    ? css`
        transform: rotateY(180deg) translateX(-100%);
        transform-origin: left;
        `
    : css`
        transform: rotateY(0);
        transform-origin: left;
  `};
`;

export const StyledCardFront = styled.div`
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transform: rotateY(180deg);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5.5vh;
`;

export const StyledCardBack = styled.div`
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5vh;
`;

export const StyledContactsTitle = styled.div`
  font-size: 6.5vh;
  font-family: cyberpunk;
  color: #FCED0A;
	text-shadow: 
		-0   -1px 1px #45AFD3,
		 0   -1px 1px #45AFD3,
		-0    1px 1px #45AFD3,
		 0    1px 1px #45AFD3,
		-1px -0   1px #45AFD3,
		 1px -0   1px #45AFD3,
		-1px  0   1px #45AFD3,
		 1px  0   1px #45AFD3,
		-1px -1px 1px #45AFD3,
		 1px -1px 1px #45AFD3,
		-1px  1px 1px #45AFD3,
		 1px  1px 1px #45AFD3,
		-1px -1px 1px #45AFD3,
		 1px -1px 1px #45AFD3,
		-1px  1px 1px #45AFD3,
		 1px  1px 1px #45AFD3;
`;

export const StyledContactsText = styled.div`
  font-size: 2.7vh;
  color: #FCED0A;
  text-shadow: 0 0 5px #45AFD3;
`;

export const StyledBackText = styled.div`
  text-align: center;
  font-size: 2.7vh;
  color: #FCED0A;
  line-height: 5.4vh;
  text-shadow: 0 0 5px #45AFD3;
`;

export const StyledPhoto = styled.img`
  width: 11.9vh;
`;
