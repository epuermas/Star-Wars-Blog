import React from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			showDropdown: false
		};
	}

	render() {
		let show = "";
		if (this.state.clickedDropDown) show = "show";
		return (
			<nav className="navbar navbar-light header d-flex justify-content-between bg-light">
				<Context.Consumer>
					{({ actions, store }) => (
						<div className="container">
							<Link className="navbar-brand text-white" to="/">
								<img
									className="logo"
									src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
								/>
							</Link>
							<a className={"nav-item dropdown " + (this.state.showDropdown ? "show" : "")}>
								<a
									className="btn btn-primary nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded={this.state.clickedDropDown}
									onClick={() =>
										this.setState({
											clickedDropDown: !this.state.clickedDropDown
										})
									}>
									Favorites <span className="badge badge-secondary">{store.favorites.length}</span>
								</a>
								<div className={"dropdown-menu " + show} aria-labelledby="navbarDropdown">
									{store.favorites.length > 0 ? (
										store.favorites.map((elm, index) => (
											<li key={index} className="dropdown-item">
												<Link to={`/details/${index + 1}`}>{elm.name}</Link>
												<i
													className="fas fa-trash"
													onClick={() => actions.deleteFromFavorites(elm)}
												/>
											</li>
										))
									) : (
										<li className="dropdown-item text-center">(empty)</li>
									)}
								</div>
							</a>
						</div>
					)}
				</Context.Consumer>
			</nav>
		);
	}
}
Navbar.propTypes = {
	index: PropTypes.number
};
