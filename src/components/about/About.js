/* eslint-disable max-lines-per-function */
import React from 'react';

const TeamMate = ({
  image, name, role, stack, facebook, twitter, github, linkedIn
}) => (
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src={image}
            alt="profile"
            width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 className="mb-0">{name}</h5>
          <span className="small text-uppercase text-success">
            {role}
          </span>
          <br/>
          <span className="small text-uppercase text-muted">
            {stack}
          </span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href={facebook} className="social-link">
                <img src="https://res.cloudinary.com/kayode/image/upload/v1592335077/sdg_icons/1200px-Facebook_icon.svg_esp8sl.png" alt="fb-icon"/>
              </a>
            </li>
            <li className="list-inline-item">
              <a href={twitter} className="social-link">
                <img src="https://res.cloudinary.com/kayode/image/upload/v1592335101/sdg_icons/twitter_circle-512_glsfms.png" alt="twitter-icon"/>
                </a>
            </li>
            <li className="list-inline-item">
              <a href={github} className="social-link">
                <img src="https://res.cloudinary.com/kayode/image/upload/v1592335133/sdg_icons/GitHub-Mark_iqwxou.png" alt="github-icon"/>
              </a>
            </li>
            <li className="list-inline-item">
              <a href={linkedIn} className="social-link">
                <img src="https://res.cloudinary.com/kayode/image/upload/v1592335180/sdg_icons/linkedin-social-media-icon-design-template-vector-png_127000_spnsq9.jpg" alt="LinkedIn"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
);
const About = () => (
    <div>
      <div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-8 text-success">About ZeroHunger</h1>
        <p className="lead text-muted mb-0">A Webapp that seeks to End hunger, achieve food security and improved nutrition and promote sustainable agriculture</p>
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/kayode/image/upload/v1592341623/sdg_icons/zh3_nig1xe.png" alt="" className="img-fluid" /></div>
    </div>
  </div>
</div>
  <div className="bg-white py-5">
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light text-success">Our Mission</h2>
        <p className="font-italic text-muted mb-4">
          Our mission is making sure all people – especially children and the more vulnerable –
          have access to sufficient and nutritious food all year round. This involves promoting
          sustainable agricultural practices: improving the livelihoods and capacities of
          small scale famers, allowing equal access to land, technology and markets.
        </p><a href="#" className="btn btn-success px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/kayode/image/upload/v1592341631/sdg_icons/zh2_ug3f0l.png" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto">
        <img src="https://res.cloudinary.com/kayode/image/upload/v1592341656/sdg_icons/zh1_cvnpmh.jpg" alt="" className="img-fluid mb-4 mb-lg-0" />
        </div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light text-success">Our Aim</h2>
        <p className="font-italic text-muted mb-4">
          Most times before food hit the markets, It would have rotten, damaged or infested
          with pests and diseases.
          Our Aim is to bridge the gap between farmers and consumer.
          For everyone to have access to healthy foods through proper storage and handling.
        </p><a href="#" className="btn btn-success px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>
  </div>
</div>
<div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-12 text-center text-success">
        <h2 className="font-weight-light">The Team</h2>
        <p className="font-italic text-muted">Team Invincibles</p>
      </div>
    </div>
    <div className="row text-center">
    <TeamMate
      name="Paul Arokoola"
      role="Team Lead"
      stack="Frontend Developer"
      image="https://res.cloudinary.com/kayode/image/upload/v1592336827/sdg_icons/20200616_204335_q1oqeh.jpg"
      facebook="https://m.facebook.com/Pauliski0402"
      twitter="https://twitter.com/great_pauliski"
      github="https://github.com/Pauliski"
      linkedIn="#"
      />
    <TeamMate
      name="Kayode Gabriel"
      role="Project Manager"
      stack="Fullstack Developer"
      image="https://res.cloudinary.com/kayode/image/upload/v1592337263/sdg_icons/me_r79t8o.jpg"
      facebook="https://m.facebook.com/kayode.abiodun.7543653"
      twitter="https://twitter.com/_uncleabbey_"
      github="https://github.com/uncleabbey"
      linkedIn="https://www.linkedin.com/in/kayode-gabriel-abiodun-a53627a9/"
      />
    <TeamMate
      name="Samson Adeyemi"
      role="Member"
      stack="Frontend Developer"
      image="https://res.cloudinary.com/kayode/image/upload/v1592338582/sdg_icons/20200616_211400_z0buqz.jpg"
      facebook="https://m.facebook.com/shalomhns"
      twitter="https://twitter.com/shalomhns"
      github="Https://github.com/shalomhns"
      linked="https://LinkedIn/in/shalomhns"
      />
    <TeamMate
    name="Emmanuel Chijioke"
    role="Member"
    stack="Backend Developer"
    image="https://res.cloudinary.com/kayode/image/upload/v1592338575/sdg_icons/20200616_211419_uvtyue.jpg"
    facebook="https://www.facebook.com/deemmanuels.c1"
    twitter="https://twitter.com/drelcj"
    github=" https://github.com/Drelcj"
    linkedIn="https://www.linkedin.com/in/emmanuelchijioke"
    />
    </div>
    </div>
    </div>
    </div>
);

export default About;
