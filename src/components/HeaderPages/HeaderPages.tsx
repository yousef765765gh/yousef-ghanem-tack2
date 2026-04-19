import "./HeaderPages.css"


interface HeaderPages {
    img : string 
    subTitle :string 
    title :string
    desHeader : string
}
const HeaderPages = ({img,subTitle,title,desHeader} :HeaderPages) => {
    return (
        <>
            <div className="header-pages">
                <img src={img} alt="" className="img-header"/>
                <div className="about-header-pages">
                    <div className="about-title">
                        <p className="sub-Theader">{subTitle}</p>
                        <h2 className="title-pages">{title}</h2>
                    </div>
                    <p className="des-header">{desHeader}</p>
                </div>
            </div>
        </>
    )
}

export default HeaderPages
