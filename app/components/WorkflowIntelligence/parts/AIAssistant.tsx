import React from "react";

export interface AIAssistantProps {
	shirtColor?: "coral" | "yellow";
	hasDocuments?: boolean;
	speechBubble?: string;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ shirtColor = "coral", hasDocuments = true, speechBubble = "" }) => {
	const fill = shirtColor === "coral" ? "#ff6b6b" : "#eab308";
	return (
		<div className="relative flex items-center justify-center" role="img" aria-label="AI assistant processing documents">
			{/* Person */}
			<svg width="128" height="128" viewBox="0 0 128 128" aria-hidden="true" focusable="false">
				<circle cx="64" cy="36" r="16" fill="#0f172a" opacity="0.85" />
				<rect x="36" y="56" width="56" height="36" rx="18" fill={fill} />
				<rect x="44" y="92" width="40" height="8" rx="4" fill="#334155" />
			</svg>
			{/* Documents in hand */}
			{hasDocuments && (
				<div className="absolute -right-4 bottom-4">
					<svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
						<rect x="6" y="6" width="24" height="32" rx="4" fill="#e5e7eb" />
						<rect x="12" y="12" width="12" height="4" rx="2" fill="#64748b" />
						<rect x="10" y="20" width="16" height="3" rx="1.5" fill="#94a3b8" />
						<rect x="8" y="28" width="20" height="3" rx="1.5" fill="#94a3b8" />
						<rect x="30" y="16" width="28" height="36" rx="4" fill="#e2e8f0" />
						<rect x="36" y="22" width="16" height="4" rx="2" fill="#64748b" />
						<rect x="34" y="30" width="20" height="3" rx="1.5" fill="#94a3b8" />
						<rect x="34" y="38" width="20" height="3" rx="1.5" fill="#94a3b8" />
					</svg>
				</div>
			)}
			{/* Speech bubble */}
			<div className="absolute -top-3 -right-3" role="note" aria-label="AI speaking">
				<svg width="120" height="60" viewBox="0 0 120 60" className="opacity-95" aria-hidden="true" focusable="false">
					<rect x="8" y="8" width="94" height="34" rx="10" fill="#ffffff" opacity="0.9" />
					<path d="M92 42 L100 56 L80 44 Z" fill="#ffffff" opacity="0.9" />
					{speechBubble ? (
						<text x="16" y="30" fontSize="12" fill="#334155">{speechBubble}</text>
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

export default AIAssistant;


