import styled from 'styled-components'

export const ToggleContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.fontColor};
    background: none;
    border: none;
    margin-left: 115%;
    width: 100px;
    font-size: 3rem;
    position: absolute;
    z-index: 1;
    @media screen and (max-width: 990px) {
        font-size: 2.2rem;
    }
    @media screen and (max-width: 672px) {
        font-size: 1.8rem;
        margin-left: 35rem;
    }
`
