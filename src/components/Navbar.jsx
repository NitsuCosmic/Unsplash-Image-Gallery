import { faUnsplash } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Search } from "./Search";

export const Navbar = ({ searchTerm, onSearch }) => {
	return (
		<nav className="flex items-center gap-2 p-2 max-w-screen-2xl mx-auto">
			<a href="https://unsplash.com/" target="_blank">
				<FontAwesomeIcon icon={faUnsplash} size="2x" />
			</a>
			<Search searchTerm={searchTerm} onSearch={onSearch} />
		</nav>
	);
};
