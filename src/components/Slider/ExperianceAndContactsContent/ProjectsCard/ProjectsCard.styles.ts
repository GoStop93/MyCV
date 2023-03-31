import styled, {css} from "styled-components";
import { ProjectCardEnum } from "./type";

export const StyledContainerCard = styled.div`
  transform-origin: right top;
  perspective: 50rem;
  cursor: pointer;
`;


export const StyledCard = styled.div<{ stateCard: string }>`
  position: relative;
  width: 75vh;
  height: 65vh;
  border-radius: 6vh;
  transform-style: preserve-3d;
  transform-origin: right;
  transition: ease-in 0.4s;
  background: rgba(3, 146, 206, 0.35);
  box-shadow: 0 0 1.5rem black;


  ${({ stateCard }) =>
    stateCard === ProjectCardEnum.FLIPPED
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
  gap: 11vh;
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
`;

export const StyledProjectsTitle = styled.div`
  font-size: 7vh;
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

export const StyledBackTitle = styled.div`
  font-size: 5.3vh;
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


export const StyledFontText = styled.div`
  font-size: 2.2vh;
  width: 700px;
  color: #FCED0A;
  text-shadow: 0 0 5px #45AFD3;
`;

export const StyledFontSubtitle = styled.div`
  font-size: 3.3vh;
  width: 700px;
  color: #FCED0A;
  text-shadow: 0 0 5px #45AFD3;
`;

export const StyledBackText = styled.div`
  text-align: center;
  font-size: 1.84vh;
  color: #FCED0A;
  text-align: start;
  text-shadow: 0 0 5px #45AFD3;
  margin: 2.8vh 2.7vh;
`;

export const StyledTeamAndPosition = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1.6vh 0 1.6vh 0;
`;

export const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPosition = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSubtitle = styled.div`
  font-size: 3.3vh;
  font-weight: 400;
`;
