import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { SearchResults } from "./components/SearchResults";
import { Spinner } from "./components/Spinner";
import { BASE_URL, options } from "./services/api";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSearch = async (term) => {
		setSearchTerm(term);
	};

	const searchImages = async (term) => {
		if (!term.trim()) return;
		setIsLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}search/photos?query=${encodeURI(term)}&per_page=30`,
				options
			);
			const data = await response.json();
			console.log(data);

			setSearchResults(data);
		} catch (error) {
			console.error(`Error fetching photos: ${error}`);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		searchImages(searchTerm);
	}, [searchTerm]);

	return (
		<>
			<header>
				<Navbar searchTerm={searchTerm} onSearch={handleSearch} />
			</header>
			<main>
				<section className="max-w-screen-2xl mx-auto p-2">
					{isLoading && <Spinner />}
					{!isLoading && searchResults && (
						<SearchResults
							searchTerm={searchTerm}
							searchResults={searchResults}
						/>
					)}
				</section>
			</main>
		</>
	);
}

export default App;
