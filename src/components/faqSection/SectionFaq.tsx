
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import faqData from "../../Data/SectionFaq.json";
import "./CardFaq.css";
import HeaderSection from "../headerSection/headerSection";

type FaqItem = {
    Question: string;
    Answer: string;
    };

    const SectionFaq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const half = Math.ceil(faqData.length / 2);
    const col1 = faqData.slice(0, half);
    const col2 = faqData.slice(half);

    const renderColumn = (items: FaqItem[], offset: number) => {
        return items.map((item, i) => {
        const index = offset + i;

        return (
            <div
            key={index}
            className={`faq-card ${openIndex === index ? "open" : ""}`}
            >
            <div className="about-faq" onClick={() => toggle(index)}>
                <div className="question-answer-card">
                <h3 className="question">{item.Question}</h3>

                {openIndex === index && (
                    <p className="answer">{item.Answer}</p>
                )}
                </div>

                <span className="l-icon">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
            </div>
            </div>
        );
        });
    };

    return (
        <section>
            <HeaderSection
                subTitleSec="Solutions For The Doubts"
                titleSec="Frequently Asked Questions"
                sectionDec="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
            />
        <div className="section_faq">
            <div className="faq-column">{renderColumn(col1, 0)}</div>
            <div className="faq-column">{renderColumn(col2, half)}</div>
        </div>
        </section>
    );
    };

export default SectionFaq;