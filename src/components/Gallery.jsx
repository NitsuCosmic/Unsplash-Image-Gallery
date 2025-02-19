import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";

export const Gallery = ({ images }) => {
	const [sections, setSections] = useState([[], [], []]);
	const [prevImages, setPrevImages] = useState(new Set()); // Track seen images

	useEffect(() => {
		if (!images || images.length === 0) {
			setSections([[], [], []]); // Reset if no images
			setPrevImages(new Set()); // Reset tracking
			return;
		}

		const newImages = images.filter((image) => !prevImages.has(image.id)); // Remove duplicates
		const newSections = [[], [], []]; // Start fresh

		// Add previous images back to their original sections
		sections.forEach((section, i) => {
			newSections[i] = [...section];
		});

		// Distribute only new images
		newImages.forEach((image, index) => {
			newSections[index % 3].push(image);
		});

		// Update state
		setSections(newSections);
		setPrevImages(new Set(images.map((img) => img.id))); // Store seen image IDs
	}, [images]);

	return (
		<section className="grid md:grid-cols-3 gap-5">
			{sections.map((section, index) => (
				<div key={index} className="grid gap-5 h-fit pb-4">
					{section.map((image) => (
						<ImageCard key={image.id} image={image} />
					))}
				</div>
			))}
		</section>
	);
};
