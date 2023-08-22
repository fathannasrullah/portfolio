import { useState } from "react"
import data from "../data.json"
// import $ from "jquery"
import { CgChevronDown } from "react-icons/cg"
import { 
  // TiArrowRightOutline, 
  TiMail, 
  TiSocialLinkedin, 
  TiSocialInstagram, 
  TiSocialTwitter } from "react-icons/ti";
import fathanLogo from "../assets/images/fathan-logo.png"
import AppLogo from "./AppLogo";
import Contact from "./Contact";
import LinkProjects from "./LinkProjects";

function About() {
  const [abouts, setAbouts] = useState(data)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="container">
      <AppLogo logo={fathanLogo} />
      <section className="About"> 
        <div className="About-overview">
          <h1 data-text="fathan">{abouts.about.firstname}</h1>
          <h1 data-text="nasrullah">{abouts.about.lastname}</h1>     
          <div className="show-detail-wrapper">
            <h2>{abouts.about.profession} </h2>
            {/*<div>
                <button onClick={() => setShowDetails(!showDetails)}> 
                  {
                    !showDetails ? `show more` : `show less`
                  }
                </button>
            </div>*/}
          </div>     
        </div>
        {showDetails && 
          <div className="About-details">
            <section className="About-overview-more">
              <h1>Hi, I'm Junior Front End Developer</h1>
              <p>{abouts.about.overview}</p>
              <button onClick={() => {setShowDetails(!showDetails)}}>show less</button>
            </section>
          </div>
        }
      </section>
      <Contact 
        email={TiMail}
        linkedin={TiSocialLinkedin}
        instagram={TiSocialInstagram}
        twitter={TiSocialTwitter}
      />
      <LinkProjects CgChevronDown={CgChevronDown}/>
    </div>
  )
}

export default About