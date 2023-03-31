import styled from "styled-components";

export const StyledSummaryWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-left: 50%;
    margin-top: 10%;
    font-family: witcher;
    font-weight: 100;
    line-height: 30px;
    color: #AEB4B2;
    text-shadow: 0 0 20px #A6564E;
    z-index: 2;
`;

export const StyledSummaryTitle = styled.div`
    font-size: 40px;
    margin-bottom: 50px;
`;

export const StyledSummaryText = styled.div`
    font-size: 20px;
    width: 700px;
    text-shadow: 0 0 5px #A6564E;
`;
