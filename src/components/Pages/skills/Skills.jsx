import './skills.css';
import { Parallax } from 'react-parallax';
import mount from '../../img/mount.jpg'
import 'animate.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/icomon/style.css';
import{ AiFillStar} from 'react-icons/ai'



function Skills() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="skills">
            <div className="skilHead">
                <div className="back">
                    <Link to="/" className='name' > <h1>Vache Asatryan</h1></Link>
                </div>
                <div className="links">
                    <Link to="/skills" className='link'>Skills</Link>
                    <Link to="/about" className='link'>About</Link>
                </div>
            </div>
            <div className="skilBody">
                <div className="datas animate__flipInX animate__animated">
                    <h1>What i do ?</h1>
                    <div className="text">
                        <p>Implemented websites, mobile applications, and landing pages from concept through deployment.Standardized all output with a new, responsive, mobile-first approach and strategy.Assessed UX and UI designs for technical feasibility by using following technologies </p>
                    </div>
                </div>
                <Parallax bgImage={mount} strength={400}>
                    <div className="paralax" >
                        <div className="skil animate__zoomIn animate__animated WOW">
                            <div className="skillSection">
                                <div className="effect">
                                    <div className="atribute">
                                        <span className='icon-html5'></span>
                                    </div>
                                    <div className="atribute bottom">
                                        <div className="compact">
                                        <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>     
                                    <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>   
                                    <AiFillStar className='star'/>  
                                        </div>
                                        <h1>Html</h1>
                                    </div>
                                </div>
                                <div className="effect">
                                    <div className="atribute ">
                                    <span className='icon-css3'></span>

                                    </div>
                                    <div className="atribute bottom">
                                    <div className="compact">
                                        <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>     
                                    <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>   
                                    <AiFillStar className='star'/>  
                                        </div>
                                        <h1>Css</h1> 
                                    </div>
                                </div>
                                <div className="effect">
                                    <div className="atribute">
                                    <span className='icon-sass'></span>

                                    </div>
                                    <div className="atribute bottom">
                                    <div className="compact">
                                        <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>     
                                    <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>   
                                    <AiFillStar className='star'/>  
                                        </div>
                                        <h1>Scss/Sass</h1>  
                                    </div>
                                </div>
                            </div>
                            <div className="skillSection">
                                <div className="effect">
                                    <div className="atribute">
                                        <span className='icon-javascript'></span>

                                    </div>
                                    <div className="atribute bottom">
                                    <div className="compact">
                                        <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>     
                                    <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>   
                                    <AiFillStar className='star'/>  
                                        </div>
                                        <h1>Java Script</h1>                             
                                    </div>
                                </div>
                                <div className="effect">
                                    <div className="atribute">
                                    <span className='icon-react'></span>

                                    </div>
                                    <div className="atribute bottom">
                                    <div className="compact">
                                        <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>     
                                    <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>   
                                    <AiFillStar className='star'/>  
                                        </div>
                                        <h1>React Js</h1> 
                                    </div>
                                </div>
                                <div className="effect">
                                    <div className="atribute">
                                    <span className='icon-node-dot-js'></span>

                                    </div>
                                    <div className="atribute bottom">
                                    <div className="compact">
                                        <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>     
                                    <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>   
                                    <AiFillStar className='star'/>  
                                        </div>
                                        <h1>Node Js</h1>  
                                    </div>
                                </div>
                            </div>
                            <div className="skillSection">
                                <div className="effect">
                                    <div className="atribute">
                                    <span className='icon-github'></span>

                                    </div>
                                    <div className="atribute bottom">
                                    <div className="compact">
                                        <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>     
                                    <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>   
                                    <AiFillStar className='star'/>  
                                        </div>
                                        <h1>Github</h1> 
                                    </div>
                                </div>
                                <div className="effect">
                                        
                                    <div className="atribute">
                                        <span className='icon-redux'></span>
                                    </div>
                                    <div className="atribute bottom">
                                    <div className="compact">
                                        <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>     
                                    <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>   
                                    <AiFillStar className='star'/>  
                                        </div>
                                        <h1>React-Redux</h1> 
                                    </div>
                                </div>
                                <div className="effect">
                                    <div className="atribute">
                                     <span className='icon-mongodb'></span>

                                    </div>
                                    <div className="atribute bottom">
                                    <div className="compact">
                                        <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>     
                                    <AiFillStar className='star'/>
                                    <AiFillStar className='star'/>   
                                    <AiFillStar className='star'/>  
                                        </div>
                                        <h1>Mongodb</h1> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    )
}

export default Skills;