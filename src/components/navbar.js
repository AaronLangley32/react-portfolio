import React from 'react'
import { NavbarContainer, Menu, MenuLink } from '../CSS/navbarStyles'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCode, FaWrench, FaListUl } from 'react-icons/fa'
import { IoShareSocialSharp } from 'react-icons/io5'
import '../CSS/navbarAnimation.css'


const Navbar = () => {
  return (
    <NavbarContainer>
        <Menu>
            <MenuLink href="" className="link1">
                <BsFillPersonFill />
            </MenuLink>
            <MenuLink href="" className="link2">
                <FaCode />
            </MenuLink>
            <MenuLink href="" className="link3">
                <FaWrench />
            </MenuLink>
            <MenuLink href="" className="link4">
                <FaListUl />
            </MenuLink>
            <MenuLink href="" className="link5">
                <IoShareSocialSharp />
            </MenuLink>
        </Menu>
    </NavbarContainer>
  )
}

export default Navbar