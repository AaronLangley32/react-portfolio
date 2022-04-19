import styled from 'styled-components';

export const NavbarContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 10;
    margin-left: 2rem;
    @media screen and (max-width: 990px) {

    }
    @media screen and (max-width: 672px) {
        height: 3rem;
        width: 100%;
        justify-content: center;
        margin-left: 0rem;
        bottom: 3rem;
    }
`
export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 990px) {

    }
    @media screen and (max-width: 672px) {
        flex-direction: row;
    }
`
export const MenuLink = styled.a`
    display: grid;
    place-content: center;
    margin: 3rem 0rem;
    width: 3rem;
    height: 3rem;
    font-size: 3rem;
    transition: all 300ms ease-in-out;
    color: ${props => props.theme.navLinkColor};
    @media screen and (max-width: 990px) {
        margin: 2.2rem 0rem;
        width: 2.5rem;
        height: 2.5rem;
        font-size: 2.5rem;
    }
    @media screen and (max-width: 672px) {
        margin: 0rem 2.3rem;
    }
    &:hover {
        color: ${props => props.theme.navLinkHoveredColor};
        transform: scale(1.2);
    }
`