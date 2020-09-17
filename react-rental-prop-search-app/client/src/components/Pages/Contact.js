import React from 'react';
import Navbar from "../Navbar";
import "../Pages/Assets/css/style.css";


function Contact() {
    return (
        <div>
            <section id="contact">

            <h1>Contact</h1>

            <form>
                <div id="contact-name">
                    <label for="name">Name</label>
                    <br/>
                    <input type="text" id="name-contact" name="user_name" class="mytext" />
                </div>
                <div id="email">
                  <label for="mail">Email</label>
                  <br/>
                  <input type="email" id="mail" name="user_email" class="mytext"/>
                </div>
              
                <div id="message">
                  <label for="msg">Message</label>
                  <br/>
                  <textarea id="msg" name="user_message" class="mymsg"></textarea>
                </div>
               
                <div class="button">
                  <button type="submit">Submit</button>
                </div>
            </form>

            </section>

        </div>
    );
}


export default Contact;
