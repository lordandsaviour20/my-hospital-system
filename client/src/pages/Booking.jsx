import React from 'react';
import {useState} from 'react';

const hospitalData = {
  Cardiology: ["Dr. Aruna Perera","Dr. N. L. Amarasena","Dr. J. I. P. Herath", "Dr. Sandun Silva"],
  Neurology: ["Dr. Gamini Fonseka", "Dr. Kumari Rathnayake"],
  Pediatrics: ["Dr. Nimmi Wickramasinghe", "Dr. Rohan Dias"],
  GeneralSurgery: ["Dr. Samantha Perera", "Dr. Upul Rohana"],
  Urology: ["Dr. Niroshan Seneviratne","Dr. L.N. Senevirathne"],
  Oncology: ["Dr. Damayanthi Peiris","Dr. Ranga Perera","Dr. Dehan Gunasekara"],
  Gynocology:["Dr. Shemoon Marleen","Dr. Madhawa Karunarathne","Dr. Hemantha Perera"],
  Dermatology:["Dr. Dananja Sanjeevi Ariyawansa"],
  InfectiousDiseases:["Dr. Kushlani Jayatilleke","Dr. Anne Sonali Rodrigo","Dr. P.J. Ambawatta"],
  PulmonaryMedicine:["Dr. Geethal Perera","Dr. M. S. G. Perera "],
  Rheumatology:["Dr. Kaleel Cassim"],
  Gastroenterology:["Dr. J. V. Sanjeewa Aryasingha","Dr. Amal Priyantha"]

};

