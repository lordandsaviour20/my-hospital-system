import React, { useState } from 'react';

const VISITING_SLOTS = {
  V1: { label: 'Morning Session (6:30 AM - 8:30 AM)', start: '06:30', end: '08:30' },
  V2: { label: 'Mid-Day Session (12:00 PM - 2:00 PM)', start: '12:00', end: '14:00' },
  V3: { label: 'Evening Session (5:00 PM - 6:30 PM)', start: '17:00', end: '18:30' }
};

function VisitingPass() {
  const [search, setSearch] = useState({ wardNo: '', bedNo: '' });
  const [patientInfo, setPatientInfo] = useState(null);
  const [form, setForm] = useState({ visitorName: '', visitDate: '', slotId: '', selectedTimeStr: '', durationMinutes: 15 });
  
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // 1. Locate Patient Registry File
  const handleVerifyPatient = async (e) => {
    e.preventDefault();
    setError('');
    setPatientInfo(null);
    try {
      const res = await fetch(`http://localhost:5000/api/visiting/patient?wardNo=${search.wardNo}&bedNo=${search.bedNo}`);
      const data = await res.json();
      if (res.ok) {
        setPatientInfo(data);
      } else {
        setError(data.error);
      }
    } catch {
      setError('Connection to health registry server lost.');
    }
  };

  // 2. Submit Pass Transaction Request
  const handleIssuePass = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/visiting/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, patientId: patientInfo.patientId })
      });
      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        setError(data.error);
      }
    } catch {
      setError('Transaction validation failed.');
    }
  };

  // Helper helper function to populate available drop-down timeline selections
  const generateTimeOptions = (slotId) => {
    if (!slotId) return [];
    const options = [];
    const [startH, startM] = VISITING_SLOTS[slotId].start.split(':').map(Number);
    const [endH, endM] = VISITING_SLOTS[slotId].end.split(':').map(Number);
    
    let current = new Date(2020, 0, 1, startH, startM);
    const end = new Date(2020, 0, 1, endH, endM);

    while (current < end) {
      const timeStr = current.toTimeString().substring(0, 5);
      options.push(timeStr);
      current.setMinutes(current.getMinutes() + 15); // Steps choices out every 15 minutes
    }
    return options;
  };

  return (
    <div className="bookingBox" style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Ward Visitation Security Pass Desk</h2>
      
      {!patientInfo && !result && (
        <form onSubmit={handleVerifyPatient}>
          <h3>Enter Patient Location Details</h3>
          <p><b>Ward Number:</b> <input type="text" required style={{ width: '100%', padding: '8px' }} onChange={e => setSearch({...search, wardNo: e.target.value})} /></p>
          <p><b>Bed Number:</b> <input type="text" required style={{ width: '100%', padding: '8px' }} onChange={e => setSearch({...search, bedNo: e.target.value})} /></p>
          <button type="submit" style={{ width: '100%', padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Locate Patient Record</button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>⚠️ {error}</p>}
        </form>
      )}

      {patientInfo && !result && (
        <form onSubmit={handleIssuePass}>
          <div style={{ background: '#e9ecef', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
            <p style={{ margin: 0 }}><strong>Patient Target Identity:</strong> {patientInfo.patientName}</p>
            <p style={{ margin: '5px 0 0 0' }}><strong>Location Context:</strong> Ward {search.wardNo} / Bed {search.bedNo}</p>
          </div>

          <p><b>Your Full Name:</b> <input type="text" required style={{ width: '100%', padding: '8px' }} onChange={e => setForm({...form, visitorName: e.target.value})} /></p>
          <p><b>Visitation Date:</b> <input type="date" required style={{ width: '100%', padding: '8px' }} onChange={e => setForm({...form, visitDate: e.target.value})} /></p>
          
          <p><b>Select Session Hour Block:</b>
            <select required style={{ width: '100%', padding: '8px' }} onChange={e => setForm({...form, slotId: e.target.value, selectedTimeStr: ''})}>
              <option value="">-- Choose General Session --</option>
              {Object.entries(VISITING_SLOTS).map(([id, s]) => <option key={id} value={id}>{s.label}</option>)}
            </select>
          </p>

          {form.slotId && (
            <>
              <p><b>Exact Check-in Time Option:</b>
                <select required style={{ width: '100%', padding: '8px' }} value={form.selectedTimeStr} onChange={e => setForm({...form, selectedTimeStr: e.target.value})}>
                  <option value="">-- Select Arrival Time --</option>
                  {generateTimeOptions(form.slotId).map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </p>

              <p><b>Length of Planned Stay:</b>
                <select required style={{ width: '100%', padding: '8px' }} onChange={e => setForm({...form, durationMinutes: Number(e.target.value)})}>
                  <option value="15">15 Minutes</option>
                  <option value="30">30 Minutes (Maximum Allowed)</option>
                </select>
              </p>
            </>
          )}

          <button type="submit" style={{ width: '100%', padding: '12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>Verify Capacity & Book Pass</button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>⚠️ {error}</p>}
        </form>
      )}

      {result && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ background: '#d4edda', padding: '10px', borderRadius: '5px', color: '#155724', fontWeight: 'bold' }}>
            Visitation Security Clearance Granted!
          </div>
          <div style={{ margin: '20px 0' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>Your Secure Access Queue ID</span>
            <h1 style={{ fontSize: '48px', color: '#28a745', margin: '5px 0' }}>{result.tokenNumber}</h1>
          </div>
          <div>
            <img src={result.qrCode} alt="Security Check Pass QR" style={{ width: '220px', border: '1px solid #ccc', padding: '5px' }} />
          </div>
          <p style={{ fontSize: '13px', color: '#666', marginTop: '10px' }}>Scan this code at the floor control gate to verify concurrent visitor caps.</p>
          <button onClick={() => window.location.reload()} style={{ padding: '10px 20px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '15px' }}>Done / Exit</button>
        </div>
      )}
    </div>
  );
}

export default VisitingPass;

