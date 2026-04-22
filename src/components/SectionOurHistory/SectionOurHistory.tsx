// import HeaderSection from "../headerSection/headerSection"
// import history from "../../Data/SectionOurHistory";
// import "./SectionOurHistory.css"
// const SectionOurHistory = () => {
//     return (
//         <>
//         <section>
//             <HeaderSection
//                 subTitleSec="Our Progressive Journey"
//                 titleSec="Our History"
//                 sectionDec="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
//             />
//             <div className="container-history">
//                 <div className="container-cards">
//                 {history.map((item, index) => (
//                 <div className="card-history" key={index}>
                    
//                     <div className="connector-section">
//                         <div className="node-circle"></div>
//                         <div className="sandwich-line-horizontal"></div>
//                         <div className="node-circle"></div>
//                     </div>
//                     <div className="year-history">
//                         <img 
//                             src={item.img} 
//                             alt={item.title} 
//                             className="squire-year"
//                         />
//                         <h3 className="year">{item.year}</h3>
//                     </div>
//                     <div className="about-history">
//                         <h4 className="title-history">{item.title}</h4>
//                         <p className="des-history">{item.desHisrtory}</p>
//                     </div>
//                 </div>
//             ))}
//                 </div>
//             </div>
//         </section>
            
//         </>
//     )
// }

// export default SectionOurHistory
import  { useLayoutEffect, useRef } from "react";
import HeaderSection from "../headerSection/headerSection";
import history from "../../Data/SectionOurHistory";
import "./SectionOurHistory.css";



const SectionOurHistory = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const vlineRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const positionVline = () => {
            const container = containerRef.current;
            const vline = vlineRef.current;
            
            if (!container || !vline) return;

            const leftNodes = container.querySelectorAll<HTMLDivElement>("[data-node='left']");
            if (leftNodes.length < 2) return;

            const containerRect = container.getBoundingClientRect();
            const firstNode = leftNodes[0].getBoundingClientRect();
            const lastNode = leftNodes[leftNodes.length - 1].getBoundingClientRect();

            const nodeCenterX = firstNode.left + firstNode.width / 2 - containerRect.left;

            const topY = firstNode.top + firstNode.height / 2 - containerRect.top;

            const bottomY = lastNode.top + lastNode.height / 2 - containerRect.top;

            vline.style.left = `${nodeCenterX}px`;
            vline.style.top = `${topY}px`;
            vline.style.height = `${bottomY - topY}px`;
        };

        document.fonts.ready.then(positionVline);
        
        window.addEventListener("resize", positionVline);
        window.addEventListener("load", positionVline);

        const timeout = setTimeout(positionVline, 100);

        return () => {
            window.removeEventListener("resize", positionVline);
            window.removeEventListener("load", positionVline);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <section>
            <HeaderSection
                subTitleSec="Our Progressive Journey"
                titleSec="Our History"
                sectionDec="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
            />
            <div className="container-history">
                <div className="container-cards" ref={containerRef}>

                    <div className="vline" ref={vlineRef}></div>

                    {history.map((item , index: number) => (
                        <div className="card-history" key={index}>
                            <div className="contaner-year">
                                <div className="connector-section">
                                <div className="node-circle" data-node="left"></div>
                                <div className="sandwich-line-horizontal"></div>
                                <div className="node-circle"></div>
                            </div>

                            <div className="year-history">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="squire-year"
                                />
                                <h3 className="year">{item.year}</h3>
                            </div>
                            </div>
                            

                            <div className="about-history">
                                <h4 className="title-history">{item.title}</h4>
                                <p className="des-history">{item.desHisrtory}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionOurHistory;