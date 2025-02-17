import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Search = ({ searchTerm, onSearch }) => {
	const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!localSearchTerm.trim()) return;
		onSearch(localSearchTerm);
	};

	const handleChange = (e) => {
		setLocalSearchTerm(e.target.value);
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
					value={localSearchTerm}
				/>
			</div>
		</form>
	);
};
