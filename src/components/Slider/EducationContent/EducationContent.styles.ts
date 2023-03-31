import styled from "styled-components";

export const StyledEducationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    align-items: flex-start;
    margin: 15% 3% 0 3%;
    font-family: witcher;
    font-weight: 100;
    line-height: 30px;
    color: #AEB4B2;
    z-index: 2;
    will-change: transform;
`;

export const StyledMainEducationTitle = styled.div`
    font-size: 40px;
    display: flex;
    width: 20%;
    align-items: center;
    flex-direction: column;
    text-shadow: 0 0 20px #DA3730;
`;

export const StyledMainEducationIcon = styled.img`
    width: 200px;
    margin: 20px 0 40px 0;
    border-radius: 50%;
    transition: all 1s;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`;

export const StyledMainEducationText = styled.div`
    font-size: 20px;
    text-shadow: 0 0 5px #DA3730;
    width: 400px;
    transition: all 1s;
    will-change: transform;
`;

export const StyledAdditionalEducationTitle = styled.div`
    font-size: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-shadow: 0 0 20px #F2FD84;
`;

export const StyledAdditionalEducationIcon = styled.img`
    width: 200px;
    margin: 20px 0 40px 0;
    border-radius: 50%;
    transition: all 1s;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`;

export const StyledAdditionalEducationText = styled.div`
    font-size: 20px;
    text-shadow: 0 0 2px #F2FD84;
    width: 400px;
    transition: all 1s;
    will-change: transform;
`;
