import React, { useState } from 'react';
import './teamMember.css';

const TeamTabs = () => {
    const [activeTab, setActiveTab] = useState('Executive Leaders');

    return (
    <div className="container team-members my-5">
      <h2 className="text-center mb-4">Our Creative Team</h2>

      <ul className="nav nav-pills justify-content-center mb-4">
        {['Executive Leaders', 'Creative Team Members'].map((tab) => (
          <li className="nav-item mb-2" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Leaders */}
      {activeTab === 'Executive Leaders' && (
        <div className="row justify-content-center gx-2 gy-2">
          
          <div className="col-6 col-md-3 ">
            <div className="team-box light">
              <img src="/team/arti.jpg" className="rounded-circle team-img" alt="Arti" />
              <h5 className="team-name">Arti Mehta</h5>
              <p className="team-role">Project Manager (SEO)</p>
            </div>
          </div>
          <div className="col-6 col-md-3 ">
            <div className="team-box dark">
              <img src="/team/rohit.jpg" className="rounded-circle team-img" alt="rohit" />
              <h5 className="team-name">Rohit Sharma</h5>
              <p className="team-role">Senior Project Manager</p>
            </div>
          </div>
          <div className="col-6 col-md-3 ">
            <div className="team-box light ">
              <img src="/team/vinit.jpg" className="rounded-circle team-img" alt="Vinit" />
              <h5 className="team-name">Vinit Mehra</h5>
              <p className="team-role">Project Manager (Development)</p>
            </div>
          </div>
         
        </div>
      )}

      {/* SEO */}
      {activeTab === 'Creative Team Members' && (
         <div className="row gx-2 gy-2">
           <div className="col-6 col-md-3">
            <div className="team-box light">
              <img src="/team/vikas.jpg" className="rounded-circle team-img" alt="Vikas" />
              <h5 className="team-name">Vikas Sharma</h5>
              <p className="team-role">Team Leader (Designing)</p>
            </div>
          </div>
          <div className="col-6 col-md-3 ">
            <div className="team-box dark ">
              <img src="/team/beena.png" className="rounded-circle team-img" alt="Beena" />
              <h5 className="team-name">Beena Mehta</h5>
              <p className="team-role">SEO Team Leader</p>
            </div>
          </div>
          <div className="col-6 col-md-3 ">
            <div className="team-box light dark1">
              <img src="/team/mamta.jpg" className="rounded-circle team-img" alt="Beena" />
              <h5 className="team-name">Mamta</h5>
              <p className="team-role">Senior CMS Developer</p>
            </div>
          </div>
          <div className="col-6 col-md-3 ">
            <div className="team-box dark light1">
              <img src="/team/sunil.jpg" className="rounded-circle team-img" alt="Sunil" />
              <h5 className="team-name">Sunil</h5>
              <p className="team-role">SEO Executive</p>
            </div>
          </div>
          <div className="col-6 col-md-3 ">
            <div className="team-box dark light1 ">
              <img src="/team/anupama.jpeg" className="rounded-circle team-img" alt="Anupama" />
              <h5 className="team-name">Anupama</h5>
              <p className="team-role">SEO Executive</p>
            </div>
          </div>
           <div className="col-6 col-md-3 ">
            <div className="team-box light dark1">
              <img src="/team/wasim.png" className="rounded-circle team-img" alt="Wasim" />
              <h5 className="team-name">Wasim Akram</h5>
              <p className="team-role">Laravel Developer</p>
            </div>
          </div>
         <div className="col-6 col-md-3 ">
            <div className="team-box dark ">
              <img src="/team/atul.jpeg" className="rounded-circle team-img" alt="Atul" />
              <h5 className="team-name">Atul Rauthan</h5>
              <p className="team-role">Frontend Developer</p>
            </div>
          </div>
         
          <div className="col-6 col-md-3 ">
            <div className="team-box light  ">
              <img src="/team/muskan.jpg" className="rounded-circle team-img" alt="Muskan" />
              <h5 className="team-name">Muskan</h5>
              <p className="team-role">Wordpress Developer</p>
            </div>
          </div>
          
          <div className="col-6 col-md-3 ">
            <div className="team-box light ">
              <img src="/team/tanuj.jpg" className="rounded-circle team-img" alt="Tanuj" />
              <h5 className="team-name">Tanuj</h5>
              <p className="team-role">Php Developer</p>
            </div>
          </div>
           <div className="col-6 col-md-3  ">
            <div className="team-box dark ">
              <img src="/team/saif.jpg" className="rounded-circle team-img" alt="Saif" />
              <h5 className="team-name">Saif</h5>
              <div className="d-flex align-items-center">
                <p className="team-role">Mobile App Developer </p><i style={{fontSize:"20px"}} class=" text_green ms-1 fa-solid fa-mobile-screen-button"></i>
              </div>
            </div>
          </div>
          
          <div className="col-6 col-md-3 ">
            <div className="team-box light dark1">
              <img src="/team/shubham.jpg" className="rounded-circle team-img" alt="Adam" />
              <h5 className="team-name">Shubham</h5>
              <p className="team-role">Junior Php Developer</p>
            </div>
          </div>
          <div className="col-6 col-md-3 ">
            <div className="team-box dark light1">
              <img src="/team/anjana.jpg" className="rounded-circle team-img" alt="Anjana" />
              <h5 className="team-name">Anjana</h5>
              <p className="team-role">React Js Developer</p>
            </div>
          </div>
         
        </div>
      )}

    

     
    </div>
  );
};

export default TeamTabs;
