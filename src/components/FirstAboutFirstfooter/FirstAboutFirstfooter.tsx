import './FirstAboutFirstfooter.css'
interface ContactItem {
    icon: string
    text: string
}

interface FirstAboutFirstfooterProps {
    logoFooter: string
    desFooter: string
    contacts: ContactItem[]
}

const FirstAboutFirstfooter = ({
    logoFooter,
    desFooter,
    contacts
}: FirstAboutFirstfooterProps) => {
    return (
        <div className="first-about-firstfooter">

        <img src={logoFooter} alt="logo" className="logofooter"/>

        <p className="desfirstfooter">{desFooter}</p>

        <div className="contact-information">
            {contacts.map((item, index) => (
            <div className="contact-item" key={index}>
                <img src={item.icon} alt="" className="iconcotact"/>
                <p>{item.text}</p>
            </div>
            ))}
        </div>

        </div>
    )
}

export default FirstAboutFirstfooter
