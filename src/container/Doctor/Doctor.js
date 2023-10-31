import React, { useEffect } from "react";
import { H4, Heading, SubHeading } from "../../components/UI/Heading/Heading";
import { Text } from "../../components/UI/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorData } from "../../redux/action/doctor.action";

function Doctor(props) {
  const doctor = useSelector(state => state.doctor);
  console.log(doctor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorData());
  }, []);

  return (
    <main>
      <br />
      <br />
      {}

      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <Heading>Doctors</Heading>
            <p>
              Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
              Suspendisse sem risus, molestie vitae arcu et, tincidunt viverra
              erat. Quisque in lectus id nulla viverra sodales in a risus.
              Aliquam ut sem ex. Duis viverra ipsum lacus, ut pharetra arcu
              sagittis nec. Phasellus a eleifend elit.
            </p>
          </div>
          <div className="row">
            {doctor.doctor.map(v => {
              return (
                <div className="col-lg-6">
                  <div className="member d-flex align-items-start">
                    <div className="pic">
                      <img
                        src="../assets/img/doctors/doctors-1.jpg"
                        className="img-doctor"
                        alt
                      />
                    </div>
                    <div className="member-info">
                      <H4>
                        {v.name}
                      </H4>
                      <SubHeading>
                        {v.designation}
                      </SubHeading>
                      <p>
                        {v.description}
                      </p>

                      <div className="social">
                        <a href>
                          <i className="ri-twitter-fill" />
                        </a>
                        <a href>
                          <i className="ri-facebook-fill" />
                        </a>
                        <a href>
                          <i className="ri-instagram-fill" />
                        </a>
                        <a href>
                          {" "}<i className="ri-linkedin-box-fill" />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Doctor;
