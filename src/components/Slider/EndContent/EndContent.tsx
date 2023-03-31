import { useState, useEffect } from "react";
import { StyledWrapperEnd, StyledTitleEnd, StyledImage } from "./EndContent.styles";
import Keanu from '../../../assets/images/breathtaking.png';

export const EndContent = () => {
  const path = require('../../../assets/audio/breathtaking.mp3');
  const [audio] = useState<HTMLAudioElement>(new Audio(path));
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleHover = () => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <StyledWrapperEnd>
      {showText && (
        <StyledTitleEnd>
          Hope I can be part of your breathtaking team
        </StyledTitleEnd>
      )}
      <StyledImage src={Keanu} alt="Keanu Reeves" onMouseOver={handleHover} />
    </StyledWrapperEnd>
  );
};
