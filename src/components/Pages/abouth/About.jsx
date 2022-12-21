import Foother from '../../foother/Foother';
import './about.css';
import {Link} from 'react-router-dom';

function About(){
    return(
        <div className="about">
            <div className="aboutBody">
                <div className="aboutmenu">
                    <div className="back">
                    <Link to="/" className='name' > <h1>Vache Asatryan</h1></Link>
                    </div>
                    <div className="links">
                    <Link to="/skills" className='link'>Skills</Link>
                    <Link to="/about" className='link'>About</Link>
                    </div>
                </div>
                    
            </div>
            <Foother/>
        </div>
    )
}

export default About;