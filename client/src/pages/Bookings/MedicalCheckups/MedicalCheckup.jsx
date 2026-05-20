import React, { useState } from 'react';

function MedicalCheckup() {
    const [checkupData, setCheckupData] = useState({ name: '', nic: '', package: '', date: '' });

    return (
        <div className="BookingBox" style={{ maxWidth: '500px', margin: '40px auto' }}>
            <h2 style={{ textAlign: 'center' }}>Health Screening Registration</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Check-up request submitted!'); }}>
                <p><b>Full Name:</b> <input type="text" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} onChange={e => setCheckupData({...checkupData, name: e.target.value})} /></p>
                <p><b>NIC Number:</b> <input type="text" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} onChange={e => setCheckupData({...checkupData, nic: e.target.value})} /></p>
                <p><b>Select Check-up Package:</b>
                    <select required style={{ width: '100%', padding: '8px', marginTop: '5px' }} onChange={e => setCheckupData({...checkupData, package: e.target.value})}>
                        <option value="">-- Choose Package --</option>
                        <option value="basic">Basic Health Track </option>
                        <option value="executive">Executive Senior Screening</option>
                        <option value="cardiac">Comprehensive Cardiac Check</option>
                    </select>
                </p>
                <p><b>Preferred Date:</b> <input type="date" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} onChange={e => setCheckupData({...checkupData, date: e.target.value})} /></p>
                <button type="submit" style={{ width: '100%', padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', marginTop: '15px', cursor: 'pointer' }}><b>BOOK CHECK-UP</b></button>
            </form>
        </div>
    );
}

export default MedicalCheckup;