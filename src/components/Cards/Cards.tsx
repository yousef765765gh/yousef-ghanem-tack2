import "./Cards.css"
interface CardType {
    cardImg: string;
    titleCard: string;
    cardDes: string;
}

interface CardsProps {
    data: CardType[];
}

const Cards = ({ data = [] }: CardsProps) => {
    return (
        <>
        {data.map((card, index) => (
            <div className="card_share" key={index}>
            <img src={card.cardImg} alt={card.titleCard} />
            <div className="about_card">
                <h3>{card.titleCard}</h3>
                <p>{card.cardDes}</p>
            </div>
            </div>
        ))}
        </>
    );
};

export default Cards;