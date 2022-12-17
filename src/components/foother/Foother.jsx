import './foother.css';
import {GrLinkedin} from 'react-icons/gr'
import {GrFacebook} from 'react-icons/gr'
import {SiInstagram} from 'react-icons/si'


function Foother(){
    return(
        <div className="foother" id='contact'>
                <h1 className='contacte'>Contact</h1>
                <div className="sec">

                  <p>  Email:   vach.asatryan21@gmail.com</p>
                   <p> Phone:  +374-93-24-99-03</p>

                    </div>
                    <div className="sec end">
                   <a href="https://www.linkedin.com/in/vache-asatryan-29346324a/" target='_blank'> <GrLinkedin size='40px' className='Icon' /></a>
                   <a href="https://www.facebook.com/vach.asatryan.37" target='_blank'> <GrFacebook size='40px' className='Icon' /></a>
                   <a href="https://www.instagram.com/wyc_daycc/?next=%2F" target='_blank'> <SiInstagram size='40px' className='Icon' /></a>
                    </div>
        </div>
    )
}


export default Foother;