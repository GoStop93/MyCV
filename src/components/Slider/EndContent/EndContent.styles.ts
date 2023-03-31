import styled from 'styled-components';

export const StyledWrapperEnd = styled.div`
    font-family: witcher;
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    top: 52.5%;
    flex-direction: column;
    align-items: center;
    font-weight: 100;
    color: #9EACB4;
    z-index: 3;
`;

export const StyledTitleEnd = styled.div`
    width: 120vh;
    font-size: 7.7vh;
    filter: drop-shadow(2px 2px 2px black);
`;

export const StyledImage = styled.img`
    margin-top: 2vh;
    margin-left: 180vh;
    height: 33vh;
    transition: 0.7s;
    :hover {
        filter: drop-shadow(2px 0 15px #FCED0A);
    }
`;
