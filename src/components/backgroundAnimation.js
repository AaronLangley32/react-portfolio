import React from 'react'
import { BiCodeCurly, BiCode, BiJoystick, BiGitBranch, BiPointer } from 'react-icons/bi'
import { FaReact, FaHtml5, FaPizzaSlice } from 'react-icons/fa'
import { PageBody, IconContainer, AnimatedContainer1, AnimatedContainer2, AnimatedContainer3, AnimatedContainer4, AnimatedContainer5, AnimatedContainer6, AnimatedContainer7, AnimatedContainer8, AnimatedContainer9, AnimatedContainer10 } from '../CSS/backgroundAnimationStyles'
const Background = () => {
  return (
    <PageBody>
        <AnimatedContainer1>
            <IconContainer>
                <BiCodeCurly />
            </IconContainer>
        </AnimatedContainer1>
        <AnimatedContainer2>
            <IconContainer>
                <BiCode />
            </IconContainer>
        </AnimatedContainer2>
        <AnimatedContainer3>
            <IconContainer>
                <BiJoystick />
            </IconContainer>
        </AnimatedContainer3>
        <AnimatedContainer4>
            <IconContainer>
                <BiGitBranch />
            </IconContainer>
        </AnimatedContainer4>
        <AnimatedContainer5>
            <IconContainer>
                <BiPointer />
            </IconContainer>
        </AnimatedContainer5>
        <AnimatedContainer6>
            <IconContainer>
                <FaReact />
            </IconContainer>
        </AnimatedContainer6>
        <AnimatedContainer7>
            <IconContainer>
                <BiCode />
            </IconContainer>
        </AnimatedContainer7>
        <AnimatedContainer8>
            <IconContainer>
                <BiJoystick />
            </IconContainer>
        </AnimatedContainer8>
        <AnimatedContainer9>
            <IconContainer>
                <FaHtml5 />
            </IconContainer>
        </AnimatedContainer9>
        <AnimatedContainer10>
            <IconContainer>
                <FaPizzaSlice />
            </IconContainer>
        </AnimatedContainer10>
    </PageBody>
  )
}

export default Background