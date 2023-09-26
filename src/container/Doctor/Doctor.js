import React from 'react';
import { H4, Heading, SubHeading } from '../../components/UI/Heading/Heading';
import { Text } from '../../components/UI/Text/Text';

function Doctor(props) {
    return (
       <main>
  <section id="doctors" className="doctors">
    <div className="container">
      <div className="section-title">
        <Heading>Doctors</Heading>
        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
          tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
          ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt /></div>
            <div className="member-info">
              <H4>Atha Smith</H4>
              <SubHeading>Chief Medical Officer</SubHeading>
              <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="../assets/img/doctors/doctors-2.jpg" className="img-doctor" alt /></div>
            <div className="member-info">
              <H4>John White</H4>
              <SubHeading>Anesthesiologist</SubHeading>
              <p>Aenean ac turpis ante. Mauris velit sapien.</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="../assets/img/doctors/doctors-3.jpg" className="img-doctor" alt /></div>
            <div className="member-info">
              <H4>Umika Loha</H4>
              <SubHeading>Cardiology</SubHeading>
              <p>Curabitur luctus eleifend odio. Phasellus placerat mi.</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4">
          <div className="member d-flex align-items-start">
            <div className="pic"><img src="../assets/img/doctors/doctors-4.jpg" className="img-doctor" alt /></div>
            <div className="member-info">
              <H4>Daimy Smith</H4>
              <SubHeading>Neurosurgeon</SubHeading>
              <p>Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.</p>
              <div className="social">
                <a href><i className="ri-twitter-fill" /></a>
                <a href><i className="ri-facebook-fill" /></a>
                <a href><i className="ri-instagram-fill" /></a>
                <a href> <i className="ri-linkedin-box-fill" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

    );
}

export default Doctor;