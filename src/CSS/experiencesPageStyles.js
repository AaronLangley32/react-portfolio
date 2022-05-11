import styled from 'styled-components'

export const PageBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    height: auto;
    width: auto;
    bottom:0;
    top:0;
    left:0;
    right:0;
    z-index: -1;
    @media screen and (max-width: 990px) {
    }
    @media screen and (max-width: 672px) {
    }
`
export const Main = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10rem;
    width: 80vw;
    height: 70vh;
    max-width: 900px;
    @media screen and (max-width: 990px) {
        margin-top: 8rem;
        width: 80vw;
        height: 65vh;
        max-width: 700px;
    }
    @media screen and (max-width: 672px) {
        flex-direction: column;
        justify-content: center;
        margin-top: 6rem;
        width: 100vw;
        height: 75vh;
        max-width: 700px;
    }
`
export const LeftContainer = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 990px) {

    }
    @media screen and (max-width: 672px) {
        width: 100%;
        height: 40%;
    }
`
export const RightContainer = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 990px) {

    }
    @media screen and (max-width: 672px) {
        width: 100%;
        height: 40%;
        margin-top: 3rem;
    }
`
export const LeftContent = styled.div`
    position: absolute;
    top: 1.5rem;
    bottom: 1.5rem;
    right: 2rem;
    left: 1.5rem;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 3px;
    }
    ::-webkit-scrollbar-track {
    border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
    background: #035efc;
    opacity: 0.5;
    border-radius: 4px;
    }
`
export const RightContent = styled.div`
    position: absolute;
    top: 1.5rem;
    bottom: 1.5rem;
    right: 1.5rem;
    left: 2rem;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 3px;
    }
    ::-webkit-scrollbar-track {
    border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
    background: #035efc;
    border-radius: 4px;
    }
`
export const List = styled.div`
    font-size: 2rem;
    font-family: Quicksand;
    font-variation-settings: 'wght' 400;
    padding-right: 1rem;
    color: ${props => props.theme.fontColor};
    @media screen and (max-width: 990px) {
        
    }
    @media screen and (max-width: 672px) {
        font-size: 1.75rem;
    }
`
export const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem 0rem;
    @media screen and (max-width: 990px) {
        
    }
    @media screen and (max-width: 672px) {
        
    }
`
export const ItemName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
`
export const ItemDesc = styled.div`
    padding-left: 4rem;
    font-size: 1.75rem;
    @media screen and (max-width: 990px) {
        
    }
    @media screen and (max-width: 672px) {
        font-size: 1.5rem;
    }
`
export const LeftHeader = styled.div`
    position: absolute;
    top: -4.25rem;
    left: 1rem;
    width: auto;
    height: 3rem;
    font-size: 2.5rem;
    font-family: Quicksand;
    font-variation-settings: 'wght' 500;
    color: ${props => props.theme.fontColor};
    @media screen and (max-width: 990px) {
        
    }
    @media screen and (max-width: 672px) {
        font-size: 2.25rem;
        top: -3.25rem;
        position: relative;
        left: 0;
        text-align: center;
        color: #035efc;
    }
`
export const RightHeader = styled.div`
    position: absolute;
    top: -4.25rem;
    left: 1rem;
    width: auto;
    height: 3rem;
    font-size: 2.5rem;
    font-family: Quicksand;
    font-variation-settings: 'wght' 500;
    color: ${props => props.theme.fontColor};
    @media screen and (max-width: 990px) {
        
    }
    @media screen and (max-width: 672px) {
        font-size: 2.25rem;
        top: -3.25rem;
        position: relative;
        left: 0;
        text-align: center;
        color: #035efc;
    }
`