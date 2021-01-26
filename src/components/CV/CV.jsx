import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const CV = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="CV">
      <Container>
        <div className="project-wrapper">
          <Title title="CV" />
          <Row key="cv">
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">My Curriculum Vitae</h3>
                  <div>
                    <p>is my cv aaa</p>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12} />
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CV;
