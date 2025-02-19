import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [prevSearchTerm, setPrevSearchTerm] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		// Reset only if the user leaves the search results page
		if (!location.pathname.startsWith("/search")) {
			setSearchTerm("");
			setPrevSearchTerm("");
		}
	}, [location.pathname]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const trimmedTerm = searchTerm.trim();
		if (!trimmedTerm || trimmedTerm === prevSearchTerm) return;
		if (searchTerm.trim() === prevSearchTerm.trim()) return;
		navigate(`/search/${encodeURI(searchTerm)}`);
		setPrevSearchTerm(trimmedTerm);
	};

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<form className="w-full" onSubmit={(e) => handleSubmit(e)}>
			<div className="relative flex items-center gap-2 px-4 rounded-full border-1 border-neutral-200 bg-neutral-200 hover:bg-neutral-300 transition-colors focus-within:bg-white focus-within:hover:bg-white focus-within:border-neutral-300">
				<FontAwesomeIcon
					icon={faSearch}
					size="md"
					className="text-neutral-500"
				/>
				<input
					type="text"
					name="image-search"
					id="searchImg"
					className="font-roboto h-full w-full py-3 outline-0 text-sm placeholder:text-sm"
					placeholder="Search for images and illustrations"
					onChange={handleChange}
					value={searchTerm}
				/>
			</div>
		</form>
	);
};
