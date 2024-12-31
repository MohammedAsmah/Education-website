import "./programs.css"
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import programicon1 from '../../assets/program-icon-1.png'
import programicon2 from '../../assets/program-icon-2.png'
import programicon3 from '../../assets/program-icon-3.png'
export default function Programs({setPlayVid}){

    return(
        <div name="Programs" className='programs container'>
            <div onClick={() => setPlayVid(true)} className='program'>
                <img className="imgprogram" src={program1}  alt="program1"/>
                <div className="iconprogrma">
                <img  src={programicon1}  alt="programicon1"/>
                <p>Graduation Degree</p>
                </div>
            </div>
            <div onClick={() => setPlayVid(true)} className='program'>
                <img className="imgprogram" src={program2}  alt="program2"/>
                <div className="iconprogrma">
                <img  src={programicon2}  alt="programicon2"/>
                <p>Masters Degree</p>
                </div>
            </div>
            <div onClick={() => setPlayVid(true)} className='program'>
                <img className="imgprogram" src={program3}  alt="program3"/>
                <div className="iconprogrma">
                <img  src={programicon3}  alt="programicon3"/>
                <p>Post Graduation</p>
                </div>

            </div>
        </div>
    )
}