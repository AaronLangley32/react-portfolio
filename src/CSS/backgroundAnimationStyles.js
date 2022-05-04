import styled, { keyframes } from 'styled-components'

const animateY = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 1;
    }

    75% {
        opacity: 0.7;
    }

    100% {
        transform: translateY(-1500px);
        opacity: 0;
    }
`
const animateX = keyframes`
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(50px);
    }
`

export const PageBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: orange; */
    margin-left: 7rem;
    position: absolute;
    height: auto;
    width: auto;
    bottom:0;
    top:0;
    left:0;
    right:0;
    z-index: -1;
    @media screen and (max-width: 990px) {
        margin-left: 6.5rem;
    }
    @media screen and (max-width: 672px) {
        margin: 0rem 0rem 9rem 0rem;
    }
`
export const IconContainer = styled.div`
    height: 3.4rem;
    width: 3.4rem;
    font-size: 3rem;
    opacity: 0.5;
    color: coral;
`
export const AnimatedContainer1 = styled.div`
    z-index: 1;
    pointer-events: none;
    height: 3.4rem;
    width: 3.4rem;
    position: absolute;
    bottom: 0;
    transform: translate3d( 0px, 100%, 0);
    animation: ${animateY} 35s ease-out infinite;
    animation-delay: 15s;
    ${IconContainer}{
        animation: ${animateX} 2s ease-in-out infinite alternate;
    }
`
export const AnimatedContainer2 = styled.div`
    z-index: 1;
    pointer-events: none;
    height: 3.4rem;
    width: 3.4rem;
    position: absolute;
    bottom: 0;
    transform: translate3d( 0px, 100%, 0);
    animation: ${animateY} 30s ease-out infinite;
    left: 5%;
    animation-delay: 3s;
    ${IconContainer}{
        animation: ${animateX} 4s ease-in-out infinite alternate;
    }
`
export const AnimatedContainer3 = styled.div`
    z-index: 1;
    pointer-events: none;
    height: 3.4rem;
    width: 3.4rem;
    position: absolute;
    bottom: 0;
    transform: translate3d( 0px, 100%, 0);
    animation: ${animateY} 38s ease-out infinite;
    animation-delay: 10s;
    left: 10%;
    ${IconContainer}{
        animation: ${animateX} 2s ease-in-out infinite alternate;
    }
`
export const AnimatedContainer4 = styled.div`
    z-index: 1;
    pointer-events: none;
    height: 3.4rem;
    width: 3.4rem;
    position: absolute;
    bottom: 0;
    transform: translate3d( 0px, 100%, 0);
    animation: ${animateY} 32s linear infinite;
    left: 20%;
    ${IconContainer}{
        animation: ${animateX} 4s ease-in-out infinite alternate;
    }
`
export const AnimatedContainer5 = styled.div`
    z-index: 1;
    pointer-events: none;
    height: 3.4rem;
    width: 3.4rem;
    position: absolute;
    bottom: 0;
    transform: translate3d( 0px, 100%, 0);
    animation: ${animateY} 39s linear infinite;
    left: 30%;
    ${IconContainer}{
        animation: ${animateX} 4s ease-in-out infinite alternate;
    }
`
export const AnimatedContainer6 = styled.div`
    z-index: 1;
    pointer-events: none;
    height: 3.4rem;
    width: 3.4rem;
    position: absolute;
    bottom: 0;
    transform: translate3d( 0px, 100%, 0);
    animation: ${animateY} 31s linear infinite;
    animation-delay: 20s;
    left: 50%;
    ${IconContainer}{
        animation: ${animateX} 2s ease-in-out infinite alternate;
    }
`
export const AnimatedContainer7 = styled.div`
    z-index: 1;
    pointer-events: none;
    height: 3.4rem;
    width: 3.4rem;
    position: absolute;
    bottom: 0;
    transform: translate3d( 0px, 100%, 0);
    animation: ${animateY} 30s linear infinite;
    left: 65%;
    ${IconContainer}{
        animation: ${animateX} 2s ease-in-out infinite alternate;
    }
`
export const AnimatedContainer8 = styled.div`
    z-index: 1;
    pointer-events: none;
    height: 3.4rem;
    width: 3.4rem;
    position: absolute;
    bottom: 0;
    transform: translate3d( 0px, 100%, 0);
    animation: ${animateY} 32s linear infinite;
    left: 80%;
    ${IconContainer}{
        animation: ${animateX} 3s ease-in-out infinite alternate;
    }
`
export const AnimatedContainer9 = styled.div`
    z-index: 1;
    pointer-events: none;
    height: 3.4rem;
    width: 3.4rem;
    position: absolute;
    bottom: 0;
    transform: translate3d( 0px, 100%, 0);
    animation: ${animateY} 39s linear infinite;
    animation-delay: 7s;
    left: 90%;
    ${IconContainer}{
        animation: ${animateX} 4s ease-in-out infinite alternate;
    }
`
export const AnimatedContainer10 = styled.div`
    z-index: 1;
    pointer-events: none;
    height: 3.4rem;
    width: 3.4rem;
    position: absolute;
    bottom: 0;
    transform: translate3d( 0px, 100%, 0);
    animation: ${animateY} 36s linear infinite;
    left: 95%;
    ${IconContainer}{
        animation: ${animateX} 2s ease-in-out infinite alternate;
    }
`
