import React, { useRef } from 'react';
import '../Contact us/Contact.css';
import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";



export default function Contact() {


    const form = useRef();



    const SERVICE_ID = "service_20x1skh";
const TEMPLATE_ID = "template_8tg4dot";
const USER_ID = "m8pmJWQ6woIM5ToOA";


    
        const handleOnSubmit = (e) => {
          e.preventDefault();
          emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
              console.log(result.text);
              Swal.fire({
                icon:"‘success",
                title: "Message Sent Successfully"
              })
            }, (error) => {
              console.log(error.text);
              Swal.fire({
                icon: "error",
                title: "Ooops, something went wrong",
                text: error.text,
              })
            });
          e.target.reset()
        };


    return (
        <section className='contact' id='contact-us'>
            <div className='container contact-us'>
                <h2 className="section-title">Send us a message</h2>
                <p className="paragraph"></p>
                <div className="contact-body">
                    <div className="contact-sec">
                        <form ref={form} onSubmit={handleOnSubmit}>
                            <div className="form-control">
                                <input type='text' id='name'   name='name'className='contact-input' onChange={nameChange} placeholder='Name'/>
                                <FaCheckCircle />
                                <FaExclamationCircle />
                            </div>
                            <div className="form-control">
                                <input type='email' id='email'  name='email' className='contact-input' onChange={emailChange} placeholder='Email'/>
                                <FaCheckCircle />
                                <FaExclamationCircle />
                            </div>
                            <div className="form-control">
                                <input type='number' id='phone'  name='phone' className='contact-input' onChange={phoneChange} placeholder='Phone'/>
                                <FaCheckCircle />
                                <FaExclamationCircle />
                            </div>
                            <div className="form-control">
                                <select  name='service' className='contact-input' title='Select Option' required>
                                    <option value="">Choose Service</option>
                                    <option value="Web Design">Web Design</option>
                                    <option value="Graphic Design">Graphics Design</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Seo">SEO and Marketing</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <textarea id='message' name='message' className='contact-message' onChange={messageChange} placeholder='Message'></textarea>
                                <FaCheckCircle />
                                <FaExclamationCircle />
                            </div>
                            <input type="submit" className='contact-submit' value="Submit Now" />
                        </form>
                    </div>

                    <div className="map">


                  <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ideadac+(IDEADAC%20Pvt.%20ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/marine-gps/">shipping gps</a></iframe>

                    </div>
                </div>
            </div>
        </section>
    );
}



function nameChange(){
    const Name = document.getElementById('name');
    if(Name.value.trim() !== ''){
        setSuccess(Name, 'inp');
    }
    else{
        setError(Name, 'inp');
    }
}

function emailChange(){
    const Email = document.getElementById('email');
    if(validateEmail(Email) === true){
        setSuccess(Email, 'inp');
    }
    else{
        setError(Email, 'inp');
    }
}

function phoneChange(){
    const Phone = document.getElementById('phone');
    if(Phone.value.trim() !== ''){
        setSuccess(Phone, 'inp');
    }
    else{
        setError(Phone, 'inp');
    }
}

function messageChange() {
    const Message = document.getElementById('message');
    if(Message.value.trim() !== ''){
        setSuccess(Message, 'textarea');
    }
    else {
        setError(Message, 'textarea');
    }

}


function setSuccess(input, inp_type){
    const form_control = input.parentElement;
    if(inp_type === 'textarea'){
        form_control.className = 'form-control msg success';
    }
    else{
        form_control.className = 'form-control success';
    }
}

function setError(input, inp_type){
    const form_control = input.parentElement;
    if(inp_type === 'textarea'){
        form_control.className = 'form-control msg error';
    }
    else{
        form_control.className = 'form-control error';
    }
}


function validateEmail(input) {
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value.match(validRegex)) {
      return true;
    } 
    else {
      return false;
    }

}