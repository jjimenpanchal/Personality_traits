import React from "react";
import { Container } from "react-bootstrap";
function Socialmedia() {
	return (
		<Container className="justify-content-center text-center my-5">
			<h1>Enter Profile Link</h1>
			<br />
			<input
				type="url"
				name="ProfileLink"
				placeholder="Enter Profile Link Here"
				style={{
					border: "None",
					outline: "none",
					borderBottom: "1px solid #CCC",
				}}
			/>
		</Container>
	);
}

export default Socialmedia;
