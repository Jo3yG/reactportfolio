// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Nurse and Kinda a Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Joe Gaytan"/>
      <p className="content is-italic mt-4">
        I'm Joey, a nurse studying and going to a full stack bootcamp to better my life
        hopefully, but I will admit there is a lot of stress.
      </p>
      <p className="content">
      Provided direct patient care within Psychiatric facility, quality, continuous care.
      Followed the plan of care assessing patients, administering medications and treatments.
      preparing supplies and equipment for treatments, and assisting the attending physician or
       registered nurse in performing specialized procedures. strong focus on assisting and supporting providers (physicians, nurse practitioners, and physician assistants) in provision of patient care.
      </p>
    </div>
  );
}

export default About;
