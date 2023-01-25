import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="blue">Bruno Borges </span>
            currently living in{' '}
            <span className="blue"> Greystones, Co. Wicklow, Ireland.</span>
            <br />
            BSc in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music and podcasts are an integral part of me.
            </li>
            <li className="about-activity">
              <ImPointRight /> Avid online gamer.
            </li>
            <li className="about-activity">
              <ImPointRight /> I am a thinker and a doer who is always looking
              for out of the box solutions.
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            “First, solve the problem. Then, write the code.”{' '}
          </p>
          <footer className="blockquote-footer">John Johnson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
