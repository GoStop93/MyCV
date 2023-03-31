import styled from "styled-components";
import { Swiper, SwiperSlide }from "swiper/react";

export const StyledWrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-color: #000;
    background: #fff;
`;

export const StyledLayer = styled.div`
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
    ::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
        box-shadow: inset 0 0 250px rgb(0 0 0 / .3);
    }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    will-change: transform;
    transform-style: preserve-3d;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: absolute;
  will-change: transform;
  transform-style: preserve-3d;
`;

export const StyledImage = styled.img`
    height: 80vh;
    z-index: 2;
    margin-left: 112vh;
    margin-bottom: 8vh;
`;
