import './about.css'
import aboutimg from "../../assets/about.png"
import play from "../../assets/play-icon.png"
export default function About({setPlayVid}){

    return(
        <div name="About us" className="about container">
            <div className="image_exp" >
                <img className="image" src={aboutimg} alt="about"/>
                <img className="play" onClick={() => setPlayVid(true)} src={play} alt="play"/>
                
            </div>
            <div className="description" >
                <h4>about university</h4>
                <h1>Nurturing Tomorrow's Leaders Today</h1>
                <p>
                Embark on a transformative educational journey with our university's comprehensive education
                programs. Our cutting-edge curriculum is designed to empower students with the knowledge,
                skills, and experiences needed to excel in the dynamic field of education.
                </p>
                <p>
                With a focus on innovation, hands-on learning, and personalized mentorship, 
                our programs prepare aspiring educators to make a meaningful impact in classrooms, 
                schools, and communities.
                </p>
                <p>
                Whether you aspire to become a teacher, administrator, counselor, or educational leader,
                our diverse range of programs offers the perfect pathway to achieve your goals
                and unlock your full potential in shaping the future of education.
                </p>
            </div>
        </div>
    )
}