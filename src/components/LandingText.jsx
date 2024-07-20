import { Link } from "react-router-dom";
import "../styles/LandingText.css";

const LandingText = () => {
  return (
    <div>
      <main>
        <h2>DIGITAL EMPOWEREMENT NETWORK INTERNSHIP</h2>
        <h3>Pave your way to a future of opportunities!</h3>
        <p>
          Welcome to the Digital Empowerment Pakistan{" "}
          <b>4-Week Virtual Internship program (July 2024 - Batch 02)</b>{" "}
          tailored for <b>BBA Students!</b>
        </p>
        <p>
          "Digital Empowerment Pakistan (DEP) is a non-profit organization
          dedicated to bridging the digital divide and empowering Pakistani
          youth. DEP aims to enhance youth empowerment through digital literacy,
          leadership development, and academic growth. DEP's initiatives focus
          on providing digital skills training, scholarship guidance, and
          leadership development opportunities to Pakistani youth."
        </p>
        <p>
          This is your opportunity to gain practical experience and enhance your
          skills through a structured online internship. Please fill in all the
          required fields carefully, as the information you provide will be used
          for your Offer Letter and Completion Certficate.
        </p>

        <h4>Perks you will receive:</h4>
        <div className="landing_list">
          <li>Offer Letter</li>
          <li>Internship Certificate</li>
          <li>Letter Of Recommendation(based on performance)</li>
        </div>
        <h4>Registration Process:</h4>
        <div className="landing_list">
          <li>
            Fill out the form below with your basic details and interests of
            specialization.
          </li>
          <li>
            You will receive your <span>internship offer letter</span> after the
            deadline.
          </li>
        </div>
        <h4>Note:</h4>
        <div className="landing_list">
          <li>Only complete and accurate submissions will be considered.</li>
          <li>
            Avoid spamming or submitting multiple applications for the same
            domain to ensure your application is valid.
          </li>
        </div>
        <p>
          Thank you for your interest in Digital Empowerment Pakistan! We look
          forward to having you in our internship program.
        </p>

        <h4>Contact Us:</h4>
        <div className="links">
          <a href="#">Visit our Website</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">WhatsApp Channel</a>
        </div>
        <h4>For any query:</h4>
        <div className="links">
          <a href="#">internship.dep@depsolution.org</a>
          <a href="#">+923325890142</a>
        </div>
      </main>

      <Link to="/personalDetails">
        <button className="next">Next</button>
      </Link>
    </div>
  );
};

export default LandingText;
