import styled from "styled-components";
import img1 from '../images/Profile1.png';

export const PageBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: green; */
    margin-left: 7rem;
    position: absolute;
    height: auto;
    width: auto;
    bottom:0;
    top:0;
    left:0;
    right:0;
    @media screen and (max-width: 990px) {
        margin-left: 6.5rem;
    }
    @media screen and (max-width: 672px) {
        margin: 0rem 0rem 9rem 0rem;
    }
`
export const Header1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: red; */
    width: 70rem;
    height: 10rem;
    font-size: 7rem;
    margin-top: 2rem;
    font-family: OpenSans;
    font-variation-settings: 'wght' 400, 'wdth' 75;
    color: ${props => props.theme.fontColor};
    @media screen and (max-width: 990px) {
        width: 60rem;
        height: 9rem;
        font-size: 6rem;
        margin-top: 2rem;
    }
    @media screen and (max-width: 672px) {
        width: 33rem;
        height: 5rem;
        font-size: 3.5rem;
        margin-top: 5rem;
    }
`
export const Header2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: blue; */
    width: 44rem;
    height: 6rem;
    font-size: 4rem;
    margin-top: 0rem;
    font-family: OpenSans;
    font-variation-settings: 'wght' 400, 'wdth' 75;
    color: ${props => props.theme.fontColor};
    @media screen and (max-width: 990px) {
        width: 33rem;
        height: 5rem;
        font-size: 3rem;
        margin-top: 0rem;
    }
    @media screen and (max-width: 672px) {
        width: 22rem;
        height: 5rem;
        font-size: 2rem;
        margin-top: 0rem;
    }
`
export const HeaderWords = styled.div`
    transition: all 200ms ease-in-out;
    &:hover {
        font-variation-settings: 'wght' 800, 'wdth' 100;
        font-style: italic;
    }
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */
    margin-top: 3rem;
    width: 80vw;
    height: 70vh;
    max-width: 800px;
    @media screen and (max-width: 990px) {
        margin-top: 2rem;
        width: 80vw;
        height: 65vh;
        max-width: 670px;
    }
    @media screen and (max-width: 672px) {
        margin-top: 0rem;
        width: 80vw;
        height: 65vh;
        max-width: 670px;
    }
`
export const QAContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0rem;
    font-size: 1.5rem;
    font-family: Quicksand;
    font-variation-settings: 'wght' 500;
    color: ${props => props.theme.fontColor};
    @media screen and (max-width: 990px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 672px) {
        font-size: 1.2rem;
    }
`
export const Q = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    @media screen and (max-width: 990px) {
        max-width: 450px;
    }
    @media screen and (max-width: 672px) {
        max-width: 400px;
    }
`
export const A = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 450px;
    @media screen and (max-width: 990px) {
        max-width: 450px;
    }
    @media screen and (max-width: 672px) {
        max-width: 400px;
    }
`
export const DropDownStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 115%;
    font-size: 2.4rem;
    position: absolute;
    @media screen and (max-width: 990px) {
        font-size: 2.2rem;
    }
    @media screen and (max-width: 672px) {
        font-size: 1.8rem;
        margin-left: 35rem;
    }
`
export const PageRedirect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    color: #035efc;
    transition: all 100ms ease-in;
    font-size: 2rem;
    font-style: italic;
    font-variation-settings: 'wght' 400;
    @media screen and (max-width: 990px) {
        font-size: 1.75rem;
    }
    @media screen and (max-width: 672px) {
        font-size: 1.5rem;
    }
    &:hover {
        transform: scale(1.1);
    }
    &:hover a{
        color: #77a6f7;
    }
`
export const AvatarContainer = styled.div`
    width: 250px;
    height: 300px;
    /* background-color: red; */
    position: absolute;
    top: 25vh;
    right: 3%;

`
export const AvatarText = styled.div`
    font-family: OoooBaby;
    font-size: 2.5rem;
    transform: rotate(-30deg);
    color: ${props => props.theme.fontColor};
    width: 250px;
    height: 50px;
    /* background-color: green; */
    position: absolute;
    top: 10%;
    right: 20%;
`
export const AvatarImage = styled.div`
    background-image: url(${img1});
    background-size: contain;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    /* background-color: purple; */
    position: absolute;
    right: 0;
    bottom: 0;
`
export const AvatarRoom = styled.div`

`
export const AvatarLight = styled.div`

`