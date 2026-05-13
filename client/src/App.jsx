import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    appointmentDate: '',
    appointmentTime: ''
  });

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      alert(data.message || "Something went wrong");
    } catch (err) {
      alert("Error: Is your server running?");
    }
  };

  return (


    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      
      <h2>Booking System</h2>
      
      <form onSubmit={handleBook} style={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
       
        <p><b>Enter your Name :</b> <input  type="text" required onChange={(e) => setFormData({...formData, patientName: e.target.value})} /></p>
        <p><b>Enter Doctor's Name : </b> <input type="text" required onChange={(e) => setFormData({...formData, doctorName: e.target.value})} /></p>
        <p><b>Date:</b> <input type="date" required onChange={(e) => setFormData({...formData, appointmentDate: e.target.value})} /></p>
        <p><b>Time :</b> <input type="time" required onChange={(e) => setFormData({...formData, appointmentTime: e.target.value})} /></p>
        <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', maxWidth:'300px'}}>
          Confirm Booking
        </button>

      </form>
    </div>
  );
}

export default App;

