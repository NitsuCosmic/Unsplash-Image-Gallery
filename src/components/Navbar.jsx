import { faUnsplash } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { Search } from "./Search";

export const Navbar = () => {
	return (
		<nav className="flex items-center gap-2 p-2 max-w-screen-2xl mx-auto">
			<NavLink to="/">
				<FontAwesomeIcon icon={faUnsplash} size="2x" />
			</NavLink>
			<Search />
		</nav>
	);
};
