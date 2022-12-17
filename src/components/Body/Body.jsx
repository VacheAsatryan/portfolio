import Header from "../header/Header";
import Video from "../videos/Video";
import Scrolling from "../scrolling/Scrolling";
import Chapter from "../chapter/Chapter";
import Foother from "../foother/Foother";

function Body() {
    return (
        <>
            <div id='header'></div>
            <Header />
            <div className='content'>
                <Video />
                <div className='myBody'>
                    <Scrolling />
                    <Chapter />
                </div>
            </div>
            <Foother />
        </>
    )
}
export default Body;