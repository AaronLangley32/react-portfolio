import React from 'react'
import { PageBody, Header, Main, FormContainer, SocialsContainer, SocialsIcon, EmailLink, FormText } from '../CSS/contactPageStyles'
import { FaLinkedinIn, FaGithub, FaTwitter, FaDiscord, FaTwitch } from 'react-icons/fa'
import '../CSS/contactPageClasses.css'
const Contact = () => {
  return (
    <PageBody className="pageBody">
      <Header>
        Let's Get In Touch
      </Header>
      <Main>
        <SocialsContainer>
          <SocialsIcon href="https://www.linkedin.com/in/aaron--langley/" target="_blank" className="LinkedIn">
            <FaLinkedinIn />
          </SocialsIcon>
          <SocialsIcon href="https://github.com/AaronLangley32" target="_blank" className="Github">
            <FaGithub />
          </SocialsIcon>
          <SocialsIcon href="https://twitter.com/thrillerCS" target="_blank"  className="Twitter">
            <FaTwitter />
          </SocialsIcon>
          <SocialsIcon href="https://discordapp.com/users/177927164774187008" target="_blank"  className="Discord">
            <FaDiscord />
          </SocialsIcon>
          <SocialsIcon href="https://twitch.tv/thrillerlive" target="_blank"  className="Twitch">
            <FaTwitch />
          </SocialsIcon>
        </SocialsContainer>
        <FormContainer>
          <FormText>
            Send me an Email for any type of inquiry or information!
          </FormText>
          <FormText>
            Also feel free to Email me for help with Front End questions!
          </FormText>
          <EmailLink href="mailto:Aaronlangley32@hotmail.com">
            Email Me
          </EmailLink>
        </FormContainer>
      </Main>
    </PageBody>
  )
}

export default Contact