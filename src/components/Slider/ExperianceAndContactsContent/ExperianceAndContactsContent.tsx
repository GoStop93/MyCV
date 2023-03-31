import { ContactsCard } from './ContactsCard/ContactsCard';
import { ProjectsCard } from './ProjectsCard/ProjectsCard';
import { StyledCardsContainer } from './ExperianceAndContactsContent.styles';

export const ExperianceAndContactsContent = () => {

    return(
        <StyledCardsContainer>
            <ContactsCard/>
            <ProjectsCard/>
        </StyledCardsContainer>
    );
};
