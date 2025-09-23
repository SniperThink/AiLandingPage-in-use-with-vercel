import React from "react";

export const AnimatedConnectionLine: React.FC = () => {
	return (
		<div className="relative w-24 h-24 hidden md:block" aria-hidden>
			<svg width="160" height="80" viewBox="0 0 160 80" aria-hidden="true" focusable="false">
				<defs>
					<linearGradient id="conn" x1="0" x2="1" y1="0" y2="0">
						<stop offset="0%" stopColor="#93c5fd" stopOpacity="0.0" />
						<stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
						<stop offset="100%" stopColor="#fca5a5" stopOpacity="0.0" />
					</linearGradient>
				</defs>
				<path d="M10 40 C 60 10, 100 70, 150 40" stroke="url(#conn)" strokeWidth="3" fill="none" strokeDasharray="24 8" style={{ animation: "dataFlow 2.4s linear infinite" }} />
			</svg>
		</div>
	);
};

export default AnimatedConnectionLine;


