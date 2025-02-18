import { faArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionButton } from "./ActionButton";
import { ImageUserProfile } from "./ImageUserProfile";

export const ImageCard = ({ image }) => {
	return (
		<div className="flex flex-col gap-2 md:gap-0 group">
			<div className="px-2 md:hidden">
				<ImageUserProfile user={image.user} />
			</div>
			<div
				style={{
					aspectRatio: `${image.width} / ${image.height}`,
					backgroundColor: `${image.color}`,
				}}
				className="relative md:cursor-zoom-in"
			>
				<img
					src={image.urls.regular}
					alt={image.alt_description}
					className="w-full h-full"
					loading="lazy"
				/>
				<div className="hidden md:flex flex-col justify-between absolute top-0 left-0 w-full h-full p-4 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
					<div className="flex justify-end items-center gap-2">
						<ActionButton>
							<FontAwesomeIcon icon={faHeart} />
						</ActionButton>
						<ActionButton>
							<FontAwesomeIcon icon={faPlus} />
						</ActionButton>
					</div>
					<div className="flex justify-between items-end h-fit">
						<ImageUserProfile user={image.user} />
						<ActionButton>
							<FontAwesomeIcon icon={faArrowDown} />
						</ActionButton>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center px-2 md:hidden">
				<div className="flex gap-2">
					<ActionButton isMobile={true}>
						<FontAwesomeIcon icon={faHeart} />
					</ActionButton>
					<ActionButton isMobile={true}>
						<FontAwesomeIcon icon={faPlus} />
					</ActionButton>
				</div>
				<ActionButton isMobile={true}>
					<FontAwesomeIcon icon={faArrowDown} />
				</ActionButton>
			</div>
		</div>
	);
};
