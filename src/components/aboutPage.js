import React, { useState } from 'react'
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosArrowRoundForward } from 'react-icons/io'
import { PageBody, Header1, Header2, MobileHeader1, MobileHeader2, HeaderWords, Main, QAContainer, Q, A, PageRedirect, AvatarContainer, AvatarText, AvatarImage, AvatarRoom } from '../CSS/aboutPageStyles'
import { Link } from 'react-router-dom'
import { ToggleContainer } from './ToggleButton'
import '../CSS/headerAnimation.css'
import '../CSS/mainLoadAnimation.css'
const About = () => {

  const [extendQA1, setExtendQA1] = useState(false);
  const [extendQA2, setExtendQA2] = useState(false);
  const [extendQA3, setExtendQA3] = useState(false);
  const [extendQA4, setExtendQA4] = useState(false);

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
      <MobileHeader1 className="page_header">
        <HeaderWords className="word1">Aaron</HeaderWords>
        <HeaderWords className="word2">Langley,</HeaderWords>
      </MobileHeader1>
      <MobileHeader2 className="page_header2">
        <HeaderWords className="word3">Freelance</HeaderWords>
        <HeaderWords className="word4">Web-Developer.</HeaderWords>
      </MobileHeader2>
      <Main className="main">
        <QAContainer>
          <Q onClick={() => {
                setExtendQA1((curr1) => !curr1);
                setExtendQA2((curr2) => false);
                setExtendQA3((curr3) => false);
                setExtendQA4((curr4) => false);
                }}
          >Are you looking to create a strong online presence?
              <ToggleContainer>
                {extendQA1 ? <IoIosArrowDropup /> : <IoIosArrowDropdown /> }
              </ToggleContainer>
          </Q>
          {extendQA1 && (
            <A>I can bring a new brand or start-up into the E-commerce space with a fully custom & modern web design.
            <PageRedirect>
              <Link to="/contact">Get In Touch</Link>
              <IoIosArrowRoundForward />
            </PageRedirect>
          </A>
          )}  
        </QAContainer>
        <QAContainer>
          <Q onClick={() => {
                setExtendQA1((curr1) => false);
                setExtendQA2((curr2) => !curr2);
                setExtendQA3((curr3) => false);
                setExtendQA4((curr4) => false);
                }}
          >Need updates or a complete redesign to your website?
              <ToggleContainer>
                {extendQA2 ? <IoIosArrowDropup /> : <IoIosArrowDropdown /> }
              </ToggleContainer>           
          </Q>
          {extendQA2 && (
            <A>Check out the portfolio section to see some of my projects.
            <PageRedirect>
              <Link to="/projects">Let Me See</Link>
              <IoIosArrowRoundForward />
            </PageRedirect>
          </A>
          )}
        </QAContainer>
        <QAContainer>
          <Q onClick={() => {
                setExtendQA1((curr1) => false);
                setExtendQA2((curr2) => false);
                setExtendQA3((curr3) => !curr3);
                setExtendQA4((curr4) => false);
                }}
          >Think I would be a good fit to your team / company?
              <ToggleContainer>
                {extendQA3 ? <IoIosArrowDropup /> : <IoIosArrowDropdown /> }
              </ToggleContainer>           
          </Q>
          {extendQA3 && (
            <A>I'm currently exploring options for a Full-Time position. Let's get in touch!
              <PageRedirect>
                <Link to="/contact">Hire Me</Link>
                <IoIosArrowRoundForward />
              </PageRedirect>
            </A>
          )} 
        </QAContainer>
        <QAContainer>
          <Q onClick={() => {
                setExtendQA1((curr1) => false);
                setExtendQA2((curr2) => false);
                setExtendQA3((curr3) => false);
                setExtendQA4((curr4) => !curr4);
                }}
          >In the market for a private Source Engine Level Designer?
              <ToggleContainer>
                {extendQA4 ? <IoIosArrowDropup /> : <IoIosArrowDropdown /> }
              </ToggleContainer>           
          </Q>
          {extendQA4 && (
            <A>Add me on Discord for an inquiry. Thriller#5538
            </A>
          )}  
        </QAContainer>
      </Main>
      <AvatarContainer className="avatarContainer">
          <AvatarText>Hey I'm Aaron!<br />Welcome to my Hood!</AvatarText>
          <AvatarImage></AvatarImage>
          <AvatarRoom></AvatarRoom>
        </AvatarContainer>
    </PageBody>
  )
}

export default About