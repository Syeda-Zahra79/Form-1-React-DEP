import "../styles/SocialLinks.css"
import { Link } from "react-router-dom";
import { noSteps, steps } from "../constants";


const SocialLinks = () => {
  return (
    <>
      <div className="step">
        {Array(noSteps)
          .fill()
          .map((_, index) => (
            <div className="singleStep"  key={index}>
              <div className={`circle ${index < 2 && "active"}`}>
                <img src="/icons/done.png" alt="Complete" width={20} />
              </div>
              <p className="text">{steps[index]}</p>
              <div className={`line ${index < 2 && "active"}`}></div>
            </div>
          ))}
      </div>
    <form>
      <div className="social_info">
        <label htmlFor="fb_link" className="main_label">
          Facebook Link
        </label>
        <input
          type="text"
          name="fb_link"
          id="fb_link"
          placeholder="Optional"
        />
        <label htmlFor="insta_link" className="main_label">
          Instagram Link
        </label>
        <input
          type="text"
          name="insta_link"
          id="insta_link"
          placeholder="Optional"
        />
        <label htmlFor="li_link" className="main_label">
          LinkedIn Link
        </label>
        <input
          type="text"
          name="li_link"
          id="li_link"
          placeholder="Optional"
        />
      </div>
      <Link to="/skillsInformation">
        <button type="submit">Next</button>
      </Link>
      <Link to="/educationInformation">
        <button  className="back">Back</button>
        </Link>
    </form>
    </>
  );
};

export default SocialLinks;
