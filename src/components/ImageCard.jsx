import { faArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { ActionButton } from "./ActionButton";
import { ImageUserProfile } from "./ImageUserProfile";

export const ImageCard = ({ image }) => {
	return (
		<div className="flex flex-col gap-2 md:gap-0">
			<section className="px-2 md:hidden">
				<ImageUserProfile user={image.user} />
			</section>
			<div
				style={{
					aspectRatio: `${image.width} / ${image.height}`,
					backgroundColor: `${image.color}`,
				}}
				className="relative md:cursor-zoom-in group"
			>
				<NavLink to={`image/${image.id}`} className="cursor-zoom-in">
					<img
						src={image.urls.regular}
						alt={image.alt_description}
						className="absolute top-0 left-0 w-full h-full group-hover:brightness-75 transition"
						loading="lazy"
					/>
				</NavLink>

				<div className="flex justify-end items-center gap-2 cursor-default absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
					<ActionButton>
						<FontAwesomeIcon icon={faHeart} />
					</ActionButton>
					<ActionButton>
						<FontAwesomeIcon icon={faPlus} />
					</ActionButton>
				</div>
				<div className="flex justify-between items-end w-full h-fit p-4 cursor-default absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity">
					<ImageUserProfile user={image.user} />
					<ActionButton>
						<FontAwesomeIcon icon={faArrowDown} />
					</ActionButton>
				</div>
			</div>
			<section className="flex justify-between items-center px-2 md:hidden">
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
			</section>
		</div>
	);
};
