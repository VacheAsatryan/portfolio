import Myself from '../myself/Myself';
import './chapter.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();

function Chapter() {
    return (
        <div className="chapter">
            <div className="my" id='header'>
                <Myself />
            </div>
            <div className="container">
                <div className="sections">
                    <div className="card" data-aos="zoom-out">
                        <h1>Porpouse</h1>
                        <p>Become a “senior developer”, learn as many programming languages as possible, develop and become an expert in programming.</p>
                    </div>
                    <div className="card" data-aos="fade-right">
                        <h1>Resume</h1>
                        <div className='Download'>
                            <div className='resume'> <p >If you are interested in my candidacy, you can download my resume directly
                                from this site. Without registration and SMS.</p></div>
                            <div class="wrap">
                                <button class="button">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <div className="card" data-aos="zoom-out">
                        <h1>Hobby</h1>
                        <p>A little about my hobbies. During my free time I like listening to music, reading fantasy and historical books, watching movies, playing football, doing fitness.</p>
                    </div>
                    <div className="card" data-aos="fade-left">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chapter;