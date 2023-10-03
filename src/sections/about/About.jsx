import AboutImage from '../../assets/youssef.jpg'
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
                Mon intérêt se porte sur le développement web 
                et la création d'applications. Je possède une solide maîtrise 
                des langages de base tels qu'HTML, CSS et JavaScript, ainsi que 
                des compétences en programmation backend avec des langages comme Java , 
                Python et Php. J'utilise également des frameworks comme Spring Boot, Node.js, 
                React.js et Bootstrap pour améliorer mes compétences. Récemment, j'ai élargi 
                mes connaissances en incorporant des technologies telles que Spring, React.js et Angular 
                </p>
                
            </div>
        </div>
    </section>
  )
}

export default About