import React, { Component } from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import Socials from "../Icons/Socials";
import Image from "./project1.png";

export default class ProjectCard1 extends Component {
    render() {
        return (
          <ProjectWrapper>
            <Card>
               <CardContent>
               <h4>Featured Project</h4>
               <h5>Portfolio Website</h5>
               <p>
                  This is a comprehensive project management dashboard built with ReactJS and styled-components, 
                  designed to help teams track project progress, manage tasks, and collaborate effectively. 
               </p>
               <ul>
                 <li>React Js</li>
                 <li>Styling CSS</li>
                 <li>Javascript(ES6)</li>
               </ul>
              <Socials github = "https://github.com/ketangoyal2002/Personal-Portfolio/" link = "https://ketangoyal2002.github.io/Personal-Portfolio" />
            </CardContent>
         </Card>
         <CardImage>
           <a href = "https://ketangoyal2002.github.io/Personal-Portfolio">
           <Overlay /> 
             <img src = {Image} alt = "personal website"></img>
           </a>
         </CardImage>
        </ProjectWrapper>
        )
    }
}


const ProjectWrapper = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
position:relative;
`;

const Overlay = styled.div`
 @media (max-width: 768px) {
      display:none;
    }

background-color: rgba(24, 16, 64, 0.54);

width: 100%;
height: 77%;
position: absolute;
&:focus {
  background-color:none;
}
`; 

// Styles 

const Card = styled.div`

background-color:${theme.colors.Navy};

width: 100%;

@media (min-width: 768px) {
  padding: 20px;
width:70%;
margin-left:8em;
};
`;


const CardImage = styled.div`
  grid-column: 4 / -3;
  position: relative;
  right: 2em;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;  // Make the image span the full width on mobile
    position: static;  // Remove any positioning issues on mobile
    margin-top: 20px;  // Add some spacing if needed

    img {
      width: 100%;  // Ensure the image takes up the full width
      height: auto;
    }
  }
`;



const CardContent = styled.div`
  grid-column: 1 / 10;

  @media (max-width: 1080px) {
    grid-column: 1 / 9;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;  // Make CardContent span the full width on mobile
    padding: 40px 40px 30px;
    z-index: 5;
    width: 100%;  // Ensure the content takes up the full width
  }

  @media (max-width: 480px) {
    padding: 30px 25px 20px;
  }

  h4 {
    font-size: 13px;
    font-weight: normal;
    color: ${theme.colors.green};
    font-family: "SF Mono";
    font-weight: 400;
    margin-top: 10px;
    padding-top: 0px;
  }

  h5 {
    font-size: 28px;
    margin: 0px 0px 20px;
    color: ${theme.colors.vLightSlate};
    font-family: "Calibre";
    font-weight: 600;
  }

  p {
    padding: 25px;
    color: rgb(168, 178, 209);
    font-size: 18px;
    border-radius: 3px;
    text-align: justify;
    box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
    background-color: ${theme.colors.lightNavy};
    width: 100%;  // Adjust width to full container on mobile

    @media (min-width: 768px) {
      width: 110%;
    }

    a {
      color: ${theme.colors.green};
      text-decoration: none;
    }
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    padding: 0px;
    margin: 25px 0px 10px;
    list-style: outside none none;
    align-content: flex-start;
  }

  li {
    padding-left: 1em;
    width: 85px;
    font-size: 13px;
    color: ${theme.colors.vLightSlate};
    margin-right: 20px;
    margin-bottom: 7px;
    white-space: nowrap;
  }
`;
