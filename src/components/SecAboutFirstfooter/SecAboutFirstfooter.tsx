import './SecAboutFirstfooter.css'
interface ListItem  {
  title: string
  items: string[]
}

interface Props {
  data: ListItem[]
}

const SecAboutFirstfooter = ({ data }: Props) => {
    return (
        <div className="sec-about-first">

        {data.map((column, index) => (
            <ul key={index} className="footer-column">

            <li className="title">{column.title}</li>

            {column.items.map((item, i) => (
                <li key={i} className='itemfooter'>{item}</li>
            ))}

            </ul>
        ))}

        </div>
    )
}

export default SecAboutFirstfooter