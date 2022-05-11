import React from 'react'
import { NavbarContainer, Menu, MenuLink } from '../CSS/navbarStyles'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCode, FaWrench, FaListUl } from 'react-icons/fa'
import { HiAtSymbol } from 'react-icons/hi'
import '../CSS/navbarAnimation.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <NavbarContainer>
        <Menu>
            <Link to="about">
                <MenuLink className="link1">
                    <BsFillPersonFill />
                </MenuLink>
            </Link>
            <Link to="experiences">
                <MenuLink className="link2">
                    <FaCode />
                </MenuLink>
            </Link>
            {/* <Link to="skills">
                <MenuLink className="link3">
                    <FaWrench />
                </MenuLink>
            </Link> */}
            <Link to="projects">
                <MenuLink className="link4">
                    <FaListUl />
                </MenuLink>
            </Link>
            <Link to="contact">
                <MenuLink className="link5">
                    <HiAtSymbol />
                </MenuLink>
            </Link>
        </Menu>
    </NavbarContainer>
  )
}

export default Navbar