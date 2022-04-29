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
    align-items: center;
    /* background-color: red; */
    margin-top: 6rem;
    width: 80rem;
    aspect-ratio: 16/9;
    @media screen and (max-width: 990px) {
        margin-top: 5rem;
        width: 60rem;
        aspect-ratio: 16/10;
    }
    @media screen and (max-width: 672px) {
        margin-top: 2rem;
        width: 90%;
        aspect-ratio: 9/12;
    }
`
export const ShowCaseContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0rem;
    @media screen and (max-width: 990px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 672px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
`
export const Item = styled.a`
    width: 30rem;
    aspect-ratio: 16 / 10;
    /* background-color: purple; */
    color: ${props => props.theme.fontColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: OpenSans;
    font-style: italic;
    font-size: 2rem;
    text-align: center;
    @media screen and (max-width: 990px) {
        width: 22.5rem;
        aspect-ratio: 16 / 10;
    }
    @media screen and (max-width: 672px) {
        font-size: 1.5rem;
        width: 17.5rem;
        aspect-ratio: 16 / 10;
    }
`