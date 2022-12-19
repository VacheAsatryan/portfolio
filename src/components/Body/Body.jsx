import Header from "../header/Header";
import Video from "../videos/Video";
import Scrolling from "../scrolling/Scrolling";
import Chapter from "../chapter/Chapter";
import Foother from "../foother/Foother";
import image from '../img/Vach.jpg'

function Body() {
    return (
        <>
            <div id='header'></div>
            <div className="circle animate__animated animate__fadeInDown" style={{backgroundImage:`url(${image})`}}>
                        
                        </div>
            <Header />
            <div className='content'>
                <Video />
                <div className='myBody'>
                    <Scrolling />
                    <Chapter />
                </div>
               
            </div>
            <Foother/>
        </>
    )
}
export default Body;