import { Link } from 'react-scroll'
import next from '../../assets/dark-arrow.png'
import './herosection.css'
export default function  Herosection(){

    return(
        <section name="Home" className='container '>
            <div>
    <h1>We Ensure better education for a better world</h1>
    <p>our cuttung-edge curruculm in designed to empower students with the knowledge,skills,and
experiences needed to excel in the dynamic field of education</p>
<button className='btn'><Link to="Programs" smooth={true} offset={-200} duration={500} >Explore more <img src={next} alt="" /></Link></button>
</div>
         </section>
    )
}