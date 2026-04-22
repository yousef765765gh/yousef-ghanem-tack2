import SectionFaq from "../components/faqSection/SectionFaq"
import SectionNavigate from "../components/NavigateSection/SectionNavigate"
import SectionBenefits from "../components/sectionBenefits/SectionBenefits"
import SectionTestimonials from "../components/sectionTestimonials/SectionTestimonials"
import Hero from "../components/Hero/Hero"

const Home = () => {
    return (
        <>
            <Hero
                img="/assets/img/imghero.png"
            />
            <SectionBenefits/>
            <SectionTestimonials/>
            <SectionFaq/>
            <SectionNavigate/>
        </>
    )
}

export default Home