function Booking() {
    const [formData, setFormData] = useState({
      patientName: '',
      patientNIC:'',
      department:'',
      doctorName: '',
      appointmentDate: '',
      appointmentTime: ''
    });

    // Helper to handle Department change
  const handleDepartmentChange = (dept) => {
    setFormData({ 
      ...formData, 
      department: dept, 
      doctorName: '' // Reset doctor when department changes
    });
  }
    const [qrCode, setQrCode] = useState('');
    const [isBooked, setIsBooked] = useState(false)
  
    const getTomorrowDate = () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split('T')[0];
    };


    const handleBook = async (e) => {
      e.preventDefault();

      const [hours, minutes] = formData.appointmentTime.split(':').map(Number);
      const totalMinutes = hours * 60 + minutes;
      
      const minLimit = 6 * 60 + 30; // 6:30 AM = 390 minutes
      const maxLimit = 14 * 60;     // 2:00 PM = 840 minutes
      
      if (totalMinutes < minLimit || totalMinutes > maxLimit) {
        alert("Appointments are only available between 6:30 AM and 2:00 PM.");
        return; // Stop the booking process
      }  
      
      try {
        const response = await fetch('http://localhost:5000/api/book', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
  
        if (response.ok) {
          //  Save the QR code received from the server
          setQrCode(data.qrCode);
          setIsBooked(true);
          alert("Booking successful! Scan your QR code below.");
        } else {
          alert(data.error || "Something went wrong");
        }
        } catch (err) {
          alert("Error: Is your server running?");
        }
      };
    


    return (
        <div class="bookingBox">
        <h2 style={{marginTop:'0px',marginBottom:'0px',textAlign:'center'}}>Booking System</h2>
       
       {!isBooked ? (
          <form onSubmit={handleBook}>
          <div>
           <p><b>Enter your Name :</b> <input  type="text" style={{height:'5px',width:'100%',padding:'10px',marginTop:'5px'}}  required onChange={(e) => setFormData({...formData, patientName: e.target.value})}/></p>
          </div>
           
          <div>
           <p><b>Enter your NIC (National Identity Card No.) :</b> <input  type="text" style={{height:'5px',width:'100%',padding:'10px',marginTop:'5px'}}  required onChange={(e) => setFormData({...formData, patientNIC: e.target.value})}/></p>
          </div>

          <div>
            <p><b>Select Department : </b>
              <select 
                style={{width:'55%', padding:'5px', marginTop:'5px'}} 
                required 
                value={formData.department}
                onChange={(e) => handleDepartmentChange(e.target.value)}
              >
                <option value="">-- Choose a Department --</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="General Surgery">General Surgery</option>
                <option value="Urology">Urology</option>
                <option value="Oncology">Oncology</option>
                <option value="Gynocology">Gynocology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Infectious Diseases">Infectious Diseases</option>
                <option value="Pulmonary Medicine">Pulmonary Medicine</option>
                <option value="Rheumatology">Rheumatology</option>
                <option value="Gastroenterology">Gastroenterology</option>

                {Object.keys(hospitalData).map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </p>
          </div>

           <div>
            <p><b>Select Doctor :</b>
              <select 
                style={{width:'100%', padding:'10px', marginTop:'5px'}} 
                required 
                disabled={!formData.department} // Stays greyed out until department is picked
                value={formData.doctorName}
                onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
              >
                <option value="">-- Choose Doctor --</option>
                  {formData.department && hospitalData[formData.department].map(doc => (
                  <option key={doc} value={doc}>{doc}</option>
                  ))}
              </select>
            </p>
          </div>
           
           <div>
           <p><b style={{textAlign:'center',fontSize:'18px'}}>Date :</b> 
              <input type="date" 
              name="appointmentDate" 
              value={formData.appointmentDate} 
              style={{ height:'5px', width:'40%',padding:'10px',marginTop:'5px'}} 
              onChange={(e) => setFormData({...formData, appointmentDate: e.target.value})}
              min={getTomorrowDate()} // This disables today and all past dates
              required/></p>
           </div>
           
           <div>
           <b style={{textAlign:'center',fontSize:'18px'}}>Time :</b> 
            <input type="time" 
            name="appointmentTime"
            value={formData.appointmentTime}
            style={{ height:'5px', width:'39%',padding:'10px 10px 10px',marginTop:'0'}} 
            onChange={(e) => setFormData({...formData, appointmentTime: e.target.value})}
            min="06:30" 
            max="14:00"
            required/>
           </div>

           <div style={{height:'33px',width:'338px',backgroundColor:'#eecfa7',border: '2px solid #910000', borderRadius: '10px',padding:'8px', marginTop:'9px'}}>
              <label style={{marginTop:'15px',fontSize:'15px'}}> *Appointment Times are only from 6:30 AM to 2:00 PM.</label>
            </div>
           
           <div style={{display:'flex',justifyContent:'center', maxWidth:'auto', height:'60px',marginTop:'30px'}}>
            <button type="submit" 
              style={{padding: '20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer',fontSize:'16px'}}>
              <b>CONFIRM BOOKING</b>
             </button>
           </div>
           </form>
       ) : (
        //  This part shows ONLY after the user clicks confirm
        <div style={{textAlign: 'center', padding: '20px'}}>
          <h3 style={{color: '#28a745'}}>✅ Booking Confirmed!</h3>
          <p>Please save this QR code and show it at the hospital reception.</p>
          
          {/* Display the QR Code image */}
          <div style={{margin: '20px 0', border: '2px dashed #007bff', padding: '8px', display: 'inline-block'}}>
            <img src={qrCode} alt="Appointment QR Code" style={{width: '200px'}} />
          </div>

          <div>
            <b style={{marginTop:'0px'}}>
            <strong>Patient:</strong> {formData.patientName}
            </b>
          </div>
          
          <div>
            <b style={{marginBottom:'0px'}}>
            <strong>Doctor:</strong> {formData.doctorName}
            </b>
          </div>
          
          <button 
            onClick={() => window.location.reload()} 
            style={{marginTop: '40px', padding: '10px', cursor: 'pointer'}}>
            Make Another Booking
            </button>
            </div>
          )}
        </div>
    )
}

export default Booking;