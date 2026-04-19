import HeaderSection from "../headerSection/headerSection"
import cardsData from "../../Data/SectionBenefits.ts"
import Cards from "../Cards/Cards.tsx"

const SectionBenefits = () => {
    return (
        <section>
            <HeaderSection
                subTitleSec="Children Deserve Bright Future"
                titleSec="Our Benefits"
                sectionDec="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
            />
            <Cards
                data={cardsData}
            />
        </section>
    )
}

export default SectionBenefits
