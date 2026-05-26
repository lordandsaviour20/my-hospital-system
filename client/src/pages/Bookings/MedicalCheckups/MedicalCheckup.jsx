import React, { useState } from 'react';

const packageSchedules = {
  Default: [1, 2, 3, 4, 5]  // Monday to Friday
};

const timeSlots = [
  { id: 'L', label: '6:30 a.m. - 8:00 a.m.' },
  { id: 'M', label: '8:00 a.m. - 9:30 a.m.' },
  { id: 'N', label: '9:30 a.m. - 11:00 a.m.' },
  { id: 'O', label: '11:00 a.m. - 12:30 p.m.' },
  { id: 'P', label: '1:00 p.m. - 03:30 p.m.' },
  { id: 'Q', label: '03:30 p.m. - 05:00 p.m.' },
  { id: 'R', label: '05:00 p.m. - 06:30 p.m.' }
];
  
function MedicalCheckup() {
  const [checkupData, setCheckupData] = useState({
    patientName: '',   
    patientNIC: '',    
    package: '',
    appointmentDate: '',
    timeSlot: ''
  });
  
  const [selectedSlot, setSelectedSlot] = useState(''); 
  const [tokenNumber, setTokenNumber] = useState('');    
  const [qrCode, setQrCode] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };
  
  const handleDateChange = (dateString) => {
    if (!dateString) return;
      
    const chosenDate = new Date(dateString);
    const dayOfWeek = chosenDate.getDay(); 
  
    const allowedDays = packageSchedules.Default;

    if (!allowedDays.includes(dayOfWeek) || dayOfWeek === 0 || dayOfWeek === 6) {
      alert(`Medical check-ups are only conducted on weekdays (Monday to Friday). Please choose an available clinic day.`);
      setCheckupData({ ...checkupData, appointmentDate: '', timeSlot: '' });
      setSelectedSlot('');
      return;
    }
    setCheckupData({ ...checkupData, appointmentDate: dateString, timeSlot: '' });
    setSelectedSlot(''); 
  };
  
  const handlePackageChange = (pack) => {
    setCheckupData({ 
      ...checkupData, 
      package: pack, 
      appointmentDate: '',
      timeSlot: ''
    });
    setSelectedSlot('');
  };
    
  const handleMCU = async (e) => {
    e.preventDefault();
  
    if (!checkupData.timeSlot) {
      alert("Please select a time slot before confirming your check-up reservation.");        
      return;
    } 
    try {
      const response = await fetch('http://localhost:5000/api/checkup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkupData) 
      });

      const data = await response.json();
    
      if (response.ok) {
        setQrCode(data.qrCode);
        setTokenNumber(data.tokenNumber); 
        setIsBooked(true);
        alert("Check-up successful! Your queue placement has been generated.");
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      alert("Error connecting to server. Is your backend running?");
    }
  };

  return (
    <div className="bookingBox">
      <h2 className="form-heading">Health Screening Registration</h2>

      {!isBooked ? (            
        <form onSubmit={handleMCU}>
          <div className="form-group">
            <label className="form-label"><b>Full Name:</b></label> 
            <input 
              type="text" 
              required 
              className="fluid-input"
              value={checkupData.patientName}
              onChange={e => setCheckupData({...checkupData, patientName: e.target.value})}
            />
          </div>    

          <div className="form-group">
            <label className="form-label"><b>NIC Number:</b></label> 
            <input 
              type="text" 
              required 
              className="fluid-input"
              value={checkupData.patientNIC}
              onChange={e => setCheckupData({...checkupData, patientNIC: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label className="form-label"><b>Select Check-up Package:</b></label>
            <select 
              required 
              className="fluid-select"
              value={checkupData.package}
              onChange={e => handlePackageChange(e.target.value)}
            >
              <option value="">-- Choose Package --</option>
              <option value="basic">Basic Health Track </option>
              <option value="executive">Executive Senior Screening</option>
              <option value="cardiac">Comprehensive Cardiac Check</option>
            </select>
          </div>
                
          <div className="form-group">
            <div className="inline-date-wrap">
              <label className="form-label"><b>Preferred Date:</b></label> 
              <input 
                type="date" 
                name="appointmentDate" 
                className="fluid-date-input"
                value={checkupData.appointmentDate} 
                disabled={!checkupData.package} 
                onChange={(e) => handleDateChange(e.target.value)}
                min={getTomorrowDate()}
                required
              />
            </div>
          </div>

          {checkupData.appointmentDate && (
            <div className="slots-section">
              <span className="slots-title"><b>Available Time Slots:</b></span>
              <div className="time-slot-grid">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    className={`slot-btn ${selectedSlot === slot.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedSlot(slot.id);
                      setCheckupData({ ...checkupData, timeSlot: slot.id });
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
              <b>BOOK MEDICAL CHECK-UP</b>
            </button>
          </div>
        </form>
      ) : (
        <div className="receipt-view">
          <h3 className="success-text">✅ Booking Confirmed!</h3>
    
          <div className="token-display-card">
            <span className="token-label">Your Queue Token Number</span>
            <h1 className="token-number">{tokenNumber}</h1>
          </div>
    
          <p className="receipt-note">Please save this QR code and token layout to present at reception.</p>
    
          <div className="qr-container-box">
            <img src={qrCode} alt="Appointment QR Code" className="receipt-qr-img" />
          </div>
    
          <div className="receipt-details-grid">
            <p><strong>Patient:</strong> {checkupData.patientName}</p>
            <p><strong>NIC:</strong> {checkupData.patientNIC}</p>
            <p><strong>Date:</strong> {checkupData.appointmentDate}</p>
            <p><strong>Selected Slot:</strong> Slot {checkupData.timeSlot}</p>
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

export default MedicalCheckup;