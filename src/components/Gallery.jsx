import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";

export const Gallery = ({ images }) => {
	const [sections, setSections] = useState([[], [], []]);

	useEffect(() => {
		if (!images || images.length === 0) {
			setSections([[], [], []]); // Reset if no images
			return;
		}

		const sectionSize = Math.ceil(images.length / 3); // Determine section size
		const newSections = [
			images.slice(0, sectionSize),
			images.slice(sectionSize, 2 * sectionSize),
			images.slice(2 * sectionSize),
		];
		setSections(newSections);
	}, [images]);

	return (
		<section className="grid md:grid-cols-3 gap-4">
			{sections.map((section, index) => (
				<div key={index} className="grid gap-4 h-fit pb-4">
					{section.map((image) => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
			))}
		</section>
	);
};
