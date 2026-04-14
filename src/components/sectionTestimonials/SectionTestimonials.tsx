import { useState, useEffect, useMemo } from "react";
import testimonials from "../../Data/sectionTestimoniats.json";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import "./SectionTestimonials.css";
import HeaderSection from "../headerSection/headerSection";

const SectionTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const GAP = 40; 

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 992) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3); 
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        setIndex(0);
    }, [cardsPerView]);

    const maxIndex = useMemo(() => 
        Math.max(0, testimonials.length - cardsPerView), 
        [cardsPerView]
    );

    const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

    return (
        <section>
            <HeaderSection
                subTitleSec="Their Happy Words 🤗"
                titleSec="Our Testimonials"
                sectionDec="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
            />
        <div className="slider_container">
            <button onClick={prev} className="nav-btn"><FaArrowLeft /></button>

            <div className="viewport">
            <div
                className="track"
                style={{
                gap: `${GAP}px`,
                transform: `translateX(calc(-${index} * (100% / ${cardsPerView} + ${GAP / cardsPerView}px)))`,
                }}
            >
                {testimonials.map((item, i) => (
                <div
                    className="card-slide"
                    key={i}
                    style={{
                    flex: `0 0 calc((100% / ${cardsPerView}) - (${GAP * (cardsPerView - 1)}px / ${cardsPerView}))`
                    }}
                >
                    <div className="card-inner">
                    <img src={item.imgcard} alt="user" />
                    <div className="stars">
                        {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} color="#FFC107" />
                        ))}
                    </div>
                    <p>{item.porcard}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

            <button onClick={next} className="nav-btn"><FaArrowRight /></button>
        </div>
        </section>
    );
};

export default SectionTestimonials;