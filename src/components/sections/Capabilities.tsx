import { motion } from "framer-motion";
import { Sparkles, Users, Zap, BarChart3, Clock, LucideIcon } from "lucide-react";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  delay: number;
}

const capabilities: Omit<CapabilityCardProps, 'delay'>[] = [
  {
    icon: Sparkles,
    title: "AI Co-Worker",
    description: "An intelligent assistant that learns your workflows and handles routine tasks autonomously.",
    features: ["Context-aware automation", "Natural language commands", "Continuous learning"],
    gradient: "from-accent to-blue-600",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description: "AI handles the work, humans stay in control. Approve, adjust, or override at any step.",
    features: ["Smart approval routing", "Override controls", "Audit trail"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Cross-System Automation",
    description: "Connect all your tools. WorkMate AI orchestrates tasks across your entire tech stack.",
    features: ["500+ integrations", "Real-time sync", "Custom workflows"],
    gradient: "from-highlight to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Value Dashboard",
    description: "See exactly how much time and money you're saving with real-time impact metrics.",
    features: ["ROI tracking", "Impact scores", "Team analytics"],
    gradient: "from-success to-emerald-600",
  },
  {
    icon: Clock,
    title: "Logged Time Tracking",
    description: "Automatic time capture shows exactly where effort goes — no manual timesheets needed.",
    features: ["Auto time logging", "Task attribution", "Productivity insights"],
    gradient: "from-cyan-500 to-blue-500",
  },
];

const CapabilityCard = ({ icon: Icon, title, description, features, gradient, delay }: CapabilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative"
    >
      <div className="h-full p-8 rounded-3xl bg-card border border-border/50 shadow-soft-lg hover:shadow-soft-xl transition-shadow duration-300 relative overflow-hidden">
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg`}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>

          {/* Content */}
          <h3 className="text-title mb-3 text-foreground">{title}</h3>
          <p className="text-body text-muted-foreground mb-6">{description}</p>

          {/* Features */}
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export const Capabilities = () => {
  return (
    <section className="section-padding">
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
            Platform Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-headline mb-4"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Multiply Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-muted-foreground"
          >
            A comprehensive platform designed for enterprise-scale automation with human oversight
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              {...capability}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
