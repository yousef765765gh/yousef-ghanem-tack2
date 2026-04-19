import HeaderSection from "../headerSection/headerSection"
import cardMission from "../../Data/SectionMission"
import "./SectionMission.css"
const SectionMission = () => {
    return (
        <section>
            <HeaderSection
                subTitleSec="Mission & Visions"
                titleSec="Our Mission & Visions"
                sectionDec="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
            />
            <div className="container-mission">
            {cardMission.map((card, index) => (
                <div key={index} className="card-mission">
                        <div className="about-title-mission">
                            <h3 className="title-mis">{card.title}</h3>
                            <img src={card.img} alt={card.title} className="img-mission"/>
                        </div>
                        <p className="des-mission">{card.des}</p>
                </div>
            ))}

            </div>
            
        </section>
    )
}

export default SectionMission
