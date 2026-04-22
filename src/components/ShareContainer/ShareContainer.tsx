import Cards from "../Cards/Cards"
import "./ShareContainer.css"

interface CardType {
    cardImg: string;
    titleCard: string;
    cardDes: string;
}

interface ShareContainerProps {
    data: CardType[];
}

const ShareContainer = ({ data }: ShareContainerProps) => {
    return (
        <div className="contaner-share">
            <Cards data={data} />
        </div>
    );
};
export default ShareContainer
