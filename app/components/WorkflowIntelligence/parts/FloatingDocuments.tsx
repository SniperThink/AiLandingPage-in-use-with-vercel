import React from "react";

const Doc: React.FC<{ className?: string; delay?: string; label?: string }> = ({ className, delay, label }) => (
	<div
		className={["absolute floating-documents text-slate-400", className || ""].join(" ")}
		style={{ animation: `floatDoc 3s ease-in-out infinite`, animationDelay: delay }}
		role="img"
		aria-label={label || "Document icon"}
	>
		<svg width="52" height="64" viewBox="0 0 52 64" className="opacity-90" aria-hidden="true" focusable="false">
			<rect x="6" y="6" width="40" height="52" rx="8" fill="#0f172a" opacity="0.6" />
			<rect x="10" y="14" width="30" height="4" rx="2" fill="#94a3b8" />
			<rect x="10" y="22" width="24" height="3" rx="1.5" fill="#64748b" />
			<rect x="10" y="30" width="28" height="3" rx="1.5" fill="#64748b" />
			<rect x="10" y="38" width="20" height="3" rx="1.5" fill="#64748b" />
		</svg>
	</div>
);

export interface FloatingDocumentsProps { className?: string }

export const FloatingDocuments: React.FC<FloatingDocumentsProps> = ({ className }) => {
	return (
		<div className={["absolute inset-0 pointer-events-none", className || ""].join(" ")} aria-hidden>
			<Doc className="top-[6%] left-[8%]" delay="0s" label="Report document" />
			<Doc className="top-[10%] right-[6%]" delay="0.2s" label="Chart document" />
			<Doc className="bottom-[12%] left-[10%]" delay="0.4s" label="Form document" />
			<Doc className="bottom-[16%] right-[12%]" delay="0.6s" label="Spreadsheet" />
			<Doc className="top-[30%] left-[2%]" delay="0.8s" label="Report document" />
			<Doc className="top-[24%] right-[2%]" delay="1s" label="Form document" />
		</div>
	);
};

export default FloatingDocuments;


