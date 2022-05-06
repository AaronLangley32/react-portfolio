import React, { useState } from 'react'
import { PageBody, Header, Main, FormContainer, SocialsContainer, SocialsIcon, SubmitButton, MessageInput, NameEmailInputs, Form } from '../CSS/contactPageStyles'
import { FaLinkedinIn, FaGithub, FaTwitter, FaDiscord, FaTwitch } from 'react-icons/fa'
import '../CSS/contactPageClasses.css'
const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <PageBody>
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
        <FormContainer onSubmit={handleSubmit}>
          <Form>
            <NameEmailInputs htmlFor="name" placeholder="Name" type="text" id="name" required className='input'></NameEmailInputs>
            <NameEmailInputs input htmlFor="email" placeholder="Email" type="email" id="email" required className='input'></NameEmailInputs>
            <MessageInput htmlFor="message" placeholder="Message" id="message" required className='inputMessage'></MessageInput>
            <SubmitButton type="submit" className="submitButton">{status}</SubmitButton>
          </Form>
        </FormContainer>
      </Main>
    </PageBody>
  )
}

export default Contact