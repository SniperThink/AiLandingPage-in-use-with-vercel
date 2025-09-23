import React from "react";

export interface UserAvatarProps {
	shirtColor?: "yellow" | "coral";
	hasComputer?: boolean;
	speechBubble?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ shirtColor = "yellow", hasComputer = true, speechBubble = "" }) => {
	const fill = shirtColor === "yellow" ? "#eab308" : "#ff6b6b";
	return (
		<div className="relative flex items-center justify-center" role="img" aria-label="Business user collaborating">
			{/* Person */}
			<svg width="128" height="128" viewBox="0 0 128 128" aria-hidden="true" focusable="false">
				<circle cx="64" cy="36" r="16" fill="#0f172a" opacity="0.85" />
				<rect x="36" y="56" width="56" height="36" rx="18" fill={fill} />
				<rect x="44" y="92" width="40" height="8" rx="4" fill="#334155" />
			</svg>
			{/* Computer */}
			{hasComputer && (
				<div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
					<svg width="120" height="70" viewBox="0 0 120 70" aria-hidden="true" focusable="false">
						<rect x="10" y="10" width="100" height="42" rx="6" fill="#e2e8f0" />
						<rect x="16" y="16" width="88" height="28" rx="4" fill="#bfdbfe" />
						<polyline points="20,40 36,28 52,34 68,22 84,30" fill="none" stroke="#3b82f6" strokeWidth="2" />
						<rect x="50" y="54" width="20" height="4" rx="2" fill="#94a3b8" />
					</svg>
				</div>
			)}
			{/* Speech bubble */}
			<div className="absolute -top-3 -left-3" role="note" aria-label="User speaking">
				<svg width="120" height="60" viewBox="0 0 120 60" className="opacity-95" aria-hidden="true" focusable="false">
					<rect x="8" y="8" width="94" height="34" rx="10" fill="#ffffff" opacity="0.9" />
					<path d="M28 42 L20 56 L42 44 Z" fill="#ffffff" opacity="0.9" />
					{speechBubble ? (
						<text x="20" y="30" fontSize="12" fill="#334155">{speechBubble}</text>
					) : (
						<>
							<circle cx="24" cy="26" r="4" fill="#94a3b8" />
							<circle cx="36" cy="26" r="4" fill="#94a3b8" />
							<circle cx="48" cy="26" r="4" fill="#94a3b8" />
						</>
					)}
				</svg>
			</div>
		</div>
	);
};

export default UserAvatar;


