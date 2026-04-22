import HeaderSection from "../headerSection/headerSection"
import cardsStudents from "../../Data/SectionWhatStudenta";
import "./SectionWhatStudenta.css"
const SectionWhatStudenta = () => {
    return (
        <section>
            <HeaderSection
                subTitleSec="Our Features"
                titleSec="What Students Learn"
                sectionDec="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
            />
            <div className="container-students">
                {cardsStudents.map((item, index) => (
                    <div className="card-students" key={index}>
                        <div className="con-img">
                        <img src={item.StudentImg} alt={item.titleStudent} className="img-students"/>
                            </div>
                        <h3 className="title-student">
                            {item.titleStudent}
                        </h3>
                        <p className="des-student">
                            {item.StudentDes}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default SectionWhatStudenta
