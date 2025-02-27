import React from 'react'

const ClientReview = () => {
  return (
        <section className='client_reviews mt-4 mb-4'>
        <div className='container'>
        <h2>What Our Clients Say About Us?</h2>
        {/* <h6>Our Clients</h6> */}
        <div className='row mt-3 bgd  py-2 mx-1'>
            <div className='col-md-6 col-lg-6'>
            <iframe className='w-100' id='First-Video' src="https://www.youtube.com/embed/zqpZjJL_wP4?si=kOzsnuvL3v0kdGWR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className='col-md-6 col-lg-6 '>
            <iframe className='w-100' id='Second-Video' src="https://www.youtube.com/embed/vUIKQbitDPo?si=hHnhILynQnfaqw9G" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>  
        </div>
        </div>
    </section >
  )
}

export default ClientReview