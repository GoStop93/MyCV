import styled, { keyframes } from 'styled-components';

export const StyledTechnologiesWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-left: 50%;
    padding-top: 10%;
    font-weight: 100;
    line-height: 30px;
    color: #FCED0A;
    text-shadow: 0 0 7px #45AFD3;
    z-index: 2;
`;

export const StyledTechnologiesTitle = styled.div`
    font-size: 50px;
    margin-bottom: 50px;
    font-family: cyberpunk;
`;

export const StyledTechnologiesText = styled.div`
    text-align: left;
    font-size: 25px;
    width: 700px;
    text-shadow: 0 0 5px #45AFD3;
    padding-left: 20%;
`;

export const StyledIcon = styled.img`
    width: 30px;
    transition: 0.5s;
    :hover {
        transform: rotate(360deg);
    }
`;
