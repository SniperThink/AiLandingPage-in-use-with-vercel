import { MessageSquare, Workflow, BarChart3, AlertTriangle, FileText, Languages } from "lucide-react";

export const features = [
    {
      title: "Identify High-Intent Leads Instantly",
      description:
        "SniperThink agents engage leads in real time and assess their intent, urgency, and interest — so your team spends time only where it counts",
      image: "/images/blank-user-large.svg",
      metrics: ["Qualifies in live conversation", "Detects urgency and objections", "Flags top leads instantly"],
      category: "Lead Qualification",
      icon: MessageSquare,
      gradient: "from-[#1A6262] to-[#91C499]",
      button: "Learn More",
    },
    {
      title: "Natural Conversations That Convert",
      description:
        "Our AI agents don’t just chat — they converse. From website messages to inbound voice calls, every response feels human and on-brand.",
      image: "/images/blank-user-large.svg",
      metrics: ["Smart voice + chat support", "Multi-turn, contextual dialogue", "Seamless handoff when needed"],
      category: "Chat & Voice Agent",
      icon: Workflow,
      gradient: "from-[#E1A940] to-[#FF6700]",
      button: "See It in Action",
    },
    {
      title: "Auto-Sort Every Lead by Heat",
      description:
        "Leads are automatically scored and bucketed as hot, warm, or cold — no manual input required.",
      image: "/images/blank-user-large.svg",
      metrics: ["Behaviour-based scoring", "Smart tagging logic", "Prioritised views for sales"],
      category: "Lead Segmentation",
      icon: BarChart3,
      gradient: "from-[#91C499] to-[#1A6262]",
      button: "Try it Live",
    },
    {
      title: "No Reps? No Problem. Let AI Route Leads",
      description:
        "Let your agent book meetings, respond to FAQs, or notify your team when action is needed. All automated, all in real time",
      image: "/images/blank-user-large.svg",
      metrics: ["Demo link triggers", "Email alerts", "Zero-lag lead routing"],
      category: "Workflow Automation",
      icon: AlertTriangle,
      gradient: "from-[#FF6700] to-[#E1A940]",
      button: "Automate Now",
    },
    {
      title: "Don't Miss The Follow-Up Window",
      description:
        "All lead details, scores, and transcripts are automatically captured and synced to your pipeline — ready when your team is.",
      image: "/images/blank-user-large.svg",
      metrics: ["Auto-generated lead summaries", "CRM-ready formatting", "No lead left behind"],
      category: "CRM Sync",
      icon: FileText,
      gradient: "from-[#1A6262] to-[#E1A940]",
      button: "View Output"
    },
    {
      title: "Know What Works, While it's Working",
      description:
        "Track lead trends, engagement rates, and agent impact in real time. No more guesswork — just insight that moves the needle.",
      image: "/images/blank-user-large.svg",
      metrics: ["Real-time reporting", "Conversion trend tracking", "Actionable analytics"],
      category: "Agent Performance",
      icon: Languages,
      gradient: "from-[#91C499] to-[#FF6700]",
      button: "Explore Dashboard",
    },
  ]