import  "./headerSection.css"
interface HeaderSectionProps{
    subTitleSec : string,
    titleSec :string ,
    sectionDec :string 
}
const HeaderSection = ({subTitleSec ,titleSec ,sectionDec} : HeaderSectionProps) => {
    return (
        <>
            <div className="header_section">
                <p className="sub_title_sec">{subTitleSec}</p>
                <h2 className="title_sec">{titleSec}</h2>
                <p className="section_dec">{sectionDec}</p>
            </div>
        </>
    )
}

export default HeaderSection
