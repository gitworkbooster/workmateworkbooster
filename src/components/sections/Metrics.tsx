import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { TrendingUp, Clock, DollarSign, Award, LucideIcon } from "lucide-react";

const metrics = [
  {
    icon: Award,
    value: 98,
    suffix: "/100",
    label: "Impact Score",
    description: "Average customer satisfaction with AI assistance",
    color: "from-accent to-blue-600",
  },
  {
    icon: Clock,
    value: 40,
    suffix: "%",
    label: "Time Saved",
    description: "Reduction in time spent on repetitive tasks",
    color: "from-highlight to-orange-500",
  },
  {
    icon: TrendingUp,
    value: 2,
    suffix: "×",
    label: "Productivity Multiplier",
    description: "Average output increase per employee",
    color: "from-success to-emerald-600",
  },
  {
    icon: DollarSign,
    value: 150,
    suffix: "K+",
    prefix: "$",
    label: "Annual Savings",
    description: "Average enterprise cost reduction",
    color: "from-purple-500 to-pink-500",
  },
];

interface MetricCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  color: string;
  delay: number;
  inView: boolean;
}

const MetricCard = ({ icon: Icon, value, suffix, prefix, label, description, color, delay, inView }: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="card-elevated p-8 h-full">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Value with CountUp */}
        <div className="text-display-lg mb-2 text-foreground">
          {prefix}
          {inView ? (
            <CountUp
              end={value}
              duration={2}
              delay={delay}
              preserveValue
            />
          ) : (
            "0"
          )}
          <span className="text-accent">{suffix}</span>
        </div>

        {/* Label */}
        <h3 className="text-subtitle font-semibold mb-2">{label}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

export const Metrics = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      
      <div className="section-container relative z-10" ref={ref}>
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
            Measurable Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-headline mb-4"
          >
            Results That{" "}
            <span className="gradient-text-warm">Speak for Themselves</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-muted-foreground"
          >
            Real metrics from real enterprises using WorkMate AI
          </motion.p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </div>

        {/* Additional context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These metrics are tracked in real-time through our Value Dashboard, giving you complete visibility into your ROI.
            <span className="block mt-2 text-sm">
              *Based on aggregated data from enterprise customers over 12 months
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
