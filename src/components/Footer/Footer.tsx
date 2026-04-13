import FirstFooter from "../firstFooter/FirstFooter"
import SecAboutFooter from "../SecAboutFooter/SecAboutFooter"
import './Footer.css'
const Footer = () => {
    const texts = [
        "Terms of Service",
        "Privacy Policy",
        "Cookie Policy"
    ]

    const images = [
        "/assets/img/facbook.png",
        "/assets/img/twitter.png",
        "/assets/img/linkedin.png"
    ]
    return (
        <footer>
            <FirstFooter/>
            <SecAboutFooter
                texts={texts}
                images={images}
            />
        </footer>
    )
}

export default Footer
