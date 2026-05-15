import React from 'react';
import {useState} from 'react';

function Booking() {
    const [formData, setFormData] = useState({
      patientName: '',
      doctorName: '',
      appointmentDate: '',
      appointmentTime: ''
    });
  
    const [qrCode, setQrCode] = useState('');
    const [isBooked, setIsBooked] = useState(false)
  
    const handleBook = async (e) => {
      e.preventDefault();
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
           <p><b>Enter Doctor's Name : </b> <input type="text" style={{ height:'5px', width:'100%',padding:'10px',marginTop:'5px'}} required onChange={(e) => setFormData({...formData, doctorName: e.target.value})}/></p>
           </div>
           
           <div>
           <p><b style={{textAlign:'center',fontSize:'18px'}}>Date :</b> <input type="date" style={{ height:'5px', width:'40%',padding:'10px',marginTop:'5px'}} required onChange={(e) => setFormData({...formData, appointmentDate: e.target.value})}/></p>
           </div>
           
           <div>
           <b style={{textAlign:'center',fontSize:'18px'}}>Time :</b> <input type="time" style={{ height:'5px', width:'39%',padding:'10px 10px 10px',marginTop:'0'}} required onChange={(e) => setFormData({...formData, appointmentTime: e.target.value})}/>
           </div>
           
           <div style={{display:'flex',justifyContent:'center', maxWidth:'auto', height:'60px',marginTop:'30px'}}>
           <button type="submit" style={{padding: '20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer',fontSize:'16px'}}>
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