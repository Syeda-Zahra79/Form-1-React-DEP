import { Link } from "react-router-dom";
import { noSteps, steps } from "../constants";
import "../styles/EducationInfo.css";

const EducationInfo = () => {


  return (
    <>
      <div className="step">
        {Array(noSteps)
          .fill()
          .map((_, index) => (
            <div className="singleStep" key={index}>
              <div className={`circle ${index < 2 && "active"}`}>
                <img src="/icons/done.png" alt="Complete" width={20} />
              </div>
              <p className="text">{steps[index]}</p>
              
            </div>
          ))}
      </div>

      <form>
        {/* Education Information */}
        <div className="edu_info">
          <label htmlFor="inst_name" className="main_label">
            University/College Name
          </label>
          <input
            type="text"
            name="inst_name"
            id="inst_name"
            placeholder="Enter Your Institution Name Here"
          />
          <label htmlFor="highest" className="main_label">
            Highest Academic Qualification
          </label>
          <input
            type="text"
            name="highest"
            id="highest"
            placeholder="Enter Your Highest Academic Qualification Here"
          />

          <label htmlFor="year_study" className="main_label">
            Year/Semester of Study
          </label>
          <input
            type="number"
            name="year_study"
            id="year_study"
            placeholder="Enter Your Passing Year Here"
          />
        </div>
        <Link to="/internshipDetails">
          <button className="next" type="submit">
            Next
          </button>
        </Link>
      </form>
    </>
  );
};

export default EducationInfo;
