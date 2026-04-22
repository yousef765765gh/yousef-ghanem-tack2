
import { useNavigate } from "react-router-dom";
import HeaderSection from "../headerSection/headerSection";
import navData from "../../Data/SectionNavigate.json";
import { FaArrowRight } from "react-icons/fa";
import "./SectionNavigate.css";

const SectionNavigate = () => {
    const navigate = useNavigate();

    return (
        <section>
        <HeaderSection
            subTitleSec="Explore More"
            titleSec="Navigate through our Pages"
            sectionDec="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school."
        />

        <div className="container-navigate">
            {navData.map((item, index) => (
            <div className="card-navigate" key={index}>
                
                <h3 className="title-card-navi">{item.titleNavig}</h3>

                {/* line + circles */}
                <div className="group-line">
                <div className="circle"></div>

                <div className="lines">
                    {Array(6).fill(0).map((_, i) => (
                        <div key={i} className="borderline">
                            <div  className="line"></div>
                        </div>
                    
                    ))}
                </div>

                <div className="circle"></div>
                </div>

                <p className="dec-card-navi">{item.desNavig}</p>

                <button
                className="button-navi"
                onClick={() => navigate(item.path)}
                >
                Learn More <FaArrowRight />
                </button>

            </div>
            ))}
        </div>
        </section>
    );
};

export default SectionNavigate;