const baseStyles =
	"text-neutral-500 bg-neutral-200 py-2 px-4 rounded-md cursor-pointer hover:bg-white hover:text-black transition-colors";
const mobileStyles =
	"text-neutral-500 bg-transparent py-2 px-4 rounded-md border-1 border-neutral-200 cursor-pointer hover:bg-neutral-200 transition-colors";

export const ActionButton = ({
	children,
	isMobile = false,
	clickFunction = null,
	isDisabled = false,
}) => {
	const handleClick = () => {
		if (isDisabled) return;
		clickFunction();
	};

	return (
		<button
			onClick={handleClick}
			className={`flex items-center w-fit ${
				isMobile ? mobileStyles : baseStyles
			}`}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
};
