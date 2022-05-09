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
export const Header = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
        margin-top: 6rem;
    }
`
export const Main = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 990px) {
    }
    @media screen and (max-width: 672px) {
        margin-top: 0;
    }
`
export const SocialsContainer = styled.div`
    width: 20%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 990px) {
    }
    @media screen and (max-width: 672px) {
        margin: 3rem 2rem 0rem 0rem;
        height: 70%;
    }
`
export const SocialsIcon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    width: 6rem;
    aspect-ratio: 1 / 1;
    border-radius: 0.75rem;
    margin: 1.5rem 0rem;
    color: #ffffff;
    transition: all 0.1s ease-in;
    &:hover {
        transform: scale(1.1);
    }
    @media screen and (max-width: 990px) {
    }
    @media screen and (max-width: 672px) {
        font-size: 2.5rem;
        width: 5rem;
        aspect-ratio: 1 / 1;
        border-radius: 0.75rem;
    }
`
export const FormContainer = styled.div`
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 990px) {
    }
    @media screen and (max-width: 672px) {
        height: 70%;
    }
`
export const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 65%;
    font-size: 1.5rem;
    font-family: OpenSans;
    opacity: 0.75;
    @media screen and (max-width: 990px) {
    }
    @media screen and (max-width: 672px) {
        width: 100%;
        height: 75%;
    }
`
export const NameEmailInputs = styled.input`
    background: ${props => props.theme.fontColor};
    border: none;
    width: 100%;
    height: 4rem;
    margin: 0.3rem 0rem;
    text-indent: 1rem;
    color: ${props => props.theme.body};
    ::placeholder {
        font-style: italic;
    }
    :focus {
        border: none;
        outline: none;
    }
`
export const MessageInput = styled.textarea`
    background: ${props => props.theme.fontColor};
    border: none;
    width: 100%;
    flex-grow: 1;
    margin: 0.3rem 0rem;
    padding-top: 0.75rem;
    text-indent: 1rem;
    color: ${props => props.theme.body};
    resize: none;
    ::placeholder {
        font-style: italic;
    }
    :focus {
        border: none;
        outline: none;
    }
`
export const SubmitButton = styled.button`
    position: absolute;
    background: none;
    border: 1px ${props => props.theme.fontColor} solid;
    font-size: 2rem;
    width: 20rem;
    height: 5rem;
    bottom: -5.3rem;
    right: 0rem;
    color: ${props => props.theme.fontColor};
    cursor: pointer;
    @media screen and (max-width: 990px) {
    }
    @media screen and (max-width: 672px) {
        width: 100%;
    }
`