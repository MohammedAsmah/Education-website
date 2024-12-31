import './gallery.css'
import gallary1 from '../../assets/gallery-1.png'
import gallary2 from '../../assets/gallery-2.png'
import gallary3 from '../../assets/gallery-3.png'
import gallary4 from '../../assets/gallery-4.png'
import white_arr from '../../assets/white-arrow.png'
export default function Gallary(){

    return(
        <div name="Compus" className='all container'>
            <div className="gallary">
            <img src={gallary1} alt="gallary pic 1"/>
            <img src={gallary2} alt="gallary pic 1"/>
            <img src={gallary4} alt="gallary pic 3"/>
            <img src={gallary3} alt="gallary pic 4"/>
            </div>
            <button className='black-btn'>See More Here<img className='white-arr' src={white_arr} alt="white arrow"/></button>
        </div>
    )
}