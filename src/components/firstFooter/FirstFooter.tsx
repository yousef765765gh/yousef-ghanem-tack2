import FirstAboutFirstfooter from "../FirstAboutFirstfooter/FirstAboutFirstfooter"
import SecAboutFirstfooter from "../SecAboutFirstfooter/SecAboutFirstfooter"
import logoFooter from "/assets/img/Logo.png"
import './FirstFooter.css'

const FirstFooter = () => {
    const contacts = [
        {
        icon: "/assets/img/email.png",
        text: "hello@littlelearners.com"
        },
        {
        icon: "/assets/img/call.png",
        text: "+91 91813 23 2309"
        },
        {
        icon: "/assets/img/location.png",
        text: "Somewhere in the World"
        }
    ]
    const footerData = [
    {
        title: "Home ",
        items: ["Features", "Our Testimonials", "FAQ"]
    },
    {
        title: "About Us",
        items: ["Our Mission", "Our Vission", "Awards and Recognitions", "History" ,"Teachers"]
    },
    {
        title: "Academics",
        items: ["Special Features", "Gallery"]
    },
    {
        title: "Contact Us",
        items: ["Information", "Map & Direction"]
    }
]

    return (
        <>
        <div className="first-footer">
            <FirstAboutFirstfooter
            logoFooter={logoFooter}
            desFooter="We believe in the power of play to foster creativity, problem-solving skills, and imagination."
            contacts={contacts}
            />
            <SecAboutFirstfooter
                data={footerData}
            />
        </div>
        </>
    )
}

export default FirstFooter
