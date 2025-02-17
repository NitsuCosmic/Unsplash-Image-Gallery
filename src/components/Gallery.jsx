import { useEffect, useState } from "react";

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
				<div key={index} className="flex flex-col gap-4">
					{section.map((image) => (
						<div key={image.id} className="h-min">
							<img src={image.urls.regular} alt={image.alt_description} />
						</div>
					))}
				</div>
			))}
		</section>
	);
};
