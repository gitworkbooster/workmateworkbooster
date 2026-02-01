import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ClipboardCheck, 
  Settings2, 
  Cog, 
  Play, 
  TrendingUp,
  ChevronDown
} from "lucide-react";

interface RoadmapStep {
  id: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  duration: string;
}

const roadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    icon: Search,
    title: "Task Discovery",
    subtitle: "Week 1-2",
    description: "We map your current workflows and identify automation opportunities.",
    details: [
      "Interview key stakeholders across departments",
      "Document existing processes and pain points",
      "Identify high-impact automation candidates",
      "Create a prioritized task inventory"
    ],
    duration: "2 weeks"
  },
  {
    id: 2,
    icon: ClipboardCheck,
    title: "Assessment",
    subtitle: "Week 3",
    description: "Evaluate automation potential and define success metrics.",
    details: [
      "Analyze task complexity and frequency",
      "Calculate potential time and cost savings",
      "Define KPIs and success criteria",
      "Create ROI projections"
    ],
    duration: "1 week"
  },
  {
    id: 3,
    icon: Settings2,
    title: "Decisions",
    subtitle: "Week 4",
    description: "Finalize the automation roadmap and implementation plan.",
    details: [
      "Prioritize automations by impact and effort",
      "Define human-in-the-loop checkpoints",
      "Establish governance and approval workflows",
      "Create implementation timeline"
    ],
    duration: "1 week"
  },
  {
    id: 4,
    icon: Cog,
    title: "Automation Setup",
    subtitle: "Week 5-8",
    description: "Configure and deploy your first set of automations.",
    details: [
      "Connect WorkMate AI to your systems",
      "Configure automation rules and triggers",
      "Set up monitoring and alerts",
      "Train team members on new workflows"
    ],
    duration: "4 weeks"
  },
  {
    id: 5,
    icon: Play,
    title: "Live Operations",
    subtitle: "Ongoing",
    description: "Monitor performance and optimize for maximum impact.",
    details: [
      "Real-time performance monitoring",
      "Automatic anomaly detection",
      "Weekly impact reports",
      "Continuous feedback collection"
    ],
    duration: "Ongoing"
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Improvement",
    subtitle: "Continuous",
    description: "Expand automation coverage and refine for better results.",
    details: [
      "Analyze automation performance data",
      "Identify new automation opportunities",
      "Refine existing automations",
      "Scale successful patterns across teams"
    ],
    duration: "Continuous"
  },
];

interface StepCardProps {
  step: RoadmapStep;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const StepCard = ({ step, isActive, onClick, index }: StepCardProps) => {
  const Icon = step.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Connector line */}
      {index < roadmapSteps.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-[calc(100%+1rem)] w-8 h-0.5 bg-border" />
      )}
      
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
          isActive 
            ? 'bg-accent/10 border-2 border-accent shadow-glow' 
            : 'bg-card border border-border hover:border-accent/30'
        }`}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            isActive ? 'gradient-accent' : 'bg-secondary'
          }`}>
            <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className={`font-semibold ${isActive ? 'text-accent' : 'text-foreground'}`}>
                {step.title}
              </h3>
              <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className={`w-5 h-5 ${isActive ? 'text-accent' : 'text-muted-foreground'}`} />
              </motion.div>
            </div>
            <p className="text-sm text-muted-foreground">{step.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-2">{step.description}</p>

        {/* Expanded details */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-border">
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-foreground">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Duration: </span>
                  <span className="text-xs font-medium text-accent">{step.duration}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

export const Roadmap = () => {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-overline mb-4 block"
          >
            Implementation Roadmap
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-headline mb-4"
          >
            Onboarding Made{" "}
            <span className="gradient-text">Simple</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-muted-foreground"
          >
            Discovery → Assessment → Decisions → Setup → Live → Improve
          </motion.p>
        </motion.div>

        {/* Timeline grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapSteps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              isActive={activeStep === step.id}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Ready to start your automation journey?
          </p>
          <span className="text-accent font-medium hover:underline cursor-pointer">
            Schedule a discovery call →
          </span>
        </motion.div>
      </div>
    </section>
  );
};
