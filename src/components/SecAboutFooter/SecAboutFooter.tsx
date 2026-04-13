import './SecAboutFooter.css'

interface Props {
    texts: string[]
    images: string[]
}

const SecAboutFooter = ({ texts, images }: Props) => {
    return (
        <div className="sectypefooter">
        <div className="firstaboutsecfooter">
            <div className="text-group">
                {texts.map((text, index) => (
                <p key={index}>{text}</p>
                ))}
            </div>

            <div className="image-group">
                {images.map((img, index) => (
                <img key={index} src={img} alt="" className='logosotialmidia' />
                ))}
            </div>
        </div>
            <p className='dec-end'>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
        </div>
    )
}

export default SecAboutFooter