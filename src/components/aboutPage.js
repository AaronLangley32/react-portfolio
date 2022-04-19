import React from 'react'
import { PageBody, Header1, Header2, HeaderWords } from '../CSS/aboutPageStyles'

const About = () => {
  return (
    <PageBody>
      <Header1>
        <HeaderWords classname="word1">Front</HeaderWords>
        <HeaderWords classname="word2">End</HeaderWords>
        <HeaderWords classname="word3">Web</HeaderWords>
        <HeaderWords classname="word4">Developer</HeaderWords>
      </Header1>
      <Header2>
        <HeaderWords classname="word3">Source</HeaderWords>
        <HeaderWords classname="word4">Engine</HeaderWords>
        <HeaderWords classname="word5">Level</HeaderWords>
        <HeaderWords classname="word6">Designer</HeaderWords>
      </Header2>
    </PageBody>
  )
}

export default About