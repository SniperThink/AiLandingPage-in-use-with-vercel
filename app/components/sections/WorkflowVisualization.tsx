import React, { memo, useMemo, useState, useEffect } from "react";

type HexagonPosition = "left" | "right";

type HexagonContainerProps = {
	position: HexagonPosition;
	children: React.ReactNode;
	className?: string;
};

const HexagonContainer: React.FC<HexagonContainerProps> = ({ position, children, className }) => {
	const [isClient, setIsClient] = useState(false);
	
	useEffect(() => {
		setIsClient(true);
	}, []);
	
	const gradientId = useMemo(() => {
		return isClient 
			? `hexGradient-${position}-${Math.random().toString(36).slice(2, 8)}` 
			: `hexGradient-${position}-default`;
	}, [position, isClient]);
	return (
		<div
			className={[
				"relative aspect-square w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80",
				"[clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]",
				"backdrop-blur-md bg-white/10 border border-white/20",
				"shadow-[0_0_40px_rgba(30,58,138,0.25)]",
				"transition-transform duration-500 hover:scale-[1.02]",
				className || "",
			].join(" ")}
			aria-hidden={false}
			role="group"
		>
			{/* Hexagonal background with subtle gradient and glow */}
			<svg
				className="absolute inset-0 h-full w-full"
				viewBox="0 0 100 100"
				aria-hidden="true"
				focusable="false"
			>
				<defs>
					<linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.35" />
						<stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
					</linearGradient>
				</defs>
				<polygon
					points="25,6.7 75,6.7 100,50 75,93.3 25,93.3 0,50"
					fill={`url(#${gradientId})`}
					stroke="#93c5fd"
					strokeOpacity="0.35"
					strokeWidth="0.5"
				/>
				<g opacity="0.5">
					<line x1="10" y1="20" x2="90" y2="20" stroke="#bfdbfe" strokeOpacity="0.25" strokeWidth="0.3" />
					<line x1="10" y1="40" x2="90" y2="40" stroke="#bfdbfe" strokeOpacity="0.25" strokeWidth="0.3" />
					<line x1="10" y1="60" x2="90" y2="60" stroke="#bfdbfe" strokeOpacity="0.25" strokeWidth="0.3" />
					<line x1="10" y1="80" x2="90" y2="80" stroke="#bfdbfe" strokeOpacity="0.25" strokeWidth="0.3" />
				</g>
			</svg>
			<div className="relative z-10 h-full w-full flex items-center justify-center">
				{children}
			</div>
		</div>
	);
};

const UserAvatar: React.FC<{ color?: "yellow" | "coral" }> = ({ color = "yellow" }) => {
	const fill = color === "yellow" ? "#fbbf24" : "#ff6b6b";
	return (
		<div className="flex items-center justify-center" aria-hidden={false} role="img" aria-label={color === "yellow" ? "User avatar" : "Assistant avatar"}>
			<svg width="84" height="84" viewBox="0 0 84 84" className="drop-shadow" aria-hidden="true" focusable="false">
				<circle cx="42" cy="30" r="14" fill={fill} />
				<rect x="18" y="50" width="48" height="22" rx="11" fill={fill} />
				<circle cx="42" cy="30" r="14" fill="none" stroke="#1e3a8a" strokeOpacity="0.2" />
			</svg>
		</div>
	);
};

const Computer: React.FC = () => {
	return (
		<div className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2" aria-hidden>
			<svg width="110" height="70" viewBox="0 0 110 70" aria-hidden="true" focusable="false">
				<rect x="8" y="6" width="94" height="54" rx="6" fill="#ffffff" opacity="0.75" />
				<rect x="12" y="10" width="86" height="40" rx="4" fill="#e0f2fe" />
				{/* Chart */}
				<polyline points="18,44 34,30 50,36 66,22 82,28" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeOpacity="0.6" />
				{/* Base */}
				<rect x="40" y="54" width="30" height="4" rx="2" fill="#cbd5e1" />
				<rect x="36" y="58" width="38" height="4" rx="2" fill="#94a3b8" />
			</svg>
		</div>
	);
};

const SpeechBubble: React.FC<{ text?: string; side?: "left" | "right" }> = ({ text = "", side = "left" }) => {
	const isLeft = side === "left";
	return (
		<div
			className={[
				"absolute -top-2 sm:-top-3 md:-top-4",
				isLeft ? "-left-2 sm:-left-3 md:-left-4" : "-right-2 sm:-right-3 md:-right-4",
			].join(" ")}
			role="note"
			aria-label="Conversation bubble"
		>
			<svg width="120" height="60" viewBox="0 0 120 60" className="opacity-90" aria-hidden="true" focusable="false">
				<rect x="6" y="6" width="100" height="34" rx="10" fill="#ffffff" opacity="0.8" />
				<path d={isLeft ? "M28 40 L20 52 L40 42 Z" : "M92 40 L100 52 L80 42 Z"} fill="#ffffff" opacity="0.8" />
				<circle cx="24" cy="23" r="4" fill="#94a3b8" />
				<circle cx="36" cy="23" r="4" fill="#94a3b8" />
				<circle cx="48" cy="23" r="4" fill="#94a3b8" />
				{Boolean(text) && (
					<text x="24" y="26" fontSize="10" fill="#334155">{text}</text>
				)}
			</svg>
		</div>
	);
};

