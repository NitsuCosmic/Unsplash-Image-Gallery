import { useState } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { SearchResults } from "./components/SearchResults";

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = async (term) => {
		setSearchTerm(term);
	};

	return (
		<>
			<header>
				<Navbar searchTerm={searchTerm} onSearch={handleSearch} />
			</header>
			<main>
				<section className="max-w-screen-2xl mx-auto py-2 md:px-2">
					<Home />
					{searchTerm && <SearchResults searchTerm={searchTerm} />}
				</section>
			</main>
		</>
	);
}

export default App;
