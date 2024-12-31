import './testimonials.css'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import back from '../../assets/back-icon.png'
import next from '../../assets/next-icon.png'
import { useState,useEffect } from 'react'
export default function Testimonials(){
    let [move,setMove]=useState(0)
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 700)

    useEffect(() => {
        const handleResize = () => {
            const isLarge = window.innerWidth > 700
            setIsLargeScreen(isLarge)

            if (move < -50 && isLarge) {
                setMove(-50)
            } else if (move < -75 && !isLarge) {
                setMove(-75)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [move])
    
function goBack(){
    if(move<0){setMove(prev=>{return prev+=25})}
}
function goNext(){
    if(window.innerWidth < 700){
if(move>(-75)){setMove(prev=>{return prev-=25})}
    }else{
        if(move>(-50)){setMove(prev=>{return prev-=25})}
    }
    
}
    return(
    <div name="Testimonials" className='testimonials container' >
        <button className='back' onClick={goBack} ><img  src={back} alt="back icon"/></button>
        <button className='next' onClick={goNext} ><img   src={next} alt="next icon"/></button>
        <div className="allsl">
        <div className="slider"  style={{transform: `translateX(${move}%)`}} >
        <div className="testimonial">
            <div className="info">
                <img src={user2} alt="first pic"/>
                <div className="name">
                <h4>Simo Asmah</h4>
                <p className="adress" >Edusity,Morocco</p>
                </div>
            </div>
            <p>
            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
            The supportive community, state-of-the-art facilities, and commitment to academic excellence
            have truly exceeded my expectations.
            </p>
        </div>

        <div className="testimonial">
            <div className="info">
                <img src={user1} alt="first pic"/>
                <div className="name">
                <h4>Willian Jackson</h4>
                <p className="adress" >Edusity,USA</p>
                </div>
            </div>
            <p>
            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
            The supportive community, state-of-the-art facilities, and commitment to academic excellence
            have truly exceeded my expectations.
            </p>
        </div>
        <div className="testimonial">
            <div className="info">
                <img src={user3} alt="first pic"/>
                <div className="name">
                <h4>Jhon Baroki</h4>
                <p className="adress" >Edusity,USA</p>
                </div>
            </div>
            <p>
            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
            The supportive community, state-of-the-art facilities, and commitment to academic excellence
            have truly exceeded my expectations.
            </p>
        </div>
        <div className="testimonial">
            <div className="info">
                <img src={user4} alt="first pic"/>
                <div className="name">
                <h4>Emily Willians</h4>
                <p className="adress" >Edusity,USA</p>
                </div>
            </div>
            <p>
            Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
            The supportive community, state-of-the-art facilities, and commitment to academic excellence
            have truly exceeded my expectations.
            </p>
        </div>
        </div>
        </div>
    </div>
    )
}