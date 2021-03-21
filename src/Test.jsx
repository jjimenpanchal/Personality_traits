// import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Test = () => {
	return (
		<>
			<Container className="justify-content-center text-center my-4 py-4">
				<Jumbotron>
					<h1>MCQ Test</h1>
					<p>
						This is a simple hero unit, a simple jumbotron-style component for
						calling extra attention to featured content or information.
					</p>
					<p>
						<NavLink to="/test/mcqtest">
							<Button variant="primary">Start</Button>
						</NavLink>
					</p>
				</Jumbotron>
				<br />
				<Jumbotron>
					<h1>Youtube</h1>
					<p>
						This is a simple hero unit, a simple jumbotron-style component for
						calling extra attention to featured content or information.
					</p>
					<p>
						<NavLink to="/test/youtube">
							<Button variant="primary">GO</Button>
						</NavLink>
					</p>
				</Jumbotron>
				<br />
				<Jumbotron>
					<h1>Social Media</h1>
					<p>
						This is a simple hero unit, a simple jumbotron-style component for
						calling extra attention to featured content or information.
					</p>
					<p>
						<NavLink to="/test/socialmedia">
							<Button variant="primary">GO</Button>
						</NavLink>
					</p>
				</Jumbotron>
				<br />
			</Container>
		</>
	);
};

export default Test;
