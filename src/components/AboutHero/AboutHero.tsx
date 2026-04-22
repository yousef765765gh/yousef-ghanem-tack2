import "./AboutHero.css"
interface ContHeroItem {
  title: string;
  par: string;
}
interface AboutHeroProps{
    subTitleHero : string,
    TittlHero :React.ReactNode ,
    parHero : string ,
    contHeroItem: ContHeroItem[];
}

const AboutHero = ({ subTitleHero, TittlHero, parHero ,contHeroItem }: AboutHeroProps) => {
    return (
        
            <div className="about_hero">
                <div className="first_sub_hero">
                    <p className="sub_title_hero">{subTitleHero}</p>
                    <h2 className="title_hero">{TittlHero}</h2>
                    <p className="pro_hero">{parHero}</p>
                </div>
                <div className="contener_hero">
                    {contHeroItem.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.par}</p>
                    </div>
                    ))}
                </div>
            </div>
            
    )
}

export default AboutHero
