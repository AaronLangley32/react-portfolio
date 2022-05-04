import styled from 'styled-components'

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
    z-index: -1;
    @media screen and (max-width: 990px) {
        margin-left: 6.5rem;
    }
    @media screen and (max-width: 672px) {
        margin: 0rem 0rem 9rem 0rem;
    }
`
export const Header = styled.div`
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
export const Main = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
`
export const FormContainer = styled.form`
    width: 60%;
    height: 80%;
    background-color: purple;
`
export const SocialsContainer = styled.div`
    width: 20%;
    height: 80%;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SocialsIcon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    width: 6.5rem;
    aspect-ratio: 1 / 1;
    border-radius: 1.25rem;
    margin: 1.5rem 0rem;
    color: #ffffff;
`

