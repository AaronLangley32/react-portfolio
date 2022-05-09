import styled from 'styled-components'

export const ToggleContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #035efc;
    background: none;
    border: none;
    width: auto;
    font-size: 3rem;
    position: absolute;
    right: -5rem;
    z-index: 1;
    transition: all 0.1s ease-in;
    &:hover {
        transform: scale(1.1);
        color: #77a6f7;
    }
    @media screen and (max-width: 990px) {
        font-size: 2.2rem;
    }
    @media screen and (max-width: 672px) {
        display: flex;
        justify-conent: default;
        align-items: default;
        margin-left: 0;
        width: auto;
        font-size: 1.7rem;
        position: absolute;
        bottom: 5%;
        right: 5%;
    }
`
