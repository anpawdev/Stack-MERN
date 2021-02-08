import React from 'react';

class Subscribe extends React.Component {
    render() {
        return(
            <div className="container flex items-center justify-center text-center bg-section-200 p-2 mt-10 h-section">
                <input className="w-2/5 text-sm bg-section-200 py-2 mx-2 mt-3 focus:outline-none border-b-2 border-white" 
					type="text" 
					placeholder="Email"
				/>
                <button className="mx-2 p-3 mt-3 bg-white text-xs uppercase tracking-widest">Subscribe</button>
            </div>
            
        );
    }
};

export default Subscribe;