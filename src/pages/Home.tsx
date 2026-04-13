import SectionFaq from "../components/faqSection/SectionFaq"
import SectionNavigate from "../components/NavigateSection/SectionNavigate"
import SectionBenefits from "../components/sectionBenefits/SectionBenefits"
import SectionTestimonials from "../components/sectionTestimonials/SectionTestimonials"

const Home = () => {
    return (
        <>
            <SectionBenefits/>
            <SectionTestimonials/>
            <SectionFaq/>
            <SectionNavigate/>
        </>
    )
}

export default Home
