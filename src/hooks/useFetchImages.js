import { useCallback, useEffect, useState } from "react";
import { BASE_URL, options } from "../services/api";

export const useFetchImages = () => {
	const [images, setImages] = useState(null);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	const fetchImages = useCallback(async () => {
		setIsLoading(true);

		try {
			const response = await fetch(
				`${BASE_URL}photos?page=${page}&per_page=30`,
				options
			);
			const data = await response.json();

			setImages((prevImages) =>
				page === 1 ? data : [...(prevImages || []), ...data]
			);
		} catch (error) {
			console.error(`Error fetching photos: ${error}`);
		} finally {
			setIsLoading(false);
		}
	}, [page]);

	useEffect(() => {
		fetchImages();
	}, [fetchImages]);

	return { images, isLoading, setPage };
};
