import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import RedWolf from '../../../assets/icons/wolf_red.png';
import YellowWolf from '../../../assets/icons/wolf_yellow.png';
import { 
    StyledEducationWrapper, 
    StyledMainEducationTitle, 
    StyledMainEducationIcon, 
    StyledMainEducationText,
    StyledAdditionalEducationTitle,
    StyledAdditionalEducationIcon,
    StyledAdditionalEducationText
} from './EducationContent.styles';

export const EducationContent = () => {

    const duration = 4000;

    const [showMainEducation, setShowMainEducation] = useState(false);
    const [showAdditionalEducation, setAdditionalEducation] = useState(false);

    return (
        <StyledEducationWrapper>
            <StyledMainEducationTitle data-swiper-parallax='15%'>
                Main education
                <StyledMainEducationIcon 
                    src={RedWolf} 
                    alt="Red wolf" 
                    onMouseEnter={() => setShowMainEducation(true)}
                    onMouseLeave={() => setShowMainEducation(false)}/>
                <CSSTransition
                    in={showMainEducation}
                    timeout= {duration}
                    classNames='MainEducation'
                    mountOnEnter
                    unmountOnExit>
                    <StyledMainEducationText className="MainEducation">  
                        2011–2015 Bachelor’s degree. <br/>
                        The National Research University Moscow Power Engineering Institute <br/> <br/>

                        2015–2017 Master’s.<br/>
                        The National Research University Moscow Power Engineering Institute <br/>
                    </StyledMainEducationText>
                </CSSTransition>
            </StyledMainEducationTitle>
            <StyledAdditionalEducationTitle data-swiper-parallax='15%'>
                Additional Education
                <StyledAdditionalEducationIcon 
                    src={YellowWolf} 
                    alt="Yellow wolf"
                    onMouseEnter={() => setAdditionalEducation(true)}
                    onMouseLeave={() => setAdditionalEducation(false)}/>
                <CSSTransition
                    in={showAdditionalEducation}
                    timeout= {duration}
                    classNames='AdditionalEducation'
                    mountOnEnter
                    unmountOnExit>
                    <StyledAdditionalEducationText className='AdditionalEducation'>
                        2020 Management & marketing universal business school <br/>
                        MINI MBA PROFESSIONAL (MMP) <br/><br/>
                        02.2022 - 08.2022 Andersen Lab <br/>
                        Trainee JS/React
                    </StyledAdditionalEducationText>
                </CSSTransition>
            </StyledAdditionalEducationTitle>
        </StyledEducationWrapper>
    );
};
