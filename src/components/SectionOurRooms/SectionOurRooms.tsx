
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeaderSection from "../headerSection/headerSection";
import { roomsData } from "../../Data/SectionOurRooms";
import "./SectionOurRooms.css"

const SectionOurRooms = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [cardsPerView, setCardsPerView] = useState(4);
    const [imageIndexes, setImageIndexes] = useState<{ [key: string]: number }>({});

    const GAP = 40;

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width < 992) {
                setCardsPerView(1); 
            } else {
                setCardsPerView(4);
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const filters = ["all", ...roomsData.map((room) => room.title)];

    const filteredRooms = activeFilter === "all"
        ? roomsData
        : roomsData.filter((room) => room.title === activeFilter);

    useEffect(() => {
        const reset: { [key: string]: number } = {};
        filteredRooms.forEach((room) => {
            reset[room.title] = 0;
        });
        setImageIndexes(reset);
    }, [activeFilter, filteredRooms]);

    const nextImage = (title: string, length: number) => {
        setImageIndexes((prev) => ({
            ...prev,
            [title]: (prev[title] ?? 0) >= length - cardsPerView ? 0 : prev[title] + 1,
        }));
    };

    const prevImage = (title: string, length: number) => {
        setImageIndexes((prev) => ({
            ...prev,
            [title]: (prev[title] ?? 0) <= 0 ? Math.max(0, length - cardsPerView) : prev[title] - 1,
        }));
    };

    return (
        <section>
            <HeaderSection
                subTitleSec="Our Gallery"
                titleSec="Our Rooms Gallery"
                sectionDec="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
            />
            <div className="room-section">
                <div className="filter">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`type-filter ${activeFilter === filter ? "active" : ""}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <div className="container-room">
                    {filteredRooms.map((room, i) => (
                        <div key={i} className="card-room">
                            <div className="container-img-room"
                                style={{
                                    gap: `${GAP}px`,
                                }}
                            >
                                {room.images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        className="img-room"
                                        style={{
                                            flex: `0 0 ${cardsPerView == 1 ? "100%" : `calc((100% / ${cardsPerView}) - (${GAP * (cardsPerView - 1)}px / ${cardsPerView}))`}`,
                                            width: `${cardsPerView == 1 ? "100%" : `calc((100% / ${cardsPerView}) - (${GAP * (cardsPerView - 1)}px / ${cardsPerView}))`}`,
                                            transition: "0.5s ease",
                                            transform: `translateX(calc(-${imageIndexes[room.title] ?? 0} * (100% + ${cardsPerView === 1 ? GAP : GAP}px)))`,
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="title-move">
                                <h3 className="title-room">{room.title}</h3>
                                <div className="to-track-img">
                                    <button className="button-track" onClick={() => prevImage(room.title, room.images.length)}>
                                        <FaArrowLeft />
                                    </button>
                                    <button className="button-track" onClick={() => nextImage(room.title, room.images.length)}>
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                            <p className="dec-room">{room.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionOurRooms;