import HeaderPages from "../components/HeaderPages/HeaderPages"
import SectionMission from "../components/SectionMission/SectionMission"
const AboutUs = () => {
  return (
    <>
      <HeaderPages
        img="/assets/img/Headerpages.png"
        subTitle="Overview"
        title="Welcome to Little Learners Academy"
        desHeader="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
      <SectionMission/>
    </>
  )
}

export default AboutUs
