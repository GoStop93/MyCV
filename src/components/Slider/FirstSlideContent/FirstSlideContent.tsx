import { StyledWrapperFirst, StyledTitle, StyledSubTitle } from "./FirstSlideContent.styles";

export const FirstSlideContent = () => {

    return (
        <StyledWrapperFirst data-swiper-parallax='5%'>
            <StyledTitle>Welcome to Interactive Resume of Mikhail  Litvinov</StyledTitle>
            <StyledSubTitle>scroll down mouse to see more information</StyledSubTitle>
        </StyledWrapperFirst>
    );
};
