import { Link } from "react-router-dom";
import { noSteps, steps } from "../constants";

import "../styles/InternshipDetails.css";

const InternshipDetails = () => {
 

  return (
    <>
      <div className="step">
        {Array(noSteps)
          .fill()
          .map((_, index) => (
            <div className="singleStep" key={index}>
              {index < 3 ? (
                <div className={`circle ${ "active"}`}>
                  <img src="/icons/done.png" alt="Complete" width={20} />
                </div>
              ) : (
                <div className={`circle`}>
                  <p>{index + 1}</p>
                </div>
              )}

              <p className="text">{steps[index]}</p>
            </div>
          ))}
      </div>

      <form>
        <div className="div-containers">
          <div className="domain-div">
            <label className="main_label" htmlFor="domain_radio">
              Preferred Internship Domain
            </label>
            <div id="domain_radio">
              <div>
                <input
                  type="radio"
                  required
                  name="domain"
                  id="operation_management"
                 
                />
                <label htmlFor="operation_management">
                  Operation Management
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="domain"
                  id="business_analyst"
                 
                />
                <label htmlFor="business_analyst">Business Analyst</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="domain"
                  id="human_resource"
                 
                />
                <label htmlFor="human_resource">Human Resources (HR)</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="domain"
                  id="finance"
                 
                />
                <label htmlFor="finance">Finance</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="domain"
                  id="accounting"
                 
                />
                <label htmlFor="accounting"> Accounting and bookkeeping</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="domain"
                  id="email_marketing"
                 
                />
                <label htmlFor="email_marketing">Email Marketing</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="domain"
                  id="smm"
                 
                />
                <label htmlFor="smm">SMM (Social Media Marketing)</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="domain"
                  id="content_marketing"
                 
                />
                <label htmlFor="content_marketing">Content Marketing</label>
              </div>
            </div>
          </div>
        </div>

        <div  className="div-containers">
          <div className="hear_div">
            <label className="main_label" htmlFor="hear_radio">
              Where did you hear about Digital Empowerment Pakistan?
            </label>
            <div id="hear_radio">

              <div>
                <input
                  type="radio"
                  required
                  name="heard"
                  id="social_media"
                 
                />
                <label htmlFor="social_media">Social Media (Instagram, LinkedIn etc.)</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="heard"
                  id="referral"
  
                />
                <label htmlFor="referral">Referral (Friends, Colleagues, Relatives etc.)</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="heard"
                  id="other"
  
                />
                <label htmlFor="other" className="other-container">
                  Other: <input type="text" />
                </label>
              </div>
            </div>
          </div>
        </div>


        <div  className="div-containers">
          <label htmlFor="input_file" className="heading_label main_label">CV/Resume/Portfolio:</label>
          <input type="file" name="input_file" id="input_file" style={{display : "none"}} />
          <label className="file_label" onClick={() => document.getElementById("input_file").click()}>Add File</label>

        </div>


        <div  className="div-containers">
        <label htmlFor="references" className="main_label">
            References (IF ANY)
          </label>
          <input
            type="text"
            name="references"
            id="references"
           
            placeholder="Your Answer"
          />
        </div>
      

        <div  className="div-containers">
        <label htmlFor="query" className="main_label">
            Any Query or Suggestion?
          </label>
          <input
            type="text"
            name="query"
            id="query"
           
            placeholder="Your Answer"
          />
        </div>
      
      <div  className="div-containers policy">

        <h4>Acknowledgement</h4>
        <div>
          <input
            type="checkbox"
            name="policy"
            id="policy"
          />
          <label htmlFor="policy">I have understood that internship</label>

        </div>
      </div>


        <Link to="/educationInformation">
          <button type="submit" className="next" >
            Next
          </button>
        </Link>
      </form>
    </>
  );
};

export default InternshipDetails;
