import React, { useState } from 'react';

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
  Cardiology: [1, 3],       
  Neurology: [2, 4],        
  Pediatrics: [1, 5],       
  GeneralSurgery: [2, 5],   
  Urology: [3, 6],          
  Oncology: [2, 4, 6],      
  Gynocology: [1, 3, 5],    
  Dermatology: [2, 4],      
  InfectiousDiseases: [3, 5], 
  PulmonaryMedicine: [3, 5], 
  Rheumatology: [4],        
  Gastroenterology: [5]     
};

const timeSlots = [
  { id: 'A', label: '6:30 a.m. - 8:00 a.m.' },
  { id: 'B', label: '8:00 a.m. - 9:30 a.m.' },
  { id: 'C', label: '9:30 a.m. - 11:00 a.m.' },
  { id: 'D', label: '11:00 a.m. - 12:30 p.m.' },
  { id: 'E', label: '1:00 p.m. - 03:30 p.m.' },
  { id: 'F', label: '03:30 p.m. - 05:00 p.m.' },
  { id: 'G', label: '05:00 p.m. - 06:30 p.m.' }
];

function DoctorChannelling() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientNIC: '',
    department: '',
    doctorName: '',
    appointmentDate: '',
    timeSlot: ''
  });

  const [selectedSlot, setSelectedSlot] = useState(''); 
  const [qrCode, setQrCode] = useState('');
  const [tokenNumber, setTokenNumber] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleDateChange = (dateString) => {
    if (!dateString || !formData.department) return;

    const chosenDate = new Date(dateString);
    const dayOfWeek = chosenDate.getDay(); 

    const allowedDays = departmentSchedules[formData.department] || [];

    if (!allowedDays.includes(dayOfWeek)) {
      alert(`The selected clinic department does not operate on this day. Please check the schedule layout table.`);
      setFormData({ ...formData, appointmentDate: '', timeSlot: '' });
      setSelectedSlot('');
      return;
    }

    setFormData({ ...formData, appointmentDate: dateString, timeSlot: '' });
    setSelectedSlot(''); 
  };

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

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!formData.timeSlot) {
      alert("Please select a session time slot before confirming your reservation.");
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
        setQrCode(data.qrCode);
        setTokenNumber(data.tokenNumber);
        setIsBooked(true);
        alert("Booking successful! Your queue sequence allocation token is ready.");
      } else {
        alert(data.error || "An unexpected processing transaction fault occurred.");
      }
    } catch (err) {
      alert("Error connecting to server. Please confirm the backend API engine is listening.");
    }
  };

  return (
    <div className="bookingBoxC">
      <h2 className="form-heading">Doctor Channelling Registration</h2>

      {!isBooked ? (
        <form onSubmit={handleBooking}>
          <div className="form-group">
            <label className="form-label"><b>Full Name:</b></label>
            <input 
              type="text" 
              required 
              className="fluid-input"
              value={formData.patientName}
              onChange={e => setFormData({...formData, patientName: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label className="form-label"><b>NIC Number:</b></label>
            <input 
              type="text" 
              required 
              className="fluid-input"
              value={formData.patientNIC}
              onChange={e => setFormData({...formData, patientNIC: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label className="form-label"><b>Medical Department:</b></label>
            <select 
              required 
              className="fluid-select"
              value={formData.department}
              onChange={e => handleDepartmentChange(e.target.value)}
            >
              <option value="">-- Choose Department --</option>
              {Object.keys(hospitalData).map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label"><b>Preferred Consultant Specialist:</b></label>
            <select 
              required 
              className="fluid-select"
              disabled={!formData.department}
              value={formData.doctorName}
              onChange={e => setFormData({...formData, doctorName: e.target.value})}
            >
              <option value="">-- Select Specialist --</option>
              {(hospitalData[formData.department] || []).map((doc) => (
                <option key={doc} value={doc}>{doc}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <div className="inline-date-wrap">
              <label className="form-label"><b>Appointment Date:</b></label>
              <input 
                type="date" 
                required
                className="fluid-date-input"
                disabled={!formData.doctorName}
                value={formData.appointmentDate}
                min={getTomorrowDate()}
                onChange={e => handleDateChange(e.target.value)}
              />
            </div>
          </div>

          {formData.appointmentDate && (
            <div className="slots-section">
              <span className="slots-title"><b>Available Clinic Sessions:</b></span>
              <div className="time-slot-grid">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    className={`slot-btn ${selectedSlot === slot.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedSlot(slot.id);
                      setFormData({ ...formData, timeSlot: slot.id });
                    }}
                  >
                    Slot {slot.id} <br/> ({slot.label})
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              <b>CONFIRM SPECIALIST CHANNELLING</b>
            </button>
          </div>
        </form>
      ) : (
        <div className="receipt-view">
          <h3 className="success-text">✅ Channel Appointment Verified</h3>

          <div className="token-display-card">
            <span className="token-label">Your Queue Position Assignment</span>
            <h1 className="token-number">{tokenNumber}</h1>
          </div>

          <p className="receipt-note">Please save this security verification barcode pass to show at triage check-in.</p>

          <div className="qr-container-box">
            <img src={qrCode} alt="Appointment QR Code" className="receipt-qr-img" />
          </div>

          <div className="receipt-details-grid">
            <p><strong>Patient:</strong> {formData.patientName}</p>
            <p><strong>NIC:</strong> {formData.patientNIC}</p>
            <p><strong>Specialist:</strong> {formData.doctorName}</p>
            <p><strong>Date:</strong> {formData.appointmentDate}</p>
            <p><strong>Session:</strong> Slot {formData.timeSlot}</p>
          </div>
          <br/>

          <button onClick={() => window.location.reload()} className="reset-btn">
            Make Another Booking
          </button>
        </div>
      )}
    </div>
  );
}

export default DoctorChannelling;