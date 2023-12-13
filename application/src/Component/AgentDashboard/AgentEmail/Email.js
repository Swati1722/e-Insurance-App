import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import './Email.css'
import image from '../../../Image/email.svg'

const Email = () => {

  const form = useRef();
  const [done, setDone] = useState(false)


//   const sendEmail = (e) => {
//         e.preventDefault();
//        emailjs
//       .sendForm("service_9plciv9","template_0bkeohb", form.current, "6VKNcJckGq6T5JsDH")
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//           form.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };


const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_9plciv9", "template_0bkeohb", form.current, "6VKNcJckGq6T5JsDH")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          // Clear the form fields using individual refs
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
          setTimeout(() => {
            setDone(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  


  return (
    <>
        <div className="contact-form" id="contact">
            <div className="w-left">
                <div className="awesome">
                <img
                    style={{ height: '60vh', width: '60vh' }}
                    src={image}
                    alt="Phone image"
                />
                
                </div>
            </div>
        
            <div className="c-right">
                <div className="mail-tittle" style={{alignItems:"center"}}>

                    <h1>Email</h1>
                </div>
                <div className="mail-form"> 
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group-mail">
                            {/* <label htmlFor="Name"> Name</label> */}
                            <input type="text" name="user_name" className="user"  placeholder="Name" />
                        
                        </div>
                        <div className="form-group-mail">
                            {/* <label htmlFor="Email"> Email</label> */}
                            <input type="email" name="user_email" className="user" placeholder="Email"/>
                        </div>
                        
                        <textarea name="message" className="user" placeholder="Message"/>
                        <input type="submit" value="Send" className="button" style={{borderRadius:"6px"}}/>
                        <span>{done && "Thanks for Contacting me"}</span>
                    
                    </form>
                </div>
            </div>
        </div>
    

    
    
    </>
  )
}

export default Email
