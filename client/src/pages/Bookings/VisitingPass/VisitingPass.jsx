import React, { useState } from 'react';

function VisitingPass() {
    const [visitData, setVisitData] = useState({ visitorName: '', wardNo: '', bedNo: '', visitSlot: '' });

    return (
        <div className="bookingBox" style={{ maxWidth: '500px', margin: '40px auto' }}>
            <h2 style={{ textAlign: 'center' }}>Patient Visitor Pass Request</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Visitor pass issued! Keep your digital confirmation ready.'); }}>
                <p><b>Visitor Name:</b> <input type="text" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} onChange={e => setVisitData({...visitData, visitorName: e.target.value})} /></p>
                <p><b>Ward / Room Number:</b> <input type="text" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} onChange={e => setVisitData({...visitData, wardNo: e.target.value})} /></p>
                <p><b>Patient Bed Number:</b> <input type="text" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} onChange={e => setVisitData({...visitData, bedNo: e.target.value})} /></p>
                <p><b>Select Allocation Timing:</b>
                    <select required style={{ width: '100%', padding: '8px', marginTop: '5px' }} onChange={e => setVisitData({...visitData, visitSlot: e.target.value})}>
                        <option value="">-- Choose Visiting Hour --</option>
                        <option value="noon">Mid-Day Session (12:00 PM - 01:30 PM)</option>
                        <option value="evening">Evening Session (04:30 PM - 06:30 PM)</option>
                    </select>
                </p>
                <button type="submit" style={{ width: '100%', padding: '12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', marginTop: '15px', cursor: 'pointer' }}><b>GENERATE VISITING PASS</b></button>
            </form>
        </div>
    );
}

export default VisitingPass;