import React, { useState } from 'react';


const packageSchedules = {
    Default: [1, 2, 3, 4, 5, 6, 7]  // Monday to Friday
  };

const timeSlots = [
    { id: 'P', label: '6:30 a.m. - 8:00 a.m.' },
    { id: 'Q', label: '8:00 a.m. - 9:30 a.m.' },
    { id: 'R', label: '9:30 a.m. - 11:00 a.m.' },
    { id: 'S', label: '11:00 a.m. - 12:30 p.m.' },
    { id: 'W', label: '1:00 p.m. - 03:30 p.m.' },
    { id: 'X', label: '03:30 p.m. - 05:00 p.m.' },
    { id: 'Y', label: '05:00 p.m. - 06:30 p.m.' },
    { id: 'Z', label: '06:30 p.m. - 08:00 p.m.' }
  ];
  
  function MedicalCheckup() {
      const [checkupData, setCheckupData] = useState({
        patientName: '',
        patientNIC:'',
        package:'',
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
  
        const allowedDays = packageSchedules.Default;

        if (!allowedDays.includes(dayOfWeek) || dayOfWeek === 0 || dayOfWeek === 6) {
            alert(`Medical check-ups are only conducted on weekdays (Monday to Friday). Please choose an available clinic day.`);
            setCheckupData({ ...checkupData, appointmentDate: '', timeSlot: '' });
            setSelectedSlot('');
            return;
          }
        setCheckupData({ ...checkupData, appointmentDate: dateString, timeSlot: '' });
        setSelectedSlot(''); // Reset selected slots when date switches
      };
  
      // Helper to handle Department change
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
                body: JSON.stringify(checkupData) // Sends correct package state fields
              });

            const data = await response.json();
    
            if (response.ok) {
                setQrCode(data.qrCode);
                setTokenNumber(data.tokenNumber); // Displays live dynamic token directly from your backend calculation
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
        <div className="bookingBox" style={{ maxWidth: '500px', margin: '40px auto' }}>
            <h2 style={{ textAlign: 'center' }}>Health Screening Registration</h2>

            {!isBooked ? (            
            <form onSubmit={handleMCU}>

        <div>
            <p><b>Full Name:</b> <input type="text" 
            required style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
            value={checkupData.patientName} /* Added explicit value binding */
            onChange={e => setCheckupData({...checkupData, patientName: e.target.value})} /></p>
        </div>

        <div>
            <p><b>NIC Number:</b> <input type="text" 
            required style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
            value={checkupData.patientNIC} /* Added explicit value binding */
            onChange={e => setCheckupData({...checkupData, patientNIC: e.target.value})} /></p>
        </div>

                <div>
                <p><b>Select Check-up Package:</b>
                    <select required 
                    style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
                    onChange={e => handlePackageChange (e.target.value)}>
                        
                        <option value="">-- Choose Package --</option>
                        <option value="basic">Basic Health Track </option>
                        <option value="executive">Executive Senior Screening</option>
                        <option value="cardiac">Comprehensive Cardiac Check</option>
                    </select>
                </p>
                </div>
                
                <div>
                    <p><b style={{textAlign:'center',fontSize:'18px'}}>Preferred Date: </b> 
                    <input 
                    type="date" 
                    name="appointmentDate" 
                    value={checkupData.appointmentDate} 
                    style={{ height:'5px', width:'40%',padding:'10px',marginTop:'5px'}} 
                    disabled={!checkupData.package} 
                    onChange={(e) => handleDateChange(e.target.value)}
                    min={getTomorrowDate()}
                    required
                        />
                    </p>
                </div>

                {checkupData.appointmentDate && (
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <b style={{ fontSize: '18px' }}>Available Time Slots :</b>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '10px' }}>
                        {timeSlots.map((slot) => (
                    <button
                        key={slot.id}
                        type="button"
                        onClick={() => {
                        setSelectedSlot(slot.id);
                        setCheckupData({ ...checkupData, timeSlot: slot.id });
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
          <div style={{display:'flex',justifyContent:'center',maxWidth:'auto', height:'60px',marginTop:'30px'}}>
            <button type="submit" 
              style={{padding: '20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer',fontSize:'16px'}}>
              <b>BOOK A MEDICAL CHECK-UP</b>
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
                <p><strong>Patient:</strong> {checkupData.patientName}</p>
                <p><strong>NIC:</strong> {checkupData.patientNIC}</p>
                <p><strong>Date:</strong> {checkupData.appointmentDate}</p>
                <p><strong>Selected Slot:</strong> Slot {checkupData.timeSlot}</p>
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
    );
}

export default MedicalCheckup;