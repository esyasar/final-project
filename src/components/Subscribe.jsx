import React from "react";

export default () => {
    return (
        <section className="page-section" id="contact">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Newsletter Signup</h2>
              <h3 className="section-subheading text-muted">
              Enter your info to get our awesome monthly newsletter
              </h3>
            </div>
          </div>
          <div class="col-md-6 m-auto">
        <h1><i class="fas fa-newspaper fa-2x"></i></h1>

        <form action="/signup" method="POST">
          <div class="form-group">
            <input type="text" name="firstName" id="first-name" class="form-control" placeholder="First Name"
              required />
          </div>
          <div class="form-group">
            <input type="text" name="lastName" id="last-name" class="form-control" placeholder="Last Name" required />
          </div>
          <div class="form-group">
            <input type="email" name="email" id="email" class="form-control" placeholder="Email" required />
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Sign Up
          </button>
        </form>
      </div>
        </div> 
       </section>

    )   
    }
 