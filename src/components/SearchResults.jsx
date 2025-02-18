import { useCallback, useEffect, useState } from "react";
import { BASE_URL, options } from "../services/api";
import { ActionButton } from "./ActionButton";
import { Gallery } from "./Gallery";
import { Spinner } from "./Spinner";

export const SearchResults = ({ searchTerm }) => {
	const [prevSearchTerm, setPrevSearchTerm] = useState(searchTerm);
	const [searchResults, setSearchResults] = useState(null);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	const searchImages = useCallback(async () => {
		if (!searchTerm.trim()) return;
		setIsLoading(true);

		try {
			const response = await fetch(
				`${BASE_URL}search/photos?query=${encodeURI(
					searchTerm
				)}&page=${page}&per_page=30`,
				options
			);
			const data = await response.json();
			const { results } = data;

			setSearchResults((prevResults) =>
				page === 1 ? results : [...(prevResults || []), ...results]
			);
		} catch (error) {
			console.error(`Error fetching photos: ${error}`);
		} finally {
			setIsLoading(false);
		}
	}, [searchTerm, page]);

	useEffect(() => {
		if (searchTerm !== prevSearchTerm) {
			setPage(1);
			setSearchResults(null);
			setPrevSearchTerm(searchTerm);
		}
	}, [searchTerm, prevSearchTerm]);

	useEffect(() => {
		searchImages();
	}, [searchImages]);

	return (
		<div className="flex flex-col gap-4">
			<h1 className="font-roboto font-bold text-responsive-title px-2">
				Results for &quot;{searchTerm}&quot;
			</h1>
			{searchResults ? <Gallery images={searchResults} /> : null}
			{!isLoading && searchResults && (
				<div className="flex justify-center w-full">
					<ActionButton
						isMobile={true}
						clickFunction={() => setPage((prevPage) => prevPage + 1)}
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
