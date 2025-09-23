import React from "react";

export const BackgroundGrid: React.FC = () => {
	return (
		<div className="absolute inset-0 -z-10" aria-hidden>
			<div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0f172a] to-[#111827]" />
			<svg className="absolute inset-0 w-full h-full opacity-[0.08]" aria-hidden="true" focusable="false">
				<defs>
					<pattern id="bgGrid" width="40" height="40" patternUnits="userSpaceOnUse">
						<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#475569" strokeWidth="1" />
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#bgGrid)" />
			</svg>
			<div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#10b981] opacity-10 blur-3xl" />
			<div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#f97316] opacity-10 blur-3xl" />
		</div>
	);
};

export default BackgroundGrid;


