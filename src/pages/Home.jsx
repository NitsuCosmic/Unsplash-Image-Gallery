import { useFetchImages } from "../hooks/useFetchImages";
import { ActionButton } from "../components/ActionButton";
import { Gallery } from "../components/Gallery";
import { Spinner } from "../components/Spinner";

export const Home = () => {
	const { images, isLoading, setPage } = useFetchImages();

	return (
		<>
			{images ? (
				<div className="flex flex-col gap-4">
					<Gallery images={images} />
					{!isLoading && (
						<div className="flex justify-center w-full">
							<ActionButton
								isMobile={true}
								clickFunction={() => setPage((prev) => prev + 1)}
								disabled={isLoading}
							>
								Load More
							</ActionButton>
						</div>
					)}
					{isLoading && <Spinner />}
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};
