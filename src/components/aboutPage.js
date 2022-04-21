import React from 'react'
import { IoIosArrowDropdown, IoIosArrowRoundForward } from 'react-icons/io'
import { PageBody, Header1, Header2, HeaderWords, Main, QAContainer, Q, A, DropDownStyle, PageRedirect, AvatarContainer, AvatarText, AvatarImage, AvatarRoom, AvatarLight } from '../CSS/aboutPageStyles'
import { Link } from 'react-router-dom'
import '../CSS/headerAnimation.css'
import '../CSS/mainLoadAnimation.css'
const About = () => {
  return (
    <PageBody>
      <Header1 className="page_header">
        <HeaderWords className="word1">Front</HeaderWords>
        <HeaderWords className="word2">End</HeaderWords>
        <HeaderWords className="word3">Web</HeaderWords>
        <HeaderWords className="word4">Developer.</HeaderWords>
      </Header1>
      <Header2 className="page_header2">
        <HeaderWords className="word5">Source</HeaderWords>
        <HeaderWords className="word6">Engine</HeaderWords>
        <HeaderWords className="word7">Level</HeaderWords>
        <HeaderWords className="word8">Designer.</HeaderWords>
      </Header2>
      <Main className="main">
        <QAContainer>
          <Q>Are you looking to create a strong online presence?<DropDownStyle><IoIosArrowDropdown /></DropDownStyle></Q>
          <A>I can bring a new brand or start-up into the E-commerce space with a fully custom & modern web design.</A>
          <PageRedirect><Link to="/projects">Get In Touch</Link><IoIosArrowRoundForward /></PageRedirect>
        </QAContainer>
        <QAContainer>
          <Q>Need updates or a complete redesign to your website?<DropDownStyle><IoIosArrowDropdown /></DropDownStyle></Q>
          <A>Check out the portfolio section to see some before & afters.</A>
          <PageRedirect><Link to="/projects">Let me see</Link><IoIosArrowRoundForward /></PageRedirect>
        </QAContainer>
        <QAContainer>
          <Q>Think I would be a good fit to your team / company? <DropDownStyle><IoIosArrowDropdown /></DropDownStyle></Q>
          <A>I'm currently exploring options for a Full-Time position. Let's get in touch!</A>
          <PageRedirect><Link to="/projects">Hire Me</Link><IoIosArrowRoundForward /></PageRedirect>
        </QAContainer>
        <QAContainer>
          <Q>In the market for a private Source Engine Level Designer?<DropDownStyle><IoIosArrowDropdown /></DropDownStyle></Q>
          <A>Add me on Discord for an inquiry. Thriller#5538</A>
        </QAContainer>
        <AvatarContainer>
          <AvatarText>Hey There! I'm Aaron!</AvatarText>
          <AvatarImage></AvatarImage>
          <AvatarRoom></AvatarRoom>
          <AvatarLight></AvatarLight>
        </AvatarContainer>
      </Main>
    </PageBody>
  )
}

export default About