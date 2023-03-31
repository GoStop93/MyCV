import { useState } from "react"
import { 
    StyledContainerCard, 
    StyledCard, 
    StyledCardFront, 
    StyledCardBack,
    StyledFontText,
    StyledProjectsTitle,
    StyledBackText,
    StyledTeamAndPosition,
    StyledSubtitle,
    StyledPosition,
    StyledTeam,
    StyledBackTitle,
    StyledFontSubtitle
} from "./ProjectsCard.styles"
import { ProjectCardEnum} from "./type"

export const ProjectsCard = () => {
    const [stateCard, setStateCard] = useState<ProjectCardEnum>(ProjectCardEnum.FLIPPED);
    
    const onCardFlipHandler = () => {
        setStateCard(prev => (prev === ProjectCardEnum.FLIPPED ? ProjectCardEnum.UNFLIPPED : ProjectCardEnum.FLIPPED));
    };

    return (
        <StyledContainerCard onClick={onCardFlipHandler}>
            <StyledCard stateCard={stateCard}>
                <StyledCardFront>
                    <StyledProjectsTitle>
                        My Experience
                    </StyledProjectsTitle>
                    <StyledFontSubtitle>
                        Andersen Lab <br />
                        08.2022 - till now 
                    </StyledFontSubtitle>
                    <StyledFontText>
                        click to see information about projects 
                    </StyledFontText>
                </StyledCardFront>
                <StyledCardBack>
                    <StyledBackText>
                        <StyledBackTitle>
                            Banking application
                        </StyledBackTitle>
                        <StyledBackText>
                            Web application for remote banking customer service. The system allows clients 
                            to receive information about banking products (loans, deposits, cards), make 
                            payments, for example, pay for Internet communications, digital television services, 
                            and utilities. On the platform, users can replenish e-wallet accounts, make payments 
                            using arbitrary details, transfer money between deposits and bank cards, as well as 
                            exchange currency and issue new products.
                            <StyledTeamAndPosition>
                                <StyledTeam>
                                    <StyledSubtitle>Team</StyledSubtitle>
                                    14 specialists
                                </StyledTeam>
                                <StyledPosition>
                                    <StyledSubtitle>Position</StyledSubtitle>
                                    Front-end developer 
                                </StyledPosition>
                            </StyledTeamAndPosition>
                            <StyledSubtitle>Responsibilities</StyledSubtitle>
                            • Developing new features and components <br/>
                            • Identifying and addressing performance bottlenecks <br/>
                            • Utilizing good design practices, code reuse and writing efficient source code <br/>
                            • Writing unit tests <br/>
                            • Devising possible solutions to anticipated problems <br/>
                            • Working in an Agile environment <br/>
                            Technologies and tools <br/>
                            • JavaScript, TypeScript, React, Redux Toolkit, React Hook Form, Zod, i18next, Styled Components
                        </StyledBackText>
                    </StyledBackText>
                </StyledCardBack>
            </StyledCard>
        </StyledContainerCard>
    );
};
