import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
const App = () => {
	return (
		<>
			<div className="root">
				<Navbar />
				<Menu />
				<div className="footer">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default App;
