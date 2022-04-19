import styled from "styled-components";

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
    margin-top: 6rem;
    font-family: OpenSans;
    font-variation-settings: 'wght' 400, 'wdth' 75;
    color: ${props => props.theme.fontColor};
    @media screen and (max-width: 990px) {
        width: 60rem;
        height: 9rem;
        font-size: 6rem;
        margin-top: 6rem;
    }
    @media screen and (max-width: 672px) {
        width: 33rem;
        height: 5rem;
        font-size: 3.5rem;
        margin-top: 7rem;
    }
`
export const Header2 = styled.div`

`
export const HeaderWords = styled.div`
    transition: all 200ms ease-in-out;
    &:hover {
        font-variation-settings: 'wght' 800, 'wdth' 100;
        font-style: italic;
    }
`