const DocumentIcon: React.FC<{ variant?: "report" | "chart" | "form"; className?: string; style?: React.CSSProperties; label?: string }>
	= ({ variant = "report", className, style, label }) => {
	return (
		<div className={className} style={style} aria-hidden={false} role="img" aria-label={label || `${variant} document`}>
			<svg width="56" height="68" viewBox="0 0 56 68" className="drop-shadow-md" aria-hidden="true" focusable="false">
				<rect x="6" y="6" width="44" height="56" rx="8" fill="#f1f5f9" />
				<rect x="10" y="12" width="36" height="6" rx="3" fill="#93c5fd" opacity="0.7" />
				{variant === "report" && (
					<>
						<rect x="10" y="24" width="28" height="4" rx="2" fill="#cbd5e1" />
						<rect x="10" y="32" width="32" height="4" rx="2" fill="#cbd5e1" />
						<rect x="10" y="40" width="22" height="4" rx="2" fill="#cbd5e1" />
					</>
				)}
				{variant === "chart" && (
					<g>
						<rect x="12" y="26" width="6" height="16" rx="2" fill="#60a5fa" />
						<rect x="22" y="22" width="6" height="20" rx="2" fill="#3b82f6" />
						<rect x="32" y="30" width="6" height="12" rx="2" fill="#1d4ed8" />
					</g>
				)}
				{variant === "form" && (
					<g>
						<rect x="10" y="24" width="30" height="6" rx="3" fill="#cbd5e1" />
						<rect x="10" y="34" width="26" height="6" rx="3" fill="#cbd5e1" />
						<rect x="10" y="44" width="34" height="6" rx="3" fill="#cbd5e1" />
					</g>
				)}
			</svg>
		</div>
	);
};

const FloatingDocuments: React.FC = () => {
	return (
		<div aria-hidden className="pointer-events-none absolute inset-0">
			<DocumentIcon
				variant="report"
				className="absolute top-[8%] left-[10%]"
				style={{ animation: "floatSlow 3.2s ease-in-out infinite" }}
				label="Floating report document"
			/>
			<DocumentIcon
				variant="chart"
				className="absolute top-[14%] right-[6%]"
				style={{ animation: "floatSlow2 2.8s ease-in-out infinite" }}
				label="Floating chart document"
			/>
			<DocumentIcon
				variant="form"
				className="absolute bottom-[10%] left-[6%]"
				style={{ animation: "floatSlow 3.6s ease-in-out infinite" }}
				label="Floating form document"
			/>
			<DocumentIcon
				variant="report"
				className="absolute bottom-[14%] right-[10%]"
				style={{ animation: "floatSlow2 3s ease-in-out infinite" }}
				label="Floating report document"
			/>
		</div>
	);
};

const MainIllustration: React.FC = () => {
	return (
		<div className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
			<HexagonContainer className="animate-[hexPulse_6s_ease-in-out_infinite]" position="left">
				<UserAvatar color="yellow" />
				<Computer />
				<SpeechBubble side="left" />
			</HexagonContainer>
			<HexagonContainer className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 animate-[hexPulse_6.6s_ease-in-out_infinite]" position="right">
				<UserAvatar color="coral" />
				<SpeechBubble side="right" />
			</HexagonContainer>
			{/* Connecting line */}
			<svg className="pointer-events-none absolute" width="420" height="180" viewBox="0 0 420 180" aria-hidden="true" focusable="false">
				<defs>
					<linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
						<stop offset="0%" stopColor="#93c5fd" stopOpacity="0.0" />
						<stop offset="50%" stopColor="#1e3a8a" stopOpacity="0.35" />
						<stop offset="100%" stopColor="#93c5fd" stopOpacity="0.0" />
					</linearGradient>
				</defs>
				<path d="M40 90 C 140 40, 280 140, 380 90" stroke="url(#lineGrad)" strokeWidth="2" fill="none" />
			</svg>
		</div>
	);
};

export interface WorkflowVisualizationProps {
	className?: string;
}

const WorkflowVisualizationComponent: React.FC<WorkflowVisualizationProps> = ({ className }) => {
	return (
		<section
			className={[
				"relative w-full",
				"rounded-2xl sm:rounded-3xl",
				"bg-gradient-to-b from-white via-[#f8fbff] to-[#eef6ff]",
				"border border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_40px_rgba(30,58,138,0.08)]",
				"overflow-hidden",
				className || "",
			].join(" ")}
			role="img"
			aria-label="AI-powered workflow visualization"
		>
			{/* Background decorative elements */}
			<div className="absolute inset-0" aria-hidden>
				{/* Soft grid */}
				<svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true" focusable="false">
					<defs>
						<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
							<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
				</svg>
				{/* Glow spots */}
				<div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#93c5fd] opacity-20 blur-3xl" />
				<div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-[#60a5fa] opacity-20 blur-3xl" />
			</div>

			<div className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 xl:px-12">
				<div className="relative mx-auto flex max-w-[820px] items-center justify-center">
					<FloatingDocuments />
					<MainIllustration />
				</div>
			</div>

			{/* Inline keyframes for self-contained animations */}
			<style>{`
			@keyframes floatSlow {
				0%, 100% { transform: translateY(0px); }
				50% { transform: translateY(-8px); }
			}
			@keyframes floatSlow2 {
				0%, 100% { transform: translateY(0px) translateX(0px); }
				50% { transform: translateY(-10px) translateX(2px); }
			}
			@keyframes hexPulse {
				0%, 100% { box-shadow: 0 0 40px rgba(30,58,138,0.18); }
				50% { box-shadow: 0 0 55px rgba(30,58,138,0.30); }
			}
			`}</style>
		</section>
	);
};

export const WorkflowVisualization = memo(WorkflowVisualizationComponent);

export default WorkflowVisualization;


