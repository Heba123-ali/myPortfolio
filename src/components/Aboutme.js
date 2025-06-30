import { aboutData } from "../data/main.js";
export function aboutSection (){
    const aboutName = document.getElementById("about-name");
    const aboutProfile = document.getElementById("about-profile");
    const aboutEmail = document.getElementById("about-email");
    const aboutPhone = document.getElementById("about-phone");
    aboutName.textContent = "Name"+ " : "+ aboutData.name; 
    aboutProfile.textContent = "Profile"+ " : "+aboutData.profile; 
    aboutEmail.textContent = "Email"+ " : "+aboutData.email; 
    aboutPhone.textContent = "Phone"+ " : "+aboutData.phone; 
    
}    
export function resumeList() {
    
}
