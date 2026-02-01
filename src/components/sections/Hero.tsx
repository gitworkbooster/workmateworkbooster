import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles, Users, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Enterprise AI Platform</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display-lg lg:text-display-xl mb-6 text-foreground"
            >
              WorkMate AI
              <span className="block text-display lg:text-display-lg mt-2 text-muted-foreground">
                Your AI co-worker for everyday operations
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              It doesn't replace employees — it{" "}
              <span className="text-foreground font-semibold">multiplies their impact.</span>{" "}
              Automate routine tasks, streamline approvals, and unlock measurable productivity gains across your entire organization.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="group gap-2 text-base px-8 py-6 gradient-accent hover:opacity-90 transition-opacity">
                Request a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base px-8 py-6 border-2">
                <Play className="w-4 h-4" />
                Watch Short Demo
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mt-12 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Enterprise Ready
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                GDPR Compliant
              </div>
            </motion.div>
          </div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main illustration card */}
              <div className="card-glass p-8 relative">
                {/* AI Co-worker visual */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">WorkMate AI</div>
                    <div className="text-sm text-muted-foreground">Processing tasks...</div>
                  </div>
                  <div className="ml-auto">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full"
                    />
                  </div>
                </div>

                {/* Animated task items */}
                <div className="space-y-3">
                  {[
                    { icon: Users, label: "Screening 12 candidates", status: "completed" },
                    { icon: Zap, label: "Reconciling invoices", status: "processing" },
                    { icon: ArrowRight, label: "Drafting follow-ups", status: "queued" },
                  ].map((task, index) => (
                    <motion.div
                      key={task.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50"
                    >
                      <task.icon className="w-4 h-4 text-accent" />
                      <span className="text-sm flex-1">{task.label}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        task.status === 'completed' 
                          ? 'bg-success/20 text-success' 
                          : task.status === 'processing'
                          ? 'bg-accent/20 text-accent'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {task.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Impact score */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Today's Impact Score</span>
                    <span className="text-2xl font-bold gradient-text">98/100</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-highlight/20 backdrop-blur flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-highlight">2×</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-success/20 backdrop-blur"
              >
                <span className="text-sm font-medium text-success">+40% time saved</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
