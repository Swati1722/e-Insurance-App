import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
   <>
        <div>
            <footer className='footer-Container'>
                <div className="footer-column-1">
                    <div className='footer-left-element'>
                        <h2>Contact Us</h2>
                        <div className="contact-info">
                            <div><i class="ri-mail-fill" style={{marginRight:"1rem"}}></i>Email: contact@example.com</div>
                            <div>< i class="ri-phone-fill" style={{marginRight:"1rem"}}></i>Phone: +123 456 789</div>
                        </div>
                    </div>
                    <div className='footer-right-element'>

                        <h2>Useful Link</h2>
                        <div className='support-link'>
                            <a className='footer-a' href="#">Link</a>
                            <a className='footer-a' href="#">Link</a>
                            <a className='footer-a' href="#">Link</a>
                            <a className='footer-a' href="#">Link</a>
                      
                       
                        </div>
                    </div>
                </div>

                <div className="footer-column-2">
                    <h2>About Us</h2>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet mauris a urna tincidunt, vel condimentum leo auctor.
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet mauris a urna tincidunt, vel condimentum leo auctor.</p>
                </div>
            </footer>

        </div>
   
    
   
   
   
   </>
  )
}

export default Footer
