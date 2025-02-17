export const ImageUserProfile = ({ user }) => {
	return (
		<div className="flex items-center gap-2">
			<div>
				<img
					src={user.profile_image.medium}
					alt={`${user.username}'s profile image`}
					className="rounded-full max-w-8"
				/>
			</div>
			<div>
				<h4 className="leading-[1rem] text-black hover:underline md:text-white/80 font-bold w-fit md:hover:text-white transition-colors cursor-pointer overflow-clip line-clamp-1">
					{user.username}
				</h4>
				{user.for_hire ? (
					<p className="leading-[1rem] text-neutral-500 text-sm md:text-neutral-200">
						Available for hiring
					</p>
				) : null}
			</div>
		</div>
	);
};
