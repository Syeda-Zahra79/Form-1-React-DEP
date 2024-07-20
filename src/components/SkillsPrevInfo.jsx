import { Link } from 'react-router-dom'
import { noSteps, steps } from "../constants";
import '../styles/SkillsPrevInfo.css'


const SkillsPrevInfo = () => {
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
         {/* Previous Information */}
      <div className="prev_info">
        <label htmlFor="prev_exp" className="main_label">
          Explain your previous experiences
        </label>
        <textarea
          name="prev_exp"
          id="prev_exp"
          rows={8}
        />
      </div>

      {/* Skills Information */}
      <div className="skills_info">
        <label htmlFor="skills" className="main_label">
          Select Your Best Skills
        </label>
        <div>
          <div>
            <input type="checkbox" name="ls" id="ls" />
            <label htmlFor="ls">Leadership</label>
          </div>

          <div>
            <input type="checkbox" name="ls" id="ls" />
            <label htmlFor="ls">Leadership</label>
          </div>

          <div>
            <input type="checkbox" name="ls" id="ls" />
            <label htmlFor="ls">Leadership</label>
          </div>

          <div>
            <input type="checkbox" name="ls" id="ls" />
            <label htmlFor="ls">Leadership</label>
          </div>

          <div>
            <input type="checkbox" name="ls" id="ls" />
            <label htmlFor="ls">Leadership</label>
          </div>

          <div>
            <input type="checkbox" name="ls" id="ls" />
            <label htmlFor="ls">Leadership</label>
          </div>

          <div>
            <input type="checkbox" name="ls" id="ls" />
            <label htmlFor="ls">Leadership</label>
          </div>
          <div>
            <input type="checkbox" name="ls" id="ls" />
            <label htmlFor="ls">Leadership</label>
          </div>
          <div>
            <input type="checkbox" name="ls" id="ls" />
            <label htmlFor="ls">Leadership</label>
          </div>
          <div>
            <input type="checkbox" name="ls" id="ls" />
            <label htmlFor="ls">Leadership</label>
          </div>
        </div>
      </div>
        <button type="submit">Apply</button>
        <Link to="/socialInformation">
        <button  className="back">Back</button>
        </Link>
    </form>
    </>
  )
}

export default SkillsPrevInfo