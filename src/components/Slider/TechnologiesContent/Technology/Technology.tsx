import { StyledWrapper, StyledText } from "./Technology.styles"
import { ITechnologyProps } from "./type";

export const Technology = ({label, icon}: ITechnologyProps) => (
    <StyledWrapper>
        {icon}
        <StyledText>{label}</StyledText>
    </StyledWrapper>
);
