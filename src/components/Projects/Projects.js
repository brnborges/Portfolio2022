import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import narutoGame from '../../Assets/Projects/narutogame1.png'
import houseFinder1 from '../../Assets/Projects/housefinder1.png'
import houseFinder5 from '../../Assets/Projects/housefinder5.png'
import doctorCare from '../../Assets/Projects/web1.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctorCare}
              isBlog={false}
              title="DoctorCare"
              description="DoctorCare is a tool to streamline consultation processes and assist patients in an organized and practical way."
              link="https://github.com/brnborges/DoctorCare"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houseFinder1}
              isBlog={false}
              title="House Finder"
              description="Personal Final Project Web Page that aims to assist in finding vacancies in property with a simple but modern usability. Built with React, Typescript and backened with NodeJS."
              link="https://github.com/brnborges/HouseFinder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houseFinder5}
              isBlog={false}
              title="House Finder"
              description="Personal Final Project App that aims to assist in finding vacancies in property with a simple but modern usability. Built with React Native, Typescript and backened with NodeJS."
              link="https://github.com/brnborges/HouseFinder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={narutoGame}
              isBlog={false}
              title="Naruto Game"
              description="Naruto-Makioutsu is a 3d game developed in C# to hit the target of one of the most requested foods by the anime character Naruto"
              link="https://github.com/brnborges/CA2-20053-Naruto-Makioutsu-Game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
