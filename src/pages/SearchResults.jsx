import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ActionButton } from "../components/ActionButton";
import { Gallery } from "../components/Gallery";
import { Spinner } from "../components/Spinner";
import { BASE_URL, options } from "../services/api";

export const SearchResults = () => {
	const { query } = useParams();
	const [searchResults, setSearchResults] = useState(null);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const searchImages = useCallback(async () => {
		if (!query.trim()) return;

		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`${BASE_URL}search/photos?query=${encodeURIComponent(
					query
				)}&page=${page}&per_page=30`,
				options
			);
			const data = await response.json();

			setSearchResults((prevResults) =>
				page === 1 ? data.results : [...(prevResults || []), ...data.results]
			);
		} catch (error) {
			console.error(`Error fetching photos: ${error}`);
		} finally {
			setIsLoading(false);
		}
	}, [query, page]);

	useEffect(() => {
		setPage(1);
		setSearchResults(null);
	}, [query]);

	useEffect(() => {
		searchImages();
	}, [searchImages]);

	return (
		<div className="flex flex-col gap-4">
			{error && <p className="text-red-500 text-center">{error}</p>}

			{searchResults && (
				<>
					<h1 className="font-roboto font-bold text-responsive-title px-2">
						Results for &quot;{query.trim()}&quot;
					</h1>
					<Gallery images={searchResults} />
				</>
			)}

			{searchResults && !isLoading && (
				<div className="flex justify-center w-full">
					<ActionButton
						isMobile={true}
						clickFunction={() => setPage((prev) => prev + 1)}
						isDisabled={isLoading}
					>
						Load More
					</ActionButton>
				</div>
			)}

			{isLoading && <Spinner />}
		</div>
	);
};
