import SectionFaq from "../components/faqSection/SectionFaq"
import SectionNavigate from "../components/NavigateSection/SectionNavigate"
import SectionBenefits from "../components/sectionBenefits/SectionBenefits"
import SectionTestimonials from "../components/sectionTestimonials/SectionTestimonials"
import Hero from "../components/Hero/Hero"

const Home = () => {
    const  FeatureDetail = [
        {
            label :"+7000",
            text : "Students Passed Out"
        },
        {
            label :"+37",
            text : "Awards & Recognitions"
        },
        {
            label :"+15",
            text : "Experience Educators"
        }
    ]
    return (
        <>
            <Hero
                heroVisual="/assets/img/imghero.png"
                tagline="Welcome to Little Learners Academy"
                heading="Where Young Minds Blossom and "
                headingAccent="Dreams Take Flight"
                subtext="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
                counters={FeatureDetail}
            />
            <SectionBenefits/>
            <SectionTestimonials/>
            <SectionFaq/>
            <SectionNavigate/>
        </>
    )
}

export default Home
