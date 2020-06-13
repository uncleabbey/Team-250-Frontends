import './contact.css';
import React from 'react';
import { faEnvelopeOpen, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contacts = () => {
  return (
    <div>
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title">Send Us A Message</span>

            <label className="label-input100">Tell us your name *</label>
            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
              <input id="first-name" className="input100" type="text" name="first-name" placeholder="First name" />
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
              <input className="input100" type="text" name="last-name" placeholder="Last name" />
              <span className="focus-input100"></span>
            </div>

            <label className="label-input100">Enter your email *</label>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@examples.com" />
              <span className="focus-input100"></span>
            </div>

            <label className="label-input100">Enter phone number</label>
            <div className="wrap-input100">
              <input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +234 4758399381" />
              <span className="focus-input100"></span>
            </div>

            <label className="label-input100">Message *</label>
            <div className="wrap-input100 validate-input" data-validate="Message is required">
              <textarea id="message" className="input100" name="message" placeholder="Write us a message"></textarea>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">Send Message</button>
            </div>
          </form>
          <div
            className="contact100-more flex-col-c-m"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/pauliski/image/upload/v1591725243/bg-01_p0m1dz.jpg')"
            }}
          >
            <div className="flex-w size1 p-b-47">
              <div className="txt1 p-r-25">
                <span className="lnr lnr-map-marker">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </span>
              </div>

              <div className="flex-col size2">
                <span className="txt1 p-b-20">Address</span>
                <br />

                <span className="txt2">1, Andela Venue, Ikoyi, Lagos</span>
              </div>
            </div>

            <div className="dis-flex size1 p-b-47">
              <div className="txt1 p-r-25">
                <span className="lnr lnr-phone-handset">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
              </div>

              <div className="flex-col size2">
                <span className="txt1 ">Lets Talk </span>
                <br />

                <span className="txt3">+2347068546905</span>
              </div>
            </div>

            <div className="dis-flex size1 p-b-47">
              <div className="txt1 p-r-25">
                <span className="lnr lnr-envelope">
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </span>
              </div>

              <div className="flex-col size2">
                <span className="txt1 p-b-20">Support</span>
                <br />

                <span className="txt3">zerohunger@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
