import './video.css';
import videospace  from './videospace.mp4';

function Video(){
    return(
        <video loop autoPlay muted className='video' src={videospace}/>
    )
}

export default Video;