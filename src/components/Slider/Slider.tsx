import { Scrollbar, Parallax, Mousewheel } from 'swiper';
import { useState } from 'react';
import FristLayerBack from '../../assets/images/screen-1/layer-back.jpg';
import FristLayerFront from '../../assets/images/screen-1/layer-front.png';
import FristLayerMiddle from '../../assets/images/screen-1/layer-middle.png';
import SummaryLayerBack from '../../assets/images/screen-2/layer-back.jpg';
import SummaryLayerFront from '../../assets/images/screen-2/layer-front.png';
import SummaryLayerMiddle from '../../assets/images/screen-2/layer-middle.png';
import SummaryLayerCiri from '../../assets/images/screen-2/layer-ciri.png';
import EducationLayerBack from '../../assets/images/screen-3/layer-back.jpg';
import EducationLayerMiddle from '../../assets/images/screen-3/layer-middle.png';
import EducationLayerFront from '../../assets/images/screen-3/layer-front.png';
import ExperianceLayerFront from '../../assets/images/screen-4/layer-front.png';
import ExperianceLayerMiddle from '../../assets/images/screen-4/layer-middle.png';
import ExperianceLayerBack from '../../assets/images/screen-4/layer-back.jpg';
import TechnologiesLayerFront from '../../assets/images/screen-5/layer-front.png';
import TechnologiesLayerMiddle from '../../assets/images/screen-5/layer-middle.png';
import TechnologiesLayerBack from '../../assets/images/screen-5/layer-back.jpg';
import EndLayerFront from '../../assets/images/screen-6/layer-fornt.png';
import EndLayerBack from '../../assets/images/screen-6/layer-back.jpg';
import { MyParticles } from "../Particles/Particles";
import "swiper/css";
import { 
    StyledWrapper, 
    StyledLayer, 
    StyledSwiper, 
    StyledSwiperSlide, 
    StyledImage
} from "./Slider.styles";
import { FirstSlideContent } from "./FirstSlideContent/FirstSlideContent";
import { ProfessionalSummaryContent } from "./ProfessionalSummaryContent/ProfessionalSummaryContent";
import { EducationContent } from './EducationContent/EducationContent';
import { TechnologiesContent } from './TechnologiesContent/TechnologiesContent';
import { ExperianceAndContactsContent } from './ExperianceAndContactsContent/ExperianceAndContactsContent';
import { EndContent } from './EndContent/EndContent';
import Photo from '../../assets/images/my_photo2.png';


export const  Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    let iconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    
    const handleSlideChange = (swiper: any) => {
      setCurrentSlide(swiper.activeIndex);

      switch(swiper.activeIndex) {
        case 0:
          document.title = 'Litvinov Mikhail, Web Developer';
          iconLink.href = '/favicons/cv.png';
          break;
        case 1:
          document.title = 'Professional Summary';
          iconLink.href = '/favicons/summary.png';
          break;
        case 2:
          document.title = 'Education';
          iconLink.href = '/favicons/education.png';
          break;
        case 3:
          document.title = 'Technologies and Tools';
          iconLink.href = '/favicons/technology.png';
          break;
        case 4:
          document.title = 'Experiance and Contacts';
          iconLink.href = '/favicons/experiance.png';
          break;
        case 5:
          document.title = 'Desire to Join an Incredible Team: Litvinov Mikhail - Web Developer';
          iconLink.href = '/favicons/team.png';
          break;

        default:
          document.title = 'Litvinov Mikhail, Web Developer';
          iconLink.href = '/favicons/summary.png';
      }
    }
    return (
        <StyledWrapper>
            <StyledSwiper 
                modules={[ Scrollbar, Parallax, Mousewheel]}
                mousewheel={true} 
                speed={2400} 
                spaceBetween={18} 
                parallax={true}
                onSlideChange={handleSlideChange}
                >
                <StyledSwiperSlide> 
                    <StyledLayer data-swiper-parallax='35%' style={{backgroundImage: `url(${FristLayerBack})`}}/>
                    <StyledLayer data-swiper-parallax='25%' style={{backgroundImage: `url(${FristLayerMiddle})`}}/>
                    <MyParticles id="1" color='#B7AE82' data-swiper-parallax='18%'/>
                    <StyledLayer data-swiper-parallax='14%' style={{backgroundImage: `url(${FristLayerFront})`}}/>
                    <FirstSlideContent data-swiper-parallax='5%'/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <StyledLayer data-swiper-parallax='48%' style={{backgroundImage: `url(${SummaryLayerBack})`}}/>
                    <StyledLayer data-swiper-parallax='35%' style={{backgroundImage: `url(${SummaryLayerMiddle})`}}/>
                    <StyledLayer data-swiper-parallax='29%' style={{backgroundImage: `url(${SummaryLayerCiri} )`}}/>
                    <MyParticles id="2" color='#BB6C60' data-swiper-parallax='25%'/>
                    <StyledLayer data-swiper-parallax='16%' style={{backgroundImage: `url(${SummaryLayerFront})`}}/>
                    <ProfessionalSummaryContent/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <StyledLayer data-swiper-parallax='48%' style={{backgroundImage: `url(${EducationLayerBack})`}}/>
                    <StyledLayer data-swiper-parallax='16%' style={{backgroundImage: `url(${EducationLayerMiddle})`}}/>
                    <StyledLayer data-swiper-parallax='4%' style={{backgroundImage: `url(${EducationLayerFront})`}}/>
                    <EducationContent/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <StyledLayer data-swiper-parallax='40%' style={{backgroundImage: `url(${TechnologiesLayerBack})`}}/>
                    <StyledLayer data-swiper-parallax='5%' style={{backgroundImage: `url(${TechnologiesLayerMiddle})`}}/>
                    <StyledLayer data-swiper-parallax='15%' style={{backgroundImage: `url(${TechnologiesLayerFront})`}}/>
                    <TechnologiesContent/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <StyledLayer data-swiper-parallax='40%' style={{backgroundImage: `url(${ExperianceLayerBack})`}}/>
                    <StyledLayer data-swiper-parallax='25%' style={{backgroundImage: `url(${ExperianceLayerMiddle})`}}/>
                    <StyledLayer data-swiper-parallax='5%' style={{backgroundImage: `url(${ExperianceLayerFront})`}}/>
                    <ExperianceAndContactsContent/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <StyledLayer data-swiper-parallax='48%' style={{backgroundImage: `url(${EndLayerBack})`, zIndex: '1'}}/>
                    <StyledLayer data-swiper-parallax='16%' style={{backgroundImage: `url(${EndLayerFront})`, zIndex: '3'}}/>
                    <StyledImage src={Photo}/>
                    <EndContent data-swiper-parallax='8%'/>
                </StyledSwiperSlide>
            </StyledSwiper>
        </StyledWrapper>
    );
};
