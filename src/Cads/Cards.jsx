import React, { Component } from "react";
import Card from "./Platform";
import img1 from "../assets/img/yalla-show.jpg";
import img2 from "../assets/img/yalla-cafe.jpg";
import img3 from "../assets/img/ylt-conference.jpeg";

class Cards extends Component {
  render() {
    return (
      <div className="contanier-fluid d-flex justify-center">
        <div className="row">
          <div className="col-md-4">
            <Card
              imgsrc={img1}
              title="The Yalla Show"
              paragraph="In partnership with 23 Republic, we are bringing Arab Millennials together to talk. Our channel is run by millennials who seek to hear and share compelling stories and experiences of everyday individuals. We create a range of entertaining and thought-provoking content for Arab Millennials. Join in on the conversation through the comments sections.  
              We love to hear from everyone! To maintain a safe and inclusive community for healthy conversations, we will be moderating comments.  "
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img2}
              title="The Yalla Cafe"
              paragraph="Once in a while an event series is born that shakes things up, it
              makes you think differently, and connects you to different people
              within a community to address topics that impact young adults. That
              event is YLT Café. Cafe discussions in different cities around the
              world, we bring Arab millennials together to have conversations, share
              experiences, and learn a thing or two about navigating issues that
              they might come across today. From the struggles of dating to breaking
              stigma about mental health, we share our stories, we listen — We grow
              together."
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img3}
              title="The YLT Conference"
              paragraph="
              The future has never felt more uncertain. As young Arabs, we are the current change-makers with the power to rebuild our future. Yet, where do we begin?
              A place for inspiration and empowerment, the YLT Conference brings you life-changing stories and thought-provoking insights from Arab innovators and pioneers of change. Dive head-first into an immersive experience where you get to explore your own barriers and discover opportunities for change. "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
