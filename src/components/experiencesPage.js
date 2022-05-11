import React from 'react'
import { PageBody, Main, LeftContainer, RightContainer, LeftContent, RightContent, List, ListItem, ItemName, ItemDesc, LeftHeader, RightHeader } from '../CSS/experiencesPageStyles'
import { MdArrowRight } from 'react-icons/md'

const Experiences = () => {
  return (
    <PageBody className="pageBody">
      <Main>
        <LeftContainer>
          <LeftHeader>Front End Skills & Experience</LeftHeader>
          <LeftContent>
            <List>
              <ListItem>
                <ItemName><MdArrowRight />HTML</ItemName>
                <ItemDesc>Efficiency & Responsiveness is my priority.</ItemDesc>
              </ListItem>
              <ListItem>
                <ItemName><MdArrowRight />CSS</ItemName>
                <ItemDesc>I love staying up to date with modern web designs!</ItemDesc>
              </ListItem>
              <ListItem>
                <ItemName><MdArrowRight />SCSS</ItemName>
                <ItemDesc>Clean & Organized Code!</ItemDesc>
              </ListItem>
              <ListItem>
                <ItemName><MdArrowRight />Bootstrap</ItemName>
                <ItemDesc>Great for on the fly styling!</ItemDesc>
              </ListItem>
              <ListItem>
                <ItemName><MdArrowRight />Tailwind</ItemName>
                <ItemDesc>What he said ^</ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />JavaScript</ItemName>
                <ItemDesc>Favorite tool for making stuff do things!</ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />React JS</ItemName>
                <ItemDesc>My go-to framework for all of my personal projects.</ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Node JS</ItemName>
                <ItemDesc>My favorite local server enviroment tool.</ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Python</ItemName>
                <ItemDesc>First language that introduced me to the world of programming!</ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Java</ItemName>
                <ItemDesc>Great for making Minecraft Plugins ;)</ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />PHP</ItemName>
                <ItemDesc>Studied it briefly & quickly moved on to newer horizons.</ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />C#</ItemName>
                <ItemDesc>Dabbled in Unity game development</ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />JSON</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Rest APIs</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
            </List>
          </LeftContent>
        </LeftContainer>
        <RightContainer>
          <RightHeader>Other Tools & Proficiencies</RightHeader>
          <RightContent>
            <List>
              <ListItem>
                <ItemName><MdArrowRight />MongoDB</ItemName>
                <ItemDesc>Database Integration</ItemDesc>
              </ListItem>
              <ListItem>
                <ItemName><MdArrowRight />Postman</ItemName>
                <ItemDesc>Makes custom APIs very simple</ItemDesc>
              </ListItem> 
              <ListItem>
                <ItemName><MdArrowRight />Git & GitHub</ItemName>
                <ItemDesc>Lets collab!</ItemDesc>
              </ListItem>
              <ListItem>
                <ItemName><MdArrowRight />FTP Clients</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>
                <ItemName><MdArrowRight />Google Workspace</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Microsoft Office Suite</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Social Media Expert</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />High Attention To Detail</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Strong Communication Skills</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Ability To Take On Leadership Roles</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Efficient In High Stress Situations</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Expert In Assembling Computer Hardware</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Expert In Diagnosing & Repairing Software Issues</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Direct Customer Support Experience</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
              <ListItem>   
                <ItemName><MdArrowRight />Proficient Typing Skills @ 85+ WPM</ItemName>
                <ItemDesc></ItemDesc>
              </ListItem>
            </List>
          </RightContent>
        </RightContainer>
      </Main>
    </PageBody>
  )
}

export default Experiences