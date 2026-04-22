import { useState, useEffect, useMemo } from "react";
import Cards from "../Cards/Cards";
import HeaderSection from "../headerSection/headerSection";
import "./SectionOurAwards.css";
import awardsprop from "../../Data/SectionOurAwards";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SectionOurAwards = () => {
    const [index, setIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    const GAP = 40;

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width < 992) {
                setCardsPerView(1);
            } else {
                setCardsPerView(3);
            }
        };

        window.addEventListener("resize", updateSize);
        updateSize();

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const maxIndex = useMemo(
        () => Math.max(0, awardsprop.length - cardsPerView),
        [cardsPerView]
    );

    const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

    return (
        <section>
            <HeaderSection
                subTitleSec="Our Achievements"
                titleSec="Our Awards and Recognitions"
                sectionDec="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
            />
            <div className="container-awards">
                <div className="viewport-awards">
                    <div
                        className="track-awards"
                        style={{
                            gap: `${GAP}px`,
                            transform: `translateX(calc(-${index} * (100% / ${cardsPerView} + ${GAP / cardsPerView}px)))`,
                        }}
                    >
                        {awardsprop.map((card, i) => (
                            <div
                                key={i}
                                className="card-slide-awards"
                                style={{
                                    flex: `0 0 calc((100% / ${cardsPerView}) - (${GAP * (cardsPerView - 1)}px / ${cardsPerView}))`,
                                }}
                            >
                                <Cards data={[card]} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="more-cards">
                <p className="more-awards">8 More Awards</p>
                <div className="move-cards">
                    <button onClick={prev} className="to-move"><FaArrowLeft /></button>
                    <button onClick={next} className="to-move"><FaArrowRight /></button>
                </div>
            </div>
        </section>
    );
};

export default SectionOurAwards;
