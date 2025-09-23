import React, { memo } from "react";
import { HexagonContainer } from "./parts/HexagonContainer";
import { UserAvatar } from "./parts/UserAvatar";
import { AIAssistant } from "./parts/AIAssistant";
import { FloatingDocuments } from "./parts/FloatingDocuments";
import { AnimatedConnectionLine } from "./parts/AnimatedConnectionLine";
import { BackgroundGrid } from "./parts/BackgroundGrid";

export interface WorkflowIntelligenceAnimationProps {
	className?: string;
}

const WorkflowIntelligenceAnimationComponent: React.FC<WorkflowIntelligenceAnimationProps> = ({ className }) => {
	return (
		<div className={[
			"relative w-full h-full min-h-[500px] flex items-center justify-center overflow-hidden",
			"bg-gradient-to-b from-[#0b1220] via-[#0f172a] to-[#111827]",
			className || "",
		].join(" ")}
			role="img"
			aria-label="Human and AI collaborating on workflows"
		>
			<FloatingDocuments className="absolute inset-0" />
			<div className="absolute inset-0 w-full h-full">
				<div className="relative w-full h-full flex items-center justify-center p-0 m-0">
					<div className="flex items-center justify-center gap-12 w-full max-w-none md:flex-row flex-col">
						<div className="flex-shrink-0">
							<HexagonContainer className="w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 border-2 border-slate-600/60 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm" glowColor="rgba(16,185,129,0.30)">
								<UserAvatar shirtColor="yellow" hasComputer speechBubble="Let's automate this..." />
							</HexagonContainer>
						</div>
						<div className="flex-shrink-0 w-20 h-2">
							<AnimatedConnectionLine />
						</div>
						<div className="flex-shrink-0">
							<HexagonContainer className="w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 border-2 border-slate-600/60 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm" glowColor="rgba(249,115,22,0.28)">
								<AIAssistant shirtColor="coral" hasDocuments speechBubble="Processing workflow..." />
							</HexagonContainer>
						</div>
					</div>
				</div>
			</div>
			<BackgroundGrid />
			<style>{`
			@keyframes floatDoc { 0%,100%{ transform: translateY(0) rotate(0deg);} 50%{ transform: translateY(-10px) rotate(2deg);} }
			@keyframes dataFlow { 0% { stroke-dashoffset: 24; } 100% { stroke-dashoffset: 0; } }
			@keyframes hexGlow { 0%,100% { box-shadow: 0 0 22px var(--glow);} 50% { box-shadow: 0 0 34px var(--glow);} }
			@media (prefers-reduced-motion: reduce) { 
				* { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
			}
			`}</style>
		</div>
	);
};

export const WorkflowIntelligenceAnimation = memo(WorkflowIntelligenceAnimationComponent);
export default WorkflowIntelligenceAnimation;


