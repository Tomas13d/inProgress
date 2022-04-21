import {RiWhatsappLine, RiGithubLine, RiLinkedinLine, RiInstagramLine, RiFileTextLine } from "react-icons/ri";


const SocialMedia = () => {
    return (
        <>
        <div className="social-media-container">
        <ul className="socialMedia-list">
            <li><a href="https://linkedin.com/in/tomas-demo"><RiLinkedinLine/></a></li>
            <li><a href="https://github.com/Tomas13d"><RiGithubLine/></a></li>
            <li><a href="https://ultramsg.com/m/3va2ZdI"><RiWhatsappLine/></a></li>
            <li><a href="https://www.instagram.com/tomasjdemo/"><RiInstagramLine/></a></li>
            <li><a href="#"><RiFileTextLine/></a></li>
        </ul>
    </div>

     <div className="mail-container">
     <div className="mail">
        <a href="mailto:tomas.demobio@gmail.com?subject=I saw your profile">tomas.demobio@gmail.com</a>
        
     </div>
 </div>
 </>
    )
}

export default SocialMedia;