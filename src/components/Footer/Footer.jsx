import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from '../../assets/github.png'
import navIcon2 from '../../assets/twitter.png';
import navIcon3 from '../../assets/linkedin.png';
import './footer.css'

export  default function Footer () {
  return (
    <footer className="footer">
      <Container>
        <Row >
  
          <Col>
            <div className="social-icon">
              <a href="https://github.com/MayaraRocha95/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/MayaraARochaaa" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/mayaraaraujorocha/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Feito por Mayara Rocha |2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
