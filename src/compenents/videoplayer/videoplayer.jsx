import './videoplayer.css'
import video_ from '../../assets/video.mp4'
export default function VideoPlayer({setPlayVid, Playvid}){
    const handleBackgroundClick = (e) => {
        // Only hide if clicking the background, not the video
        if (e.target.className.includes('videoPlayer')) {
            setPlayVid(false);
        }
    }

    return(
        <div onClick={handleBackgroundClick} className={`videoPlayer ${Playvid ? "" : "hiden"}`}>
            <video controls autoPlay muted src={video_}>
            </video>
        </div>
    )
}