import React from "react";
import img1 from "../assets/img/about/1.png";
import img2 from "../assets/img/about/2.png";
import img3 from "../assets/img/about/3.png";
import img4 from "../assets/img/about/4.png";

export default () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">WHAT IS YALLA! Let’s Talk?</h2>
            <h3 className="section-subheading text-muted">
            YALLA! LET’S TALK (“YLT”) IS  NON-FOR PROFIT PLATFORM DESIGNED TO ENERGIZE, INFORM AND EMPOWER ARAB MILLENNIALS AROUND THE WORLD.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    img src={img1}
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2017</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                    Our story begins when a group us talked about the stigma we faced growing up  – No matter where where we were and the values we had, we noticed that people around us were constantly labelling, judging, and sometimes even excluding us. We also realized it was very difficult for us to relate to others and felt as if we belonged to a “third culture”. 
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    img src={img2}
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4></h4>
                    <h3 className="subheading">We realized this was not just us</h3>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                    We knew we needed to do something
Something that provides a safe space for every single type of Arab Millennial out there.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    img src={img3}
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    
                    <h3 className="subheading">Something that provides a safe space for every single type of Arab Millennial out there.</h3>
       
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                    We understood that the best way to tackle these issues is to amplify the voices of youth leader and enable the youth to spark the change they wanted to see. At the same time, we realized the power of an inclusive community in creating the right type of environment that supports youth members and acts as a hub for them to meet and learn from other people. 
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    img src={img4}
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4></h4>
                    <h4 className="subheading">YALLA! LET’S TALK. (YLT) WAS BORN.</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      
                    We create events and content that relate to young  Arab men and women all over the globe and kickstart an open dialogue about issues in our community.

Our events and content are focused on informing the youth on topics that are either stigmatized or under-represented in our community. Topics that parents might be uncomfortable to address, issues that trigger their curiosity, and a platform that provides them an opportunity to share their own experiences and stories. 
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
