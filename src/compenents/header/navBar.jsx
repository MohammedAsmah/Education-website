import { Link } from 'react-scroll'
import './navBar.css'
import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import menoIcon from '../../assets/menu-icon.png'
export default function NavBaR(){
    const [sticky,setSticky]=useState(false)
    const [disSideBare,setdisSideBare]=useState(false)
useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY>200 ?setSticky(true): setSticky(false)
    })
},[])
    return(
        <nav className={`container ${sticky?'dark-nav':''}`}>
            <Link to="Home" smooth={true} offset={0} duration={500} ><img  src={logo} alt="ledusity logo"/></Link>
            <ul className={`${disSideBare?"":'disSideBar'}`} >
                <li><Link to="Home" smooth={true} offset={0} duration={500} >Home</Link></li>
                <li><Link to="Programs" smooth={true} offset={-200} duration={500} >Programs</Link></li>
                <li> <Link to="About us" smooth={true} offset={-170} duration={500} >About us</Link></li>
                <li> <Link to="Compus" smooth={true} offset={-240} duration={500} >Compus</Link> </li>
                <li><Link to="Testimonials" smooth={true} offset={-240} duration={500} >Testimonials</Link></li>
                <li className='btn'><Link to="Contact" smooth={true} offset={-210} duration={500} >Contact us</Link></li>
            </ul>
            <img onClick={()=>{setdisSideBare(!disSideBare)}} src={menoIcon} alt="menu icon" className='menuIcon'/>
        </nav>
    )
}