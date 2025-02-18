import React from "react";
import Slider from "react-slick";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    autoplay:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrow:true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
   <div className="container py-5 testimonial_home">
    <h2 className=" fw-bold m-0">Testimonial</h2>
    <h6 className="mb-3">Feedback</h6>
     <Slider {...settings}>
    
            <div className='card'>
                <div className='card-body'>
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                        <img src='/img/profile1.png' alt='' />
                        <h5 className="mt-2 text-capitalize">ultimatebody contour</h5>
                        <div><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                     </div>
                     <p className="mt-2">We thoroughly enjoyed our experience working with Grintech Web Agency! They helped us get outside of our comfort zone to create the kind of marketing we truly needed. We look forward to our future projects!</p>
                </div>
            </div>
           
            {/* <div className='card'>
                <div className='card-body'>
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                        <img src='/img/profile3.png' alt='' />
                        <h5 className="mt-2 text-capitalize">Bisma Mohi Ud Din</h5>
                        <div><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                     </div>
                     <p className="mt-2">As an employee, I love working at Grintechwebagency. The atmosphere is supportive, and the management is approachable. I have ample opportunities for growth, and the company values my contributions. Great place to work!</p>
                </div>
            </div> */}
            <div className='card'>
                <div className='card-body'>
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                        <img src='/img/profile4.png' alt='' />
                        <h5 className="mt-2 text-capitalize">Michal Marsh</h5>
                        <div><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                     </div>
                     <p className="mt-2">Extremely helpful scenario, user-friendly, innovative and reliable Web Agency. Very satisfactory outcome, knowing that I can go back to them at any time for further help.</p>
                </div>
            </div>
            <div className='card'>
                <div className='card-body'>
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                        <img src='/img/profile2.png' alt='' />
                        <h5 className="mt-2 text-capitalize">wanderlust</h5>
                        <div><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                     </div>
                     <p className="mt-2">Grintechwebagency is a fantastic company to work for. The team is talented, dedicated, and passionate about what they do. The work environment is positive and inclusive, fostering creativity and collaboration. I appreciate the opportunities for learning and growth that the company provides. Overall, it's been a wonderful experience being a part of Grintechwebagency."</p>
                </div>
            </div>
          
       
    </Slider>
   </div>
  );
}
