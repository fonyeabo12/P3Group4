import React from "react";
import Navbar from "../Navbar";
import image from "./Assets/images/Photo.jpg";
import "../Pages/Assets/css/style.css";


const thumbNail = {
  maxWidth: '15%',
  paddingTop: '2px',
  
};


function Team() {
    let url="www.linkedin.com/in/franklin-onyeabo";
    let github="https://github.com/fonyeabo12";
    let email="fonyeabo12@gmail.com";
    return (
        <div>
            <section id="about">
                <main className="row">


                    <h1>About Me</h1>

                    <hr />

                    <img id="profile" className="rounded img-thumbnail rounded-circle sm-col-3" style={thumbNail}  src={image}  alt="profile" />
                    <p>I am presently a student at the Houston Coding Boot Camp studing Full Stack Web Development. It is my intention to learn new skills to equipe me as I enter the Information Technology industry with my Project Management background.</p>
                    <p>A resident of Houston, the Oil capital of the world and home to the Houston Asros and Houston Rockets.</p>  
                    <p>My hobbies are coding, playig chess,boxing and of course football, the original football that is.</p>  
                    <p>I am open to challenges and undertake self development endervors regularly.</p>  


                </main>

                <footer id="pageFooter">

                    <br />
                    <div className="rightCol">
                        <p><a href= "LinkedIn:{url}" title="LinkedIn">LinkedIn: franklin-onyeabo</a></p>
                        <p><a href="Github:{github}" title="Github">Github: fonyeabo12</a></p>
                        <p><a href="Email:{email}"  title="Email">Email: fonyeabo12@gmail.com</a></p>
                        <p><a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:5ff3debc-d551-4745-8292-79f5097cb844"  title="Resume">Resume</a></p>
                    </div>


                </footer>


            </section>
            

        </div>
    );
}





export default Team;
