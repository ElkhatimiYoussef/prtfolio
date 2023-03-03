import AboutImage from '../../assets/youssef.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" >
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="AboutImage" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p className='polo'>
                je suis un étudiant en développement web passionné 
            par la création des applications web et la programmation. 
            je possède une solide connaissance des langages de base tels 
            que HTML, CSS et JavaScript, ainsi que des compétences en 
            programmation backend tels que Php, Python, ou Java. 
            je suis également capable d'utiliser des frameworks tels que 
            Bootstrap, NodeJs, Springboot et ReactJs pour améliorer mes expérience
                </p>
                
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About