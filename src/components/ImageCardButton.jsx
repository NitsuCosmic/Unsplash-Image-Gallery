const baseStyles =
	"text-neutral-500 bg-neutral-200 py-2 px-4 rounded-md cursor-pointer hover:bg-white hover:text-black transition-colors";
const mobileStyles =
	"text-neutral-500 bg-white py-2 px-4 rounded-md border-1 border-neutral-200 cursor-pointer hover:bg-neutral-200 transition-colors";

export const ImageCardButton = ({ children, isMobile = false }) => {
	return (
		<button
			className={`flex items-center ${isMobile ? mobileStyles : baseStyles}`}
		>
			{children}
		</button>
	);
};
