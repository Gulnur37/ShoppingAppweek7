
import React from 'react';
import Navbar from './Navbar';

import OrderTracker from './OrderTracker';


function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1> Alışveriş Uygulaması</h1>
                <OrderTracker />
                
            </div>
        </div>
    );
}

export default App;
