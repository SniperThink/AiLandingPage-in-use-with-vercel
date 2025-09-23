import React from "react";

export interface HexagonContainerProps {
	children: React.ReactNode;
	className?: string;
	glowColor?: string; // e.g., 'rgba(16,185,129,0.35)'
}

export const HexagonContainer: React.FC<HexagonContainerProps> = ({ children, className, glowColor }) => {
	return (
		<div
			className={[
				"relative",
				"w-[200px] h-[180px] sm:w-[220px] sm:h-[198px] md:w-[240px] md:h-[216px]",
				"[clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]",
				"backdrop-blur-md",
				"border-2 border-slate-600/60",
				"bg-gradient-to-br from-slate-700/50 to-slate-800/50",
				"shadow-[0_10px_30px_rgba(2,6,23,0.35)]",
				"transition-transform duration-500",
				"hover:scale-[1.02]",
				"before:content-[''] before:absolute before:inset-0 before:rounded-[24px] before:[clip-path:inherit]",
				"before:p-[2px] before:bg-[linear-gradient(135deg,#3b82f6,transparent_40%,#f97316)] before:-z-10",
				className || "",
			].join(" ")}
			role="group"
			aria-label="Collaboration container"
			style={{ ['--glow' as any]: glowColor || 'rgba(16,185,129,0.35)' }}
		>
			<div className="absolute inset-[2px] rounded-[22px] [clip-path:inherit] bg-slate-800/60" />
			{/* Pulsing glow layer */}
			<div className="absolute -inset-3 [clip-path:inherit] rounded-[28px] blur-2xl opacity-60" style={{ background: 'var(--glow)' }}
				aria-hidden />
			<div className="relative z-10 w-full h-full flex items-center justify-center">
				{children}
			</div>
		</div>
	);
};

export default HexagonContainer;


