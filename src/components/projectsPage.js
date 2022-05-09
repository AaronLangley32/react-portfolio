import React from 'react'
import { PageBody, Header, Main, ShowCaseContainer, Item } from '../CSS/projectsPageStyles'
import '../CSS/projectsAnimation.css'

const Projects = () => {
  return (
    <PageBody className="pageBody">
      <Header>Some Of My Work
      </Header>
      <Main>
        <ShowCaseContainer>
          <Item href="https://ableclosets.com" className="item1"></Item>
          <Item className="item2"></Item>
          <Item className="item3"></Item>   
          <Item className="item4">More Projects To Come</Item>
          <Item className="item5">More Projects To Come</Item>
          <Item className="item6">More Projects To Come</Item>
        </ShowCaseContainer>
      </Main>
    </PageBody>
  )
}

export default Projects