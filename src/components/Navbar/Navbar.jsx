import "./Navbar.scss";
import img2 from "../../../src/logo.png";

const Navbar = () => {
	return (
		<div className="navbar">
			<div>
				<img src={img2} alt="100px" />
			</div>
			<div className="card-div">
				<a href="#">HOROSCOPE</a>
				<a href="#">DAILY</a>
				<a href="#">TAROT</a>
				<a href="#">ARTICLE</a>
				<a href="#">CONTACT</a>
			</div>
		</div>
	);
};

export default Navbar;
