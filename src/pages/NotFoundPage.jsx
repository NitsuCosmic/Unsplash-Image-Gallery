import { NavLink } from "react-router";
import { ActionButton } from "../components/ActionButton";

export const NotFoundPage = () => {
	return (
		<div className="flex justify-center p-2">
			<div className="flex flex-col items-center gap-2">
				<h1 className="text-responsive-title font-bold">404 Page not found</h1>
				<ActionButton isMobile={true}>
					<NavLink to="/">Home</NavLink>
				</ActionButton>
			</div>
		</div>
	);
};
