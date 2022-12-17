import './header.css';
import 'animate.css';
import image from '../../components/img/Vach.jpg';
import { Route,Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <header>
                <div className="header animate__animated animate__fadeIn"  >
                    <div className="head">
                        <div className="data">
                        <Link to="/" > <h1>Vache Asatryan</h1></Link>
                           
                        </div>
                        <div className="circle animate__animated animate__fadeInDown" style={{backgroundImage:`url(${image})`}}>
                            {/* <img src={image} alt="Vache" className='jpg'/> */}
                        </div>
                        <div className="menu">
                           <Link to="/skills">Skills</Link>
                           

                         
                        </div>
                    </div>
                </div>
            </header>
        </header>
    )
}

export default Header;