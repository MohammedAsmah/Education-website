import './navBar.css'
import logo from '../../assets/logo.png'
export default function NavBaR(){

    return(
        <nav className='container'>
            <img src={logo} alt="ledusity logo"/>
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Compus</li>
                <li>Testimonials</li>
                <li className='btn'>Contact us</li>
            </ul>
        </nav>
    )
}