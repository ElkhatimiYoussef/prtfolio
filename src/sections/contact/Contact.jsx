import contacts from './data'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>CONTACT ME</h2>
      <p className='polo'>
        Shoot me a message via any of the links below!
      </p>
      <div className="container contact__container" data-aos="flip-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact