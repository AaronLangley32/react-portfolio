import React, { useState } from 'react'
import { PageBody, Header, Main, FormContainer, SocialsContainer, SocialsIcon } from '../CSS/contactPageStyles'
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
        <FormContainer onSubmit={handleSubmit}>
          <div className="form">
            <div className="leftContainer">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div className="rightContainer">
              <label htmlFor="message">Message:</label>
              <textarea id="message" required />
            </div>
          </div>
          <button type="submit">{status}</button>
        </FormContainer>
      </Main>
    </PageBody>
  )
}

export default Contact