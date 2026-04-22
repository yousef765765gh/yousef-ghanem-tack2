import HeaderSection from "../headerSection/headerSection"
import Team from "../../Data/SectionOurTeam";
import "./SectionOurTeam.css"
const SectionOurTeam = () => {
    return (
        <section>
            <HeaderSection
                subTitleSec="Our Teachers With Experties"
                titleSec="Our Team Members"
                sectionDec="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
            />
            <div className="container-our-team">
                {Team.map((member, index) => (
                    <div className="card-team" key={index}>
                        <div className="about-name-team">
                            <div className="name-on-team">
                                <img src={member.persimg} alt={member.name} className="person-img"/>
                                <h3 className="name">{member.name}</h3>
                            </div>
                            <img src={member.message} alt="message icon" className="logo-card-team"/>
                        </div>
                        <div className="about-team">
                            <h4 className="title-team">{member.title}</h4>
                            <p className="dec-team">{member.desTeam}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default SectionOurTeam
