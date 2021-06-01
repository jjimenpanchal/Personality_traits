import React from "react";


function PersonalityD(props) {
	console.log(props)
    
    return (
		<>
		<div>
            {/* jimen */}
            {props.location.state.content}
        </div>

		</>
	)
}

export default PersonalityD;
