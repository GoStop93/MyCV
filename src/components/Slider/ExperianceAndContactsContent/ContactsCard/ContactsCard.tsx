import { useState } from "react"
import { 
    StyledContainerCard, 
    StyledCard, 
    StyledCardFront, 
    StyledCardBack,
    StyledContactsText,
    StyledContactsTitle,
    StyledBackText,
    StyledPhoto 
} from "./ContactsCard.styles"
import Photo from '../../../../assets/images/my_photo.png';
import { CardEnum} from "./type"

export const ContactsCard = () => {
    const [stateCard, setStateCard] = useState<CardEnum>(CardEnum.FLIPPED);
    
    const onCardFlipHandler = () => {
        setStateCard(prev => (prev === CardEnum.FLIPPED ? CardEnum.UNFLIPPED : CardEnum.FLIPPED));
    };

    return (
        <StyledContainerCard onClick={onCardFlipHandler}>
            <StyledCard stateCard={stateCard}>
                <StyledCardFront>
                    <StyledContactsTitle>
                        My Contatcs
                    </StyledContactsTitle>
                    <StyledContactsText>
                        click to see more
                    </StyledContactsText>
                </StyledCardFront>
                <StyledCardBack>
                    <StyledBackText>
                        Name: Mikhail Litvinov <br/>
                        Phone: +48 508 832 664 <br/>
                        Email: Litvinov.job@gmail.com <br/>
                        Location: Poland, Krakow <br/>
                    </StyledBackText>
                    <StyledPhoto src={Photo} alt="My photo"/>
                </StyledCardBack>
            </StyledCard>
        </StyledContainerCard>
    );
};
