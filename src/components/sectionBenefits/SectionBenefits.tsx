import HeaderSection from "../headerSection/headerSection"
import cardsData from "../../Data/SectionBenefits.json"
import "./SectionBenefits.css"
interface cardsData {
    cardImg:string ,
    titleCard : string,
    cardDes :string
}
const SectionBenefits = () => {
    return (
        <section>
            <HeaderSection
                subTitleSec="Children Deserve Bright Future"
                titleSec="Our Benefits"
                sectionDec="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
            />
            <div className="contaner_benefits">
                {cardsData.map((card, index) => (
                    
                    <div className="card_benefits" key={index}>
                        <img src={card.cardImg} alt={card.titleCard} />
                        <div className="about_card">
                            <h3>{card.titleCard}</h3>
                            <p>{card.cardDes}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SectionBenefits
