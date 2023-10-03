import {FaAward} from 'react-icons/fa'
import {TbBooks} from 'react-icons/tb'
import {BiHappyHeartEyes} from 'react-icons/bi'
import {TbSchool} from 'react-icons/tb'


const data = [
        {id: 1, icon: <FaAward/>, title: 'EXPERIENCE', desc: 
        <big>
         Building a claim management web application during a 3-month OCP internship
         <br />
         <br />
        Developing a web application during a 2-month POWER INTEGRATION internship
        </big>},




        {id: 2, icon: <TbBooks/>, title: 'PROJECTS', desc: 
        <big>
         Developing Bank Management System with Spring and Angular
         <br />
         <br />
         Building MERN E-commerce Platform
         <br />
         <br />
         Creating Student Management System using PHP and Bootstrap        
        </big>},


        {id: 3, icon: <BiHappyHeartEyes/>, title: 'CERTIFICATION', desc: 



        <big>

            
                Front-End Web Development with React {' '} 
                <a href="https://www.coursera.org/account/accomplishments/verify/8UV4URUPYWC3" target="_blank" rel="noopener noreferrer" className="lienCoursera">
                    Link
                </a>

          
        <br /><br />



         Server-side Development with NodeJS, Express and MongoDB {' '}
              <a href="https://www.coursera.org/account/accomplishments/verify/TAREEM3DXN6J" target="_blank" rel="noopener noreferrer" className="lienCoursera">
                    Link
              </a>      

        <br /><br />
             Front-End Web UI Frameworks and Tools: Bootstrap 4 {' '}
              <a href="https://www.coursera.org/account/accomplishments/verify/GXZUYZN4Q8F8" target="_blank" rel="noopener noreferrer" className="lienCoursera">
                    Link
              </a>
     
         </big>
         

        },


        {id: 4, icon: <TbSchool/>, title: 'CURRENT FORMATION', desc: 
            <big>
                    Currently in my fifth year at EMSI    
            </big>},       
        ]


    export default data;