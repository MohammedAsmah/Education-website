import './contact.css';
import { useState } from 'react';
import whiteico from '../../assets/white-arrow.png'
import mssicon from '../../assets/msg-icon.png'
import emailicon from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import adresss from '../../assets/location-icon.png'
export default function Contact(){
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "a14d4007-5307-4f8d-bd2d-a577fd385249");
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    if (data.success) {
        setResult(data.message);
        event.target.reset();
    } else {
        console.log("Error", data);
        setResult(data.message);
    }
    };
    return(
        <div name="Contact" className="contact container">
            <div className="contact-info">
                <h4>Send us a message<img src={mssicon} alt="icon"/> </h4>
                <p>Feel free to reach out through contact form or find our
                    contact information below. Your feedback, questions,
                    and suggestions are important to us as we strive to
                    provide exceptional service to our university community.
                    </p>
                    <ul>
                        <li><img src={emailicon} alt="icon"/>SimoAsmah@gmail.com</li>
                        <li><img src={phone} alt="icon"/>212+ 659571445</li>
                        <li><img src={adresss} alt="icon"/>77 Massachusetts Ave, CambridgeMA 02139, United States</li>
                    </ul>
            </div>
            <div className="message">
                <form onSubmit={onSubmit}>
                    <label for="name">Your name</label>
                    <input id="name" required placeholder="Enter your name"/>
                    <label for="phone">Phone Number</label>
                    <input id="phone"  required placeholder="Enter your mobile number"/>
                    <label for="email">Your Email</label>
                    <input id="email" type="email" required placeholder="Enter your email"/>
                    <label for="message">Write your messages here</label>
                    <textarea id="message" placeholder="Enter your message"></textarea>
                    <button className='black-btn' >Submit now <img src={whiteico} alt="icon"/> </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}