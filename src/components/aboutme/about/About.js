import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">PRANEETH </b> 
                  and my objective is <b className="purple">Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code. </b> 
                     <b className="purple"> </b>
                      
                <br />
                <br />
                        I am proficient in various programming languages such as &nbsp;
                  <b className="purple">
                    {" "}
                    C, C++, Java, Python, HTML, CSS, PHP, and JavaScript.{" "}
                  </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;

                  <b className="purple">
                    {" "}
                    OpenCV, Flask, DJango, Pandas, and NumPy.{" "}
                  </b>
                <br />
                <br />
                Whenever possible, I also apply my algorithm challenge in &nbsp;
                  <b className="purple">
                    {" "}
                    Machine Learning Concepts.
                  </b>
                <br />
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="purple">building new web technologies and products. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
