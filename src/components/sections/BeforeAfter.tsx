import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const beforeItems = [
  "Employees spend 30–50% of time on repetitive, low-value tasks",
  "Information scattered across spreadsheets, emails, and chat",
  "Approvals and decisions depend on human memory",
  "No visibility into where time and effort actually go",
  "Productivity gains locked inside individual heroics",
];

const afterItems = [
  "Routine tasks automated — employees focus on high-impact work",
  "Real-time visibility into every process and workflow",
  "Smart routing ensures nothing falls through the cracks",
  "Each employee delivers up to 2× productivity",
  "Measurable ROI with every automation deployed",
];

export const BeforeAfter = () => {
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
            The Transformation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-headline mb-4"
          >
            From Scattered Work to{" "}
            <span className="gradient-text">Multiplied Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-muted-foreground"
          >
            See how organizations transform their operations with WorkMate AI
          </motion.p>
        </motion.div>

        {/* Before/After cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="h-full p-8 rounded-3xl bg-card border border-destructive/20 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 mb-6">
                  <X className="w-4 h-4 text-destructive" />
                  <span className="text-sm font-medium text-destructive">Before WorkMate AI</span>
                </div>

                <h3 className="text-title mb-6 text-foreground">The Old Way</h3>

                <ul className="space-y-4">
                  {beforeItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-destructive" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="h-full p-8 rounded-3xl bg-card border border-success/20 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-success/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 mb-6">
                  <Check className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-success">After WorkMate AI</span>
                </div>

                <h3 className="text-title mb-6 text-foreground">The New Reality</h3>

                <ul className="space-y-4">
                  {afterItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-success" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Arrow/Connection visual for desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center shadow-glow">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
