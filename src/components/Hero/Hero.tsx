import AboutHero from "../AboutHero/AboutHero";
import "./Hero.css"

interface HeroProps {
  img: string;
}
const ContHeroItem = [
    {
        title:"+7000" ,
        par:"Students Passed Out"
    },
    {
        title:"+37",
        par:"Awards & Recognitions"
    },
    {
        title:"+15",
        par:"Experience Educators"
    },

]

const Hero = ({ img }: HeroProps) => {
    return (
        <div className="hero">
            <img src={img} alt="hero image" />
                <AboutHero
                    subTitleHero="Welcome to Little Learners Academy"
                    TittlHero={
                        <>
                        Where Young Minds Blossom and <span>Dreams Take Flight.</span>
                        </>
                    }
                    parHero="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
                    contHeroItem={ContHeroItem}
                />
            </div>
    );
};

export default Hero
