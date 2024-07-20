import { Link } from "react-router-dom";
import { noSteps, steps } from "../constants";
import { useEffect, useRef, useState } from "react";

import "../styles/PersonalDetails.css";

const PersonalDetails = () => {
  const buttonRef = useRef();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    waNumber: "",
    gender: "",
  });

  useEffect(() => {
    if (
      userData.name != "" &&
      userData.email != "" &&
      userData.waNumber != "" &&
      userData.gender != ""
    ) {
      buttonRef.current.disabled = false;
    } else {
      buttonRef.current.disabled = true;
    }
  }, [userData]);

  return (
    <>
      <div className="step">
        {Array(noSteps)
          .fill()
          .map((_, index) => (
            <div className="singleStep" key={index}>
              {index < 1 ? (
                  <div className={`circle ${index < 1 && "active"}`}>
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

        <div className="personal_info">
          <label htmlFor="name" className="main_label">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Enter Your Name Here"
          />

          <label htmlFor="email" className="main_label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Enter Your Email Here"
          />

          <label htmlFor="whatsapp_no" className="main_label">
            WhatsApp Number
          </label>
          <input
            type="number"
            name="whatsapp_no"
            id="whatsapp_no"
            required
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, waNumber: e.target.value }))
            }
            placeholder="Enter Your Whatsapp Number Here"
          />

          <div className="gender_div">
            <label className="main_label" htmlFor="gender-radio">
              Gender
            </label>
            <div id="gender-radio">
              <div>
                <input
                  type="radio"
                  required
                  name="gender"
                  id="male"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.id }))
                  }
                />
                <label htmlFor="male">Male</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="gender"
                  id="female"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.id }))
                  }
                />
                <label htmlFor="female">Female</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="gender"
                  id="others"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.id }))
                  }
                />
                <label htmlFor="others">Others</label>
              </div>
            </div>
          </div>

          
          <div className="country_div">
            <label className="main_label" htmlFor="country-radio">
              Country
            </label>
            <div id="country-radio">
              <div>
                <input
                  type="radio"
                  required
                  name="country"
                  id="pakistani"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.id }))
                  }
                />
                <label htmlFor="pakistani">Pakistani</label>
              </div>

              <div>
                <input
                  type="radio"
                  required
                  name="country"
                  id="international"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.id }))
                  }
                />
                <label htmlFor="international">International</label>
              </div>

            </div>
          </div>
        </div>

        <div className="personal_info">
          <label htmlFor="input_file" className="heading_label">Formal Picture</label>
          <input type="file" name="input_file" id="input_file" style={{display : "none"}} />
          <label className="file_label" onClick={() => document.getElementById("input_file").click()}>Add File</label>
        </div>
        <Link to="/educationInformation">
          <button type="submit" className="next" disabled ref={buttonRef}>
            Next
          </button>
        </Link>
      </form>
    </>
  );
};

export default PersonalDetails;
