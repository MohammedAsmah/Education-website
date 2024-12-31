import { useState } from "react";
import NavBaR from "./compenents/header/navBar";
import Herosection from "./compenents/herosection/herosetion.jsx";
import Tiltles from "./compenents/title/TItles.jsx";
import Programs from "./compenents/programs/programs.jsx";
import About from "./compenents/about/about.jsx";
import Gallary from "./compenents/gallery/gallery.jsx";
import Testimonials from "./compenents/testemonials/testemonails.jsx";
import Contact from "./compenents/contact/contact.jsx";
import Footer from "./compenents/footer/footer.jsx";
import VideoPlayer from "./compenents/videoplayer/videoplayer.jsx";
function App() {
const [Playvid,setPlayVid]=useState(false)
return(
  <div style={{position:'relative'}} >
<NavBaR/>
<Herosection/>
<Tiltles subtitle={'our program'} title={"what we offer"}/>
<Programs setPlayVid={setPlayVid} />
<About setPlayVid={setPlayVid}  />
<Tiltles subtitle={'gallary'} title={"compus photos"}/>
<Gallary/>
<Tiltles subtitle={'testimonials'} title={"what student says"}/>
<Testimonials/>
<Tiltles subtitle={'contact us'} title={"get in touch"}/>
<Contact/>
<Footer/>
<VideoPlayer setPlayVid={setPlayVid} Playvid={Playvid} />
  </div>
)

}

export default App;
