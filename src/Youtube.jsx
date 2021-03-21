import React from "react";
import { Container } from "react-bootstrap";
function Youtube() {
	return (
		<Container className="justify-content-center text-center my-5">
			<h1>Enter Youtube Link</h1>
			<br />
			<input
				type="url"
				name="YoutubeLink"
				placeholder="Enter Youtube Link Here"
				style={{
					border: "None",
					outline: "none",
					borderBottom: "1px solid #CCC",
				}}
			/>
		</Container>
	);
}

export default Youtube;
