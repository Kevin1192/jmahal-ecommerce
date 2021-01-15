import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Footer() {
    return (
        <footer id='contact'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol sm='4'>
                    <div class="subtitle"><h3 id="contactheader">Information</h3></div>
                        <ul className='d-flex flex-column align-items-start'>
                            <li>
                                <a href="#" className='golden-highlight'>Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className='golden-highlight'>Shipping & Refund Policy</a>
                            </li>
                            <li>
                                <a href="#" className='golden-highlight'>Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className='golden-highlight'>Privacy Policy</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol sm='8'>
                    <div class="subtitle"><h3 id="contactheader">Contact</h3></div>

            <form action="https://formspree.io/mgelkgow" method="POST">
        <input type="text" name="name" placeholder="Your name" class="inputs" />
        <input
          type="email"
          name="_replyto"
          placeholder="Your email"
          class="inputs"
        />
        <textarea
          name="message"
          placeholder="Your message"
          class="message"
        ></textarea>
        <button type="submit" id="submit-button">Submit</button>
      </form>
      
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </footer>
    )
}

export default Footer
