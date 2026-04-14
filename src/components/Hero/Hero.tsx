import "./hero.css"

interface FeatureDetail {
  label: string
  text: string
}

interface HeroProps {
  heroVisual: string      
  tagline: string        
  heading: string   
  headingAccent: string    
  subtext: string        
  counters: FeatureDetail[] 
}

const Hero = ({ heroVisual, tagline, heading, headingAccent, subtext, counters }: HeroProps) => {
    return (
        <section className="main-intro">

        <img src={heroVisual} alt="intro-visual" className="main-intro__media" />

        <div className="main-intro__content">

            <p className="main-intro__tag">{tagline}</p>

            <h1 className="main-intro__heading">
            {heading}
            <span className="main-intro__heading--accent">{headingAccent}</span>
            </h1>

            <p className="main-intro__subtext">{subtext}</p>

            <div className="main-intro__grid">
            {counters.map((item, idx) => (
                <div key={idx} className="main-intro__card">
                <h3 className="main-intro__card-title">{item.label}</h3>
                <p className="main-intro__card-body">{item.text}</p>
                </div>
            ))}
            </div>

        </div>
        </section>
    )
}

export default Hero