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
      
      if (!res.ok) throw new Error(data.error || 'Patient location mismatch inside active database.');
      setPatientInfo(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // 2. Validate Ward Safe Limits and Generate Pass Token
  const handleIssuePass = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!form.slotId || !form.selectedTimeStr) {
      setError('Please select a specific visit session window from the timeline.');
      return;
    }

    try {
      const payload = {
        patientId: patientInfo._id,
        visitorName: form.visitorName,
        visitDate: form.visitDate,
        slotId: form.slotId,
        selectedTimeStr: form.selectedTimeStr,
        durationMinutes: parseInt(form.durationMinutes)
      };

      const res = await fetch('http://localhost:5000/api/visiting/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Concurrent floor capacity limit reached.');
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="bookingBox">
      <h2 className="form-heading">Visiting Pass Clearance Engine</h2>

      {/* STAGE A: PATIENT LOCATOR ENQUIRY */}
      {!patientInfo && !result && (
        <form onSubmit={handleVerifyPatient}>
          <p className="section-subtext">Locate the active patient room assignment profile inside the ward matrix:</p>
          
          <div className="form-group">
            <label className="form-label"><b>Ward Location Number:</b></label>
            <input 
              type="text" 
              placeholder="e.g., Ward 04B" 
              required 
              className="fluid-input"
              value={search.wardNo} 
              onChange={e => setSearch({ ...search, wardNo: e.target.value })} 
            />
          </div>

          <div className="form-group">
            <label className="form-label"><b>Assigned Bed Number:</b></label>
            <input 
              type="text" 
              placeholder="e.g., Bed 12" 
              required 
              className="fluid-input"
              value={search.bedNo} 
              onChange={e => setSearch({ ...search, bedNo: e.target.value })} 
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn"><b>VERIFY LOCATION MATRIX</b></button>
          </div>
          {error && <p className="fluid-error-msg">⚠️ {error}</p>}
        </form>
      )}

      {/* STAGE B: VISITOR REGISTRATION & DURATION PROFILE */}
      {patientInfo && !result && (
        <form onSubmit={handleIssuePass}>
          <div className="patient-banner-card">
            <h4 className="banner-title"> Active Match Connected.</h4>
            <p><strong>Patient Name:</strong> {patientInfo.patientName}</p>
            <p><strong>Location Structure:</strong> {patientInfo.wardNo} — [{patientInfo.bedNo}]</p>
          </div>

          <div className="form-group">
            <label className="form-label"><b>Visitor Full Name:</b></label>
            <input 
              type="text" 
              required 
              className="fluid-input"
              placeholder="Enter your legal identity name"
              value={form.visitorName} 
              onChange={e => setForm({ ...form, visitorName: e.target.value })} 
            />
          </div>

          <div className="form-group">
            <div className="inline-date-wrap">
              <label className="form-label"><b>Intended Date:</b></label>
              <input 
                type="date" 
                required 
                className="fluid-date-input"
                min={getTomorrowDate()}
                value={form.visitDate} 
                onChange={e => setForm({ ...form, visitDate: e.target.value })} 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label"><b>Select Session Blocks:</b></label>
            <select 
              required 
              className="fluid-select"
              value={form.slotId} 
              onChange={e => setForm({ ...form, slotId: e.target.value, selectedTimeStr: '' })}
            >
              <option value="">-- Choose Access Session --</option>
              {Object.entries(VISITING_SLOTS).map(([id, s]) => (
                <option key={id} value={id}>{s.label}</option>
              ))}
            </select>
          </div>

          {form.slotId && (
            <div className="form-group">
              <label className="form-label"><b>Select Arrival Time:</b></label>
              <select 
                required 
                className="fluid-select"
                value={form.selectedTimeStr} 
                onChange={e => setForm({ ...form, selectedTimeStr: e.target.value })}
              >
                <option value="">-- Select Exact Window --</option>
                {form.slotId === 'V1' && (
                  <>
                    <option value="06:30">06:30 AM</option>
                    <option value="07:00">07:00 AM</option>
                    <option value="07:30">07:30 AM</option>
                    <option value="08:00">08:00 AM</option>
                  </>
                )}
                {form.slotId === 'V2' && (
                  <>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="13:30">01:30 PM</option>
                  </>
                )}
                {form.slotId === 'V3' && (
                  <>
                    <option value="17:00">05:00 PM</option>
                    <option value="17:30">05:30 PM</option>
                    <option value="18:00">06:00 PM</option>
                  </>
                )}
              </select>
            </div>
          )}

          <div className="form-group slider-wrapper-box">
            <label className="form-label">
              <b>Stated Bedside Duration:</b> <span className="duration-highlight">({form.durationMinutes} Minutes Max)</span>
            </label>
            <input 
              type="range" 
              min="15" 
              max="30" 
              step="15" 
              className="fluid-slider-input"
              value={form.durationMinutes} 
              onChange={e => setForm({ ...form, durationMinutes: e.target.value })} 
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn-success"><b>Verify Capacity & Book Pass</b></button>
          </div>
          {error && <p className="fluid-error-msg">⚠️ {error}</p>}
        </form>
      )}

      {/* STAGE C: GENERATED SECURITY PASS BARCODE */}
      {result && (
        <div className="receipt-view">
          <div className="success-banner-alert">
            Visitation Security Clearance Granted!
          </div>
          
          <div className="token-display-card">
            <span className="token-label">Your Secure Access Queue ID</span>
            <h1 className="token-number">{result.tokenNumber}</h1>
          </div>
          
          <div className="qr-container-box">
            <img src={result.qrCode} alt="Security Check Pass QR" className="receipt-qr-img" />
          </div>
          
          <p className="receipt-note">Scan this code at the floor control gate to verify concurrent visitor caps.</p>
          
          <button onClick={() => window.location.reload()} className="reset-btn">
            Issue New Visitor Pass
          </button>
        </div>
      )}
    </div>
  );
}

export default VisitingPass;
