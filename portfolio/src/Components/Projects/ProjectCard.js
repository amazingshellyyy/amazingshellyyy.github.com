import React from 'react';
import { Col, Card, Button, Image, ListGroup } from 'react-bootstrap';
import {IconContext} from 'react-icons';
import { IoLogoGithub } from "react-icons/io";
import {MdOpenInBrowser} from 'react-icons/md';



const ProjectCard = props => {
  return (
      <Card className="card-component">
        <Image variant="top" src={props.project.image} style={{ Height: "30vh" }} fluid />
        <Card.Body>
          <Card.Title>{props.project.title}</Card.Title>
          <p className="text-muted" style={{lineHeight: "1.2rem"}}>{props.project.subtitle}</p>
          <ul style={{fontSize: "0.8rem", paddingLeft:"15px"}}>
            <li>Tech: {props.project.tech}</li>
            {props.project.time && <li>Time: {props.project.time}</li>}
            <li>Project: {props.project.note}</li>
            <li>Date: {props.project.date}</li>
          </ul>
          <IconContext.Provider value={{size:"2em"}}>
          <a href={props.project.gitHub} ><IoLogoGithub/></a>
          
          {props.project.link && <a href={props.project.link}><MdOpenInBrowser/></a>}
          </IconContext.Provider>
          
        </Card.Body>
      </Card>
  )
}

export default ProjectCard;