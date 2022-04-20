import React from 'react'
import { PageBody, Header1, Header2, HeaderWords } from '../CSS/aboutPageStyles'
import '../CSS/headerAnimation.css'
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
    </PageBody>
  )
}

export default About