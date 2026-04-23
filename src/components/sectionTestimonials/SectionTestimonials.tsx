import { useState, useEffect, useMemo } from "react";
import testimonialsData from "../../Data/sectionTestimoniats.json";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import "./SectionTestimonials.css";
import HeaderSection from "../headerSection/headerSection";

const SectionTestimonials = () => {
    const [cards] = useState(testimonialsData);
    const [index, setIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    
    const GAP = 30; 

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

    const maxIndex = useMemo(() => 
        Math.max(0, cards.length - cardsPerView), 
        [cards.length, cardsPerView]
    );

    const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

    return (
        <section className="testimonials-section">
            <HeaderSection
                subTitleSec="Their Happy Words 🤗"
                titleSec="Our Testimonials"
                sectionDec="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
            />

            <div className="slider_main_container">
                <button onClick={prev} className="nav-btn left"><FaArrowLeft /></button>

                <div className="viewport">
                    <div
                        className="track"
                        style={{
                            gap: `${GAP}px`,
                            transform: `translateX(calc(-${index} * (100% / ${cardsPerView} + ${GAP / cardsPerView}px)))`,
                        }}
                    >
                        {cards.map((item, i) => (
                            <div
                                className="card-slide"
                                key={i}
                                style={{
                                    flex: `0 0 calc((100% - ${(cardsPerView - 1) * GAP}px) / ${cardsPerView})`
                                }}
                            >
                                <div className="card-inner">
                                    <img src={item.imgcard} alt="user" className="user-img" />
                                    <div className="stars">
                                        {[...Array(item.rating)].map((_, starIdx) => (
                                            <FaStar key={starIdx} color="#FFC107" />
                                        ))}
                                    </div>
                                    <p className="testimonial-text">{item.porcard}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={next} className="nav-btn right"><FaArrowRight /></button>
            </div>
        </section>
    );
};

export default SectionTestimonials;