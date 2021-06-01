import React from "react";
import AbtprsnltCard from './AbtPrsnltCard'
import data from "../Data/data"

function AboutPersonalities() {
	const temp=data.map((d) => 
			<AbtprsnltCard title={d.title}  content={d.content} summary={d.summary} ButtonName="Know More"></AbtprsnltCard> )
	
			return (
		<>
		{temp}
		</>
	)
}

export default AboutPersonalities;
