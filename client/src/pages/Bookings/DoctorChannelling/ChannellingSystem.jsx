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

const departmentSchedules = {
  Cardiology: [1, 3],       // Mondays (1) and Wednesdays (3)
  Neurology: [2, 4],        // Tuesdays (2) and Thursdays (4)
  Pediatrics: [1, 5],       // Mondays (1) and Fridays (5)
  GeneralSurgery: [3, 5],   // Wednesdays (3) and Fridays (5)
  Urology:[1],              // Mondays (1) 
  Oncology:[2],             // Tuesdays (2)
  Gynocology:[2,4],         // Tuesdays (2) and Thursdays (4)
  Dermatology:[3],          // Wednesdays (3)
  InfectiousDiseases:[1, 2, 3, 4, 5],  //// Monday to Friday
  PulmonaryMedicine:[3,5],  // Wednesdays (3) and Fridays (5)
  Rheumatology:[4],         // Thursdays (4)
  Gastroenterology:[5],     // Fridays (5)
  // Default fallback if a department isn't explicitly listed above:
  Default: [1, 2, 3, 4, 5]  // Monday to Friday
};

const timeSlots = [
  { id: 'A', label: '6:30 a.m. - 8:00 a.m.' },
  { id: 'B', label: '8:00 a.m. - 9:30 a.m.' },
  { id: 'C', label: '9:30 a.m. - 11:00 a.m.' },
  { id: 'E', label: '11:00 a.m. - 12:30 p.m.' },
  { id: 'F', label: '1:00 p.m. - 03:30 p.m.' },
  { id: 'G', label: '03:30 p.m. - 05:00 p.m.' },
  { id: 'H', label: '05:00 p.m. - 06:30 p.m.' }
];

function DChannel() {
    const [formData, setFormData] = useState({
      patientName: '',
      patientNIC:'',
      department:'',
      doctorName: '',
      appointmentDate: '',
      timeSlot: ''
    });

  const [selectedSlot, setSelectedSlot] = useState(''); // Tracks active UI slot selection
  const [tokenNumber, setTokenNumber] = useState('');    // To hold the combined token string (e.g., 10A)
  const [qrCode, setQrCode] = useState('');
  const [isBooked, setIsBooked] = useState(false)


  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

    const handleDateChange = (dateString) => {
      if (!dateString) return;
    
      const chosenDate = new Date(dateString);
      const dayOfWeek = chosenDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

      // Remove blank spaces to correctly match dynamic object keys
      const deptKey = formData.department.replace(/\s+/g, '');
      const allowedDays = departmentSchedules[deptKey] || departmentSchedules.Default;
    
      if (!allowedDays.includes(dayOfWeek)) {
        alert(`This department only operates on designated clinic days. Please choose an available clinic day.`);
        setFormData({ ...formData, appointmentDate: '', timeSlot: '' });
        setSelectedSlot('');
      return;
      }
      setFormData({ ...formData, appointmentDate: dateString, timeSlot: '' });
      setSelectedSlot(''); // Reset selected slots when date switches
    };

    // Helper to handle Department change
  const handleDepartmentChange = (dept) => {
    setFormData({ 
      ...formData, 
      department: dept, 
      doctorName: '',
      appointmentDate: '',
      timeSlot: ''
    });
    setSelectedSlot('');
  };
  
  const handleBook = async (e) => {
    e.preventDefault();

    if (!formData.timeSlot) {
      alert("Please choose an available appointment time slot to continue.");
      return;
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
          setTokenNumber(data.tokenNumber);
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
        <h2 style={{marginTop:'0px',marginBottom:'0px',textAlign:'center'}}>Doctor Channelling System</h2>
       
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
              <input 
                type="date" 
                name="appointmentDate" 
                value={formData.appointmentDate} 
                style={{ height:'5px', width:'40%',padding:'10px',marginTop:'5px'}} 
                disabled={!formData.department} 
                onChange={(e) => handleDateChange(e.target.value)}
                min={getTomorrowDate()}
                required
              />
            </p>
          </div>
           
          {/* Dynamic Interactive Time Slot Section */}
           {formData.appointmentDate && (
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
              <b style={{ fontSize: '18px' }}>Available Time Slots :</b>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '10px' }}>
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => {
                      setSelectedSlot(slot.id);
                      setFormData({ ...formData, timeSlot: slot.id });
                    }}
                    style={{
                      padding: '15px',
                      backgroundColor: selectedSlot === slot.id ? '#007bff' : '#f8f9fa',
                      color: selectedSlot === slot.id ? 'white' : 'black',
                      border: '1px solid #ced4da',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontWeight: selectedSlot === slot.id ? 'bold' : 'normal',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Slot {slot.id} ({slot.label})
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{height:'auto',width:'auto',backgroundColor:'#eecfa7',border: '2px solid #910000', borderRadius: '10px',padding:'8px', marginTop:'15px'}}>
            <label style={{fontSize:'14px', fontWeight:'bold', color:'#910000'}}> 
              * Note: Please make sure to pick a scheduled session day matching clinic operating hours.
            </label>
          </div>
           
          <div style={{display:'flex',justifyContent:'center',maxWidth:'auto', height:'60px',marginTop:'30px'}}>
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

          <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#e2f0d9', border: '2px solid #28a745', borderRadius: '10px', display: 'inline-block', minWidth: '180px' }}>
            <span style={{ fontSize: '15px', color: '#555', fontWeight: 'bold' }}>Your Queue Token Number</span>
            <h1 style={{ fontSize: '54px', color: '#28a745', margin: '5px 0', letterSpacing: '2px' }}>{tokenNumber}</h1>
          </div>

          <p style={{color: '#555'}}>Please save this QR code and token layout to present at reception.</p>

          <div style={{margin: '15px 0', border: '2px dashed #007bff', padding: '8px', display: 'inline-block'}}>
            <img src={qrCode} alt="Appointment QR Code" style={{width: '200px'}} />
          </div>

          <div style={{fontSize: '16px', marginTop: '10px', textAlign:'left'}}>
            <p><strong>Patient:</strong> {formData.patientName}</p>
            <p><strong>NIC:</strong> {formData.patientNIC}</p>
            <p><strong>Doctor:</strong> {formData.doctorName}</p>
            <p><strong>Date:</strong> {formData.appointmentDate}</p>
            <p><strong>Selected Slot:</strong> Slot {formData.timeSlot}</p>
          </div>
          <br/>
          
          <button 
            onClick={() => window.location.reload()} 
            style={{marginTop: '30px', padding: '12px 24px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'}}>
            Make Another Booking
          </button>
        </div>
          )}
        </div>
    )
}

export default DChannel;