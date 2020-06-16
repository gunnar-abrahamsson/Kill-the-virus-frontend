import React from 'react';

const Waiting = (props) => {
	return (
        <div className="waiting_container">
            <h2 className="text-center">
                Searching for opponent
            </h2>
            {/* div to slide over background?? haxxor */}
            <div className="virus_icons">
            </div>
        </div>
	)
}

export default Waiting;