import HeaderSection from "../headerSection/headerSection"
import specialProp from "../../Data/SectionSpecial"
import ShareContainer from "../ShareContainer/ShareContainer"
const SectionSpecial = () => {
    return (
        <>
        <section>
            <HeaderSection
                subTitleSec="Our Features"
                titleSec="Our Special Features"
                sectionDec="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            />
            <ShareContainer
                data={specialProp}
            />
        </section>
        </>
    )
}

export default SectionSpecial
