import React from 'react';

function ChanSchedule(){
    return(
        <div className="schedule-table-container">
        <p className="schedule-title">Hospital Clinic Schedule</p>
        <table className="table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Available Days (06:30 AM - 06:30 PM)</th>
              <th>Available Doctors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Cardiology</b></td>
              <td>Mondays and Wednesdays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Aruna Perera</span>
                  <span className="doc-tag">Dr. N. L. Amarasena</span>
                  <span className="doc-tag">Dr. J. I. P. Herath</span>
                  <span className="doc-tag">Dr. Sandun Silva</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Neurology</b></td>
              <td>Tuesdays and Thursdays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Gamini Fonseka</span>
                  <span className="doc-tag">Dr. Kumari Rathnayake</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Pediatrics</b></td>
              <td>Mondays and Fridays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Nimmi Wickramasinghe</span>
                  <span className="doc-tag">Dr. Rohan Dias</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>General Surgery</b></td>
              <td>Wednesdays and Fridays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Samantha Perera</span>
                  <span className="doc-tag">Dr. Upul Rohana</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Urology</b></td>
              <td>Mondays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Niroshan Seneviratne</span>
                  <span className="doc-tag">Dr. L.N. Senevirathne</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Oncology</b></td>
              <td>Tuesdays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Damayanthi Peiris</span>
                  <span className="doc-tag">Dr. Ranga Perera</span>
                  <span className="doc-tag">Dr. Dehan Gunasekara</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Gynocology</b></td>
              <td>Tuesdays and Thursdays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Shemoon Marleen</span>
                  <span className="doc-tag">Dr. Madhawa Karunarathne</span>
                  <span className="doc-tag">Dr. Hemantha Perera</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Dermatology</b></td>
              <td>Wednesdays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Dananja Sanjeevi Ariyawansa</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Infectious Diseases</b></td>
              <td>Monday to Friday</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Kushlani Jayatilleke</span>
                  <span className="doc-tag">Dr. Anne Sonali Rodrigo</span>
                  <span className="doc-tag">Dr. P.J. Ambawatta</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Pulmonary Medicine</b></td>
              <td>Wednesdays and Fridays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Geethal Perera</span>
                  <span className="doc-tag">Dr. M. S. G. Perera</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Rheumatology</b></td>
              <td>Thursdays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. Kaleel Cassim</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><b>Gastroenterology</b></td>
              <td>Fridays</td>
              <td>
                <div className="doctor-list-tags">
                  <span className="doc-tag">Dr. J. V. Sanjeewa Aryasingha</span>
                  <span className="doc-tag">Dr. Amal Priyantha</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default ChanSchedule;
