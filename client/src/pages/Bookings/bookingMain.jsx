import React from 'react';
import ChanSchedule from './ChanSchedule';
import DChannel from './DChannel';

function bookingMain(){
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '60px',
            padding: '40px 20px',
            maxWidth: '1500px',
            margin: '0 auto'
        }}>
            <div style={{ flex: '1 1 600px', maxWidth: '900px' }}>
                <ChanSchedule />
            </div>
            <div style={{ flex: '1 1 400px', maxWidth: '500px', width: '100%' }}>
                <DChannel />
            </div>
        </div>
    );
};

export default bookingMain;
 