import { Gallery } from "./Gallery";

export const SearchResults = ({ searchTerm, searchResults }) => {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="font-roboto font-bold text-responsive-title">
				Results for &quot;{searchTerm}&quot;
			</h1>
			{searchResults && <Gallery images={searchResults.results} />}
		</div>
	);
};
