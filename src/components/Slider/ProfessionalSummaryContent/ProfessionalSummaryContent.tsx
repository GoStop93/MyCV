import { StyledSummaryWrapper, StyledSummaryTitle, StyledSummaryText } from "./ProfessionalSummaryContent.styles";

export const ProfessionalSummaryContent = () => {

    const text = `Front-end developer with 1 year of software development experience. 
    The technology stack includes JavaScript as the main programming language and 
    the React library. Diligent, determined, goal-oriented and highly reliable individual 
    with exceptional creativity, problem solving and interpersonal skills.`;

    return (
        <StyledSummaryWrapper>
            <StyledSummaryTitle data-swiper-parallax='5%'>Professional summary</StyledSummaryTitle>
            <StyledSummaryText data-item={text} data-swiper-parallax='5%'>
                {text}
            </StyledSummaryText>
        </StyledSummaryWrapper>
    );
};
