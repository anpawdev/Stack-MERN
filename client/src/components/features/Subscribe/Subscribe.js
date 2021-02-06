import React from 'react';

class Subscribe extends React.Component {
    render() {
        return(
            <div className="flex items-center justify-center text-center bg-section-200 py-2 mt-10 h-section">
                <input className="text-sm bg-section-200 p-2 focus:outline-none border-b-2 border-white" 
					type="text" 
					placeholder="Email Address"
				/>
                <button className="mx-6 p-3 bg-white text-xs uppercase tracking-widest">Subscribe</button>
            </div>
            
        );
    }
};

export default Subscribe;