import styled from "styled-components";

export const StyledWrapperFirst = styled.div`
    font-family: witcher;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 100;
    color: #A6ACAC;
    text-shadow: 0 0 5px #996B48;
    z-index: 1;
`;

export const StyledTitle = styled.div`
    width: 780px;
    font-size: 45px;
    margin-top: 20px;
    text-shadow: 
        -0 -1px 0 #996B48,
        0 -1px 0 #996B48,
        -0 1px 0 #996B48,
        0 1px 0 #996B48,
        -1px -0 0 #996B48,
        1px -0 0 #996B48,
        -1px  0 0 #996B48,
        1px  0 0 #996B48,
        -1px -1px 0 #996B48,
        1px -1px 0 #996B48,
        -1px  1px 0 #996B48,
        1px  1px 0 #996B48,
        -1px -1px 0 #996B48,
        1px -1px 0 #996B48,
        -1px  1px 0 #996B48,
        1px  1px 0 #996B48;
`;

export const StyledSubTitle = styled.div`
    width: 800px;
    font-size: 20px;
    margin-bottom: 20px;
    animation: beat 3s ease infinite;
`;
