import React from 'react'
import { PageBody, Header, Main, FormContainer, SocialsContainer, SocialsIcon } from '../CSS/contactPageStyles'
import { FaLinkedinIn, FaGithub, FaTwitter, FaDiscord, FaTwitch } from 'react-icons/fa'

const Contact = () => {
  return (
    <PageBody>
      <Header>
        Let's Get In Touch
      </Header>
      <Main>
        <SocialsContainer>
          <SocialsIcon className="LinkedIn">
            <FaLinkedinIn />
          </SocialsIcon>
          <SocialsIcon className="Github">
            <FaGithub />
          </SocialsIcon>
          <SocialsIcon className="Twitter">
            <FaTwitter />
          </SocialsIcon>
          <SocialsIcon className="Discord">
            <FaDiscord />
          </SocialsIcon>
          <SocialsIcon className="Twitch">
            <FaTwitch />
          </SocialsIcon>
        </SocialsContainer>
        <FormContainer>
          
        </FormContainer>
      </Main>
    </PageBody>
  )
}

export default Contact