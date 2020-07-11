import React from "react";
import img1 from "../assets/img/friends.svg";
import img2 from "../assets/img/grow.svg";
import img3 from "../assets/img/diversity.svg";

export default () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase"> Who Are We?</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div> */}
        </div>
        <div className="row text-center">
          <div className="col-md-4">
          <span >
          <img src={img1} width="300" height="300"alt="friends" />
            </span>

            <h3 className="service-heading">WE SHARE</h3>
            <p className="text-muted">
            We are a platform designed to energize, inform, and empower Arab Millennials around the world. 
            </p>
          </div>
          <div className="col-md-4">
            <span>
            <img src={img2} width="300" height="300"alt="friends" />
            </span>
            <h4 className="service-heading">WE LISTEN</h4>
            <p className="text-muted">
            We do this by creating spaces and content that sparks conversations about stigmatized or overlooked issues within the community. 
            </p>
          </div>
          <div className="col-md-4">
            <span>
            <img src={img3} width="300" height="300"alt="friends" />
            </span>
            <h4 className="service-heading">WE GROW TOGETHER</h4>
            <p className="text-muted">
            Help us spark conversations that matter!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
