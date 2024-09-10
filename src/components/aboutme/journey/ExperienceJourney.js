import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import Zl from "../../../images/zephyr.jpg";
import Md from "../../../images/microdegree.jpg";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        {/* <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link> */}
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023 - 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={
            <div
              style={{
                backgroundImage: `url(${Zl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '50%',
                width: '100%',
                height: '100%'
              }}
            />
          }
        >
          <h5 className="vertical-timeline-element-title">
            Zephyr Technologies & Solutions Pvt.Ltd.
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Intern in ML
          </h6>
          <p>• Applied critical thinking abilities in order to assess existing workflows and suggest improvements for increased efficiency.</p>
          <p>• Engaged in continuous learning opportunities such as workshops or training sessions provided by the company, expanding skillset as an intern developer.</p>
          <p>• Worked with developers to identify and remove software bugs.</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={
            <div
              style={{
                backgroundImage: `url(${Md})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '50%',
                width: '100%',
                height: '100%'
              }}
            />
          }
        >
          <h5 className="vertical-timeline-element-title">
            MicroDegree.
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Intern in Python Fullstack
          </h6>
          <p>• Hands-on experience in developing and maintaining web applications using Python and modern front-end technologies.</p>
          <p>• Collaborate with cross-functional teams to build scalable and efficient software solutions while contributing to code reviews and project planning.</p>
          <p>• Valuable exposure to the full software development lifecycle and the opportunity to enhance your technical skills in a dynamic environment.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
      
    </div>
  );
}

export default ExperienceJourney;
