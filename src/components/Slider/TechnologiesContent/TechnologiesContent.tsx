 import { 
    StyledTechnologiesWrapper, 
    StyledTechnologiesTitle, 
    StyledTechnologiesText, 
    StyledIcon,  
} from "./TechnologiesContent.styles";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Technology } from "./Technology/Technology";
import html from '../../../assets/icons/tools/html.png';
import js from '../../../assets/icons/tools/js.png';
import git from '../../../assets/icons/tools/git.png';
import jest from '../../../assets/icons/tools/jest.png';
import jira from '../../../assets/icons/tools/jira.png';
import react from '../../../assets/icons/tools/react.png';
import ts from '../../../assets/icons/tools/ts.png';
import webpack from '../../../assets/icons/tools/webpack.png';

export const TechnologiesContent = () => {

    const duration = 5000;
    const [showContent, setShowContent] = useState(false);
  
    const labels = [
        'JavaScript' ,
        'TypeScript' ,
        'React, React Hook Form, Redux, Redux Toolkit, Zod, i18next' ,
        'HTML, CSS, LESS, SASS', 
        'Webpack',
        'Jest', 
        'Git', 
        'Jira' 
    ];

    const icons = [
        <StyledIcon src={js} alt="js" />,
        <StyledIcon src={ts} alt="ts" />,
        <StyledIcon src={react} alt="react" />,
        <StyledIcon src={html} alt="html" />,
        <StyledIcon src={webpack} alt="webpack" />,
        <StyledIcon src={jest} alt="jest" />,
        <StyledIcon src={git} alt="git" />,
        <StyledIcon src={jira} alt="jira" />
    ]

    return (
        <StyledTechnologiesWrapper  
            onMouseEnter={() => setShowContent(true)} 
            onMouseLeave={() => setShowContent(false)}>
            <CSSTransition    
                appear={true}                
                in={showContent}
                timeout= {duration}
                classNames='TechnologiesContent'
                mountOnEnter
                unmountOnExit>
                <div className="TechnologiesContent">
                    <StyledTechnologiesTitle>Technologies and tools</StyledTechnologiesTitle>
                    <StyledTechnologiesText>
                        {labels.map((technology, index) => (
                            <Technology
                            key={technology}
                            label={technology}
                            icon={icons[index]}/>
                        ))} 
                    </StyledTechnologiesText>
                </div>
            </CSSTransition>
        </StyledTechnologiesWrapper>
    );
};
