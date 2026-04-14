import "./Hero.css"

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
        <section className="hero">
        <img src={heroVisual} alt="intro-visual" className="img-hero" />
        <div className="about-hero">
            <p className="sub-title-hero">{tagline}</p>
            <h1 className="title-hero">
            {heading}
            <span className="span">{headingAccent}</span>
            </h1>
            <p className="des-hero">{subtext}</p>
            <div className="container-hero">
            {counters.map((item, idx) => (
                <div key={idx} className="about-contaner">
                <h3 className="hero-contaner-title">{item.label}</h3>
                <p className="hero-contaner-body">{item.text}</p>
                </div>
            ))}
            </div>

        </div>
        </section>
    )
}

export default Hero