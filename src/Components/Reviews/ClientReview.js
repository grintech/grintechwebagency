import React from "react";

const ClientReview = () => {
  return (
    <section className="client_reviews mt-4 mb-4">
      <div className="container">
        <h2>What Our Clients Say About Us?</h2>

        <div className="row mt-3 bgd py-2 mx-1">
          {/* Video 1 */}
          <div className="col-md-12 col-lg-4 mb-3">
            <iframe
              className="w-100"
              height="315"
              src="https://www.youtube.com/embed/zqpZjJL_wP4?rel=0&modestbranding=1"
              title="Client Review Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="col-md-12 col-lg-4 mb-3">
            <iframe
              className="w-100"
              height="315"
              src="https://www.youtube.com/embed/vUIKQbitDPo?rel=0&modestbranding=1"
              title="Client Review Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Shorts Video */}
          <div className="col-md-12 col-lg-4 mb-3">
            <iframe
              className="w-100"
              height="315"
              src="https://www.youtube.com/embed/4F4SppiBtos?rel=0&modestbranding=1"
              title="Client Review Shorts"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
