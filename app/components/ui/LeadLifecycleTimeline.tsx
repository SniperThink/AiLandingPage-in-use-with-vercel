'use client';

import { useState, useEffect } from 'react';

export default function LeadLifecycleTimeline() {
  const [activeInterventions, setActiveInterventions] = useState<number[]>([]);
  const [highlightedStage, setHighlightedStage] = useState<number | null>(null);

  const stages = [
    {
      id: 'first-contact',
      icon: '📞',
      title: 'First Contact',
      subtitle: 'Initial touchpoint',
      description: 'Customer reaches out through website chat, phone, or form. AI immediately engages with personalized response in under 30 seconds.',
      hasAI: false,
      bgClass: 'first-contact'
    },
    {
      id: 'ai-engagement',
      icon: '🤖',
      title: 'AI Analysis',
      subtitle: 'Context understanding',
      description: 'AI analyzes conversation context, customer intent, and behavioral signals to provide relevant responses and gather key information.',
      hasAI: true,
      bgClass: 'ai-engagement'
    },
    {
      id: 'qualification',
      icon: '⭐',
      title: 'Qualification',
      subtitle: 'Automated scoring',
      description: 'AI evaluates lead quality using BANT criteria and custom scoring models, automatically categorizing leads for optimal routing.',
      hasAI: true,
      bgClass: 'qualification'
    },
    {
      id: 'nurturing',
      icon: '🌱',
      title: 'Nurturing',
      subtitle: 'Relationship building',
      description: 'AI delivers personalized content and maintains engagement through multiple touchpoints, building trust and moving leads through the funnel.',
      hasAI: true,
      bgClass: 'nurturing'
    },
    {
      id: 'opportunity',
      icon: '💎',
      title: 'Opportunity',
      subtitle: 'Sales ready',
      description: 'Lead is qualified and ready for human sales interaction. AI provides complete context and recommended approach to sales team.',
      hasAI: false,
      bgClass: 'opportunity'
    },
    {
      id: 'negotiation',
      icon: '🤝',
      title: 'Negotiation',
      subtitle: 'AI-assisted closing',
      description: 'AI assists sales team with objection handling, proposal optimization, and deal structuring based on customer preferences and history.',
      hasAI: true,
      bgClass: 'negotiation'
    },
    {
      id: 'conversion',
      icon: '💰',
      title: 'Conversion',
      subtitle: 'Deal closed',
      description: 'Customer successfully converts with AI-powered onboarding process ensuring smooth transition and high satisfaction scores.',
      hasAI: false,
      bgClass: 'conversion'
    }
  ];

  const interventions = [
    { text: 'Analyzing customer intent', delay: 3000, position: { top: '15%', right: '5%' } },
    { text: 'Auto lead scoring', delay: 4000, position: { top: '35%', left: '5%' } },
    { text: 'Personalized nurturing', delay: 5000, position: { top: '60%', right: '5%' } },
    { text: 'AI-assisted closing', delay: 6000, position: { top: '80%', left: '5%' } }
  ];

  const metrics = [
    { value: '28', label: 'Days to Close' },
    { value: '12', label: 'AI Touches' },
    { value: '78%', label: 'Conv. Rate' },
    { value: '9.2', label: 'CSAT' }
  ];

  useEffect(() => {
    interventions.forEach((intervention, index) => {
      setTimeout(() => {
        setActiveInterventions(prev => [...prev, index]);
      }, intervention.delay);
    });
  }, []);

  const handleStageClick = (index: number) => {
    setHighlightedStage(index);
    setTimeout(() => setHighlightedStage(null), 2000);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-[450px] mx-auto h-[500px] overflow-hidden transform -translate-y-6">
        <style jsx>{`
          .timeline-container {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: white;
            position: relative;
            height: 100%;
            padding: 20px;
          }

          .header {
            text-align: center;
            margin-bottom: 20px;
            opacity: 0;
            animation: fadeInUp 0.8s ease-out 0.3s forwards;
          }

          .header h1 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 4px;
            background: linear-gradient(135deg, #1A6262 0%, #91C499 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .header p {
            color: #94a3b8;
            font-size: 11px;
          }

          .timeline-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 420px;
          }

          .timeline-line {
            position: absolute;
            left: 50%;
            top: 40px;
            bottom: 60px;
            width: 2px;
            background: linear-gradient(180deg, #475569 0%, #1A6262 100%);
            border-radius: 1px;
            transform: translateX(-50%);
            overflow: hidden;
          }

          .timeline-progress {
            width: 100%;
            height: 0%;
            background: linear-gradient(180deg, #1A6262 0%, #91C499 100%);
            border-radius: 1px;
            animation: timelineProgressVertical 8s ease-in-out 1.5s forwards;
            position: relative;
          }

          .timeline-progress::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 50%;
            transform: translateX(-50%);
            width: 12px;
            height: 12px;
            background: #1A6262;
            border-radius: 50%;
            box-shadow: 0 0 12px rgba(26, 98, 98, 0.6);
          }

          .timeline-stages {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2;
            gap: 42px;
            padding: 40px 0 60px;
            height: 100%;
          }

          .stage {
            display: flex;
            align-items: center;
            position: relative;
            opacity: 0;
            width: 100%;
            max-width: 400px;
            transition: transform 0.3s ease;
          }

          .stage:nth-child(odd) {
            flex-direction: row;
            text-align: left;
          }

          .stage:nth-child(even) {
            flex-direction: row-reverse;
            text-align: right;
          }

          .stage:nth-child(1) { animation: stageAppearLeft 0.6s ease-out 2s forwards; }
          .stage:nth-child(2) { animation: stageAppearRight 0.6s ease-out 2.3s forwards; }
          .stage:nth-child(3) { animation: stageAppearLeft 0.6s ease-out 2.6s forwards; }
          .stage:nth-child(4) { animation: stageAppearRight 0.6s ease-out 2.9s forwards; }
          .stage:nth-child(5) { animation: stageAppearLeft 0.6s ease-out 3.2s forwards; }
          .stage:nth-child(6) { animation: stageAppearRight 0.6s ease-out 3.5s forwards; }
          .stage:nth-child(7) { animation: stageAppearLeft 0.6s ease-out 3.8s forwards; }

          .stage-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid rgba(26, 98, 98, 0.3);
            flex-shrink: 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .stage-icon:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(26, 98, 98, 0.4), 0 8px 25px rgba(0, 0, 0, 0.3);
            border-color: rgba(26, 98, 98, 0.6);
          }

          .stage-icon.first-contact {
            background: linear-gradient(135deg, #1A6262 0%, #164E63 100%);
          }

          .stage-icon.ai-engagement {
            background: linear-gradient(135deg, #1A6262 0%, #2563eb 100%);
          }

          .stage-icon.qualification {
            background: linear-gradient(135deg, #91C499 0%, #1A6262 100%);
          }

          .stage-icon.nurturing {
            background: linear-gradient(135deg, #1A6262 0%, #91C499 100%);
          }

          .stage-icon.opportunity {
            background: linear-gradient(135deg, #91C499 0%, #1A6262 100%);
          }

          .stage-icon.negotiation {
            background: linear-gradient(135deg, #1A6262 0%, #91C499 100%);
          }

          .stage-icon.conversion {
            background: linear-gradient(135deg, #91C499 0%, #059669 100%);
          }

          .stage-content {
            flex: 1;
            padding: 12px 20px;
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(20, 184, 166, 0.2);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            position: relative;
            transition: all 0.3s ease;
          }

          .stage-content::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 12px;
            padding: 1px;
            background: linear-gradient(135deg, rgba(26, 98, 98, 0.3), transparent, rgba(145, 196, 153, 0.1));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: subtract;
            pointer-events: none;
          }

          .stage:hover .stage-content {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.7) 100%);
            border-color: rgba(26, 98, 98, 0.4);
            box-shadow: 0 8px 32px rgba(26, 98, 98, 0.15);
            transform: translateY(-2px);
          }

          .stage:nth-child(even) .stage-content {
            text-align: right;
          }

          .stage-title {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 4px;
            color: #ffffff;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
            background: linear-gradient(90deg, rgba(26, 98, 98, 0.15) 0%, rgba(145, 196, 153, 0.05) 100%);
            padding: 4px 8px;
            border-radius: 6px;
            display: inline-block;
            border-left: 3px solid #1A6262;
          }

          .stage-subtitle {
            font-size: 10px;
            color: #cbd5e1;
            margin-bottom: 6px;
            font-weight: 500;
            background: linear-gradient(90deg, rgba(100, 116, 139, 0.2) 0%, rgba(100, 116, 139, 0.1) 100%);
            padding: 2px 6px;
            border-radius: 4px;
            display: inline-block;
            font-style: italic;
          }

          .ai-indicator {
            position: absolute;
            top: -4px;
            right: -4px;
            width: 16px;
            height: 16px;
            background: #3b82f6;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8px;
            animation: aiPulse 2s ease-in-out infinite;
            font-weight: 600;
            color: white;
          }

          .customer-avatar {
            position: absolute;
            width: 24px;
            height: 24px;
            background: linear-gradient(135deg, #1A6262 0%, #91C499 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            left: 50%;
            top: 32px;
            transform: translateX(-50%);
            z-index: 3;
            box-shadow: 0 0 15px rgba(26, 98, 98, 0.5);
            animation: customerJourneyVertical 6s ease-in-out 2s forwards;
          }

          .metrics-panel {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 20px;
            opacity: 0;
            animation: fadeInUp 0.8s ease-out 5s forwards;
          }

          .metric {
            text-align: center;
            padding: 12px 8px;
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
            border-radius: 10px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(26, 98, 98, 0.2);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .metric::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, #1A6262, #91C499);
          }

          .metric:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(26, 98, 98, 0.2);
            border-color: rgba(26, 98, 98, 0.4);
          }

          .metric-value {
            font-size: 14px;
            font-weight: 700;
            color: #91C499;
            margin-bottom: 2px;
          }

          .metric-label {
            font-size: 8px;
            color: #94a3b8;
          }

          .intervention {
            position: absolute;
            background: rgba(59, 130, 246, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 6px;
            padding: 6px 8px;
            font-size: 8px;
            color: white;
            opacity: 0;
            pointer-events: none;
            z-index: 4;
            max-width: 120px;
            box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
            transition: all 0.3s ease;
          }

          .intervention.active {
            opacity: 1;
            animation: interventionPop 3s ease-in-out forwards;
          }

          .intervention::before {
            content: '🤖';
            margin-right: 4px;
          }

          .connection-line {
            position: absolute;
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, #1A6262 50%, transparent 100%);
            opacity: 0.5;
            z-index: 1;
          }

          .stage:nth-child(odd) .connection-line {
            right: 40px;
            width: calc(50% - 40px);
            top: 50%;
          }

          .stage:nth-child(even) .connection-line {
            left: 40px;
            width: calc(50% - 40px);
            top: 50%;
          }

          .highlighted {
            transform: scale(1.05) !important;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes stageAppearLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes stageAppearRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes timelineProgressVertical {
            from { height: 0%; }
            to { height: 100%; }
          }

          @keyframes customerJourneyVertical {
            0% { top: 32px; }
            15% { top: calc(15% + 40px); }
            30% { top: calc(30% + 40px); }
            45% { top: calc(45% + 40px); }
            60% { top: calc(60% + 40px); }
            75% { top: calc(75% + 40px); }
            100% { top: calc(90% + 40px); }
          }

          @keyframes aiPulse {
            0%, 100% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.1);
            }
          }

          @keyframes interventionPop {
            0%, 100% { opacity: 0; transform: translateY(10px) scale(0.9); }
            25%, 75% { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        <div className="timeline-container">
          <div className="header">
            <h1>AI Sales Automation</h1>
            <p>Smart qualification & nurturing</p>
          </div>

          <div className="timeline-wrapper">
            {/* Customer Avatar */}
            <div className="customer-avatar">👤</div>

            {/* Timeline Line */}
            <div className="timeline-line">
              <div className="timeline-progress"></div>
            </div>

            {/* Timeline Stages */}
            <div className="timeline-stages">
              {stages.map((stage, index) => (
                <div 
                  key={stage.id} 
                  className={`stage ${highlightedStage === index ? 'highlighted' : ''}`}
                  onClick={() => handleStageClick(index)}
                >
                  <div className={`stage-icon ${stage.bgClass}`}>
                    {stage.icon}
                    {stage.hasAI && <div className="ai-indicator">AI</div>}
                  </div>
                  <div className="connection-line"></div>
                  <div className="stage-content">
                    <div className="stage-title">{stage.title}</div>
                    <div className="stage-subtitle">{stage.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Intervention Popups */}
            {interventions.map((intervention, index) => (
              <div
                key={index}
                className={`intervention ${activeInterventions.includes(index) ? 'active' : ''}`}
                style={intervention.position}
              >
                {intervention.text}
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="metrics-panel">
            {metrics.map((metric, index) => (
              <div key={index} className="metric">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
