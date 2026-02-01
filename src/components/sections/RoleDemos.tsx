import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Check, 
  Mail, 
  FileText, 
  Users, 
  TrendingUp,
  RefreshCcw,
  DollarSign,
  UserCheck,
  Calendar
} from "lucide-react";

interface WorkflowStep {
  icon: React.ElementType;
  label: string;
  description: string;
}

interface RoleDemo {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  workflow: WorkflowStep[];
}

const roleDemos: RoleDemo[] = [
  {
    id: "sales",
    title: "Sales",
    subtitle: "Automate follow-ups and lead scoring",
    color: "from-accent to-blue-600",
    workflow: [
      { icon: Mail, label: "Lead received", description: "New lead captured from website form" },
      { icon: TrendingUp, label: "Auto-score lead", description: "AI evaluates fit and intent signals" },
      { icon: FileText, label: "Draft follow-up", description: "Personalized email generated" },
      { icon: Calendar, label: "Schedule meeting", description: "Calendar link added, follow-up sent" },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    subtitle: "Streamline invoice reconciliation",
    color: "from-highlight to-orange-500",
    workflow: [
      { icon: FileText, label: "Invoice received", description: "New invoice captured via email" },
      { icon: RefreshCcw, label: "Auto-match PO", description: "AI matches to purchase orders" },
      { icon: DollarSign, label: "Reconcile amounts", description: "Validates totals and line items" },
      { icon: Check, label: "Ready for approval", description: "Routed to approver with summary" },
    ],
  },
  {
    id: "hr",
    title: "HR",
    subtitle: "Accelerate candidate screening",
    color: "from-purple-500 to-pink-500",
    workflow: [
      { icon: Users, label: "Applications arrive", description: "12 new candidates for Engineering role" },
      { icon: FileText, label: "Parse resumes", description: "AI extracts skills and experience" },
      { icon: UserCheck, label: "Screen candidates", description: "Ranked against job requirements" },
      { icon: Calendar, label: "Schedule interviews", description: "Top 5 invited to interview" },
    ],
  },
];

interface WorkflowVisualizerProps {
  demo: RoleDemo;
  isSimulating: boolean;
  currentStep: number;
}

const WorkflowVisualizer = ({ demo, isSimulating, currentStep }: WorkflowVisualizerProps) => {
  return (
    <div className="space-y-4">
      {demo.workflow.map((step, index) => {
        const Icon = step.icon;
        const isActive = isSimulating && index === currentStep;
        const isCompleted = isSimulating && index < currentStep;

        return (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 ${
              isActive 
                ? 'bg-accent/10 border border-accent/30' 
                : isCompleted 
                ? 'bg-success/5 border border-success/20'
                : 'bg-secondary/50'
            }`}
          >
            {/* Step number and icon */}
            <div className="flex-shrink-0 relative">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isActive 
                  ? `bg-gradient-to-br ${demo.color} shadow-lg` 
                  : isCompleted
                  ? 'bg-success'
                  : 'bg-muted'
              }`}>
                {isCompleted ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                )}
              </div>
              
              {/* Connecting line */}
              {index < demo.workflow.length - 1 && (
                <div className={`absolute top-12 left-1/2 w-0.5 h-8 -translate-x-1/2 transition-colors duration-300 ${
                  isCompleted ? 'bg-success' : 'bg-border'
                }`} />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <h4 className={`font-semibold mb-1 transition-colors ${
                isActive ? 'text-accent' : isCompleted ? 'text-success' : 'text-foreground'
              }`}>
                {step.label}
              </h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>

            {/* Processing indicator */}
            {isActive && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export const RoleDemos = () => {
  const [activeTab, setActiveTab] = useState("sales");
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSimulate = () => {
    setIsSimulating(true);
    setCurrentStep(0);

    const activeDemo = roleDemos.find(d => d.id === activeTab);
    if (!activeDemo) return;

    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= activeDemo.workflow.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsSimulating(false);
            setCurrentStep(0);
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const activeDemo = roleDemos.find(d => d.id === activeTab)!;

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
            Role-Based Automation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-headline mb-4"
          >
            See WorkMate AI{" "}
            <span className="gradient-text">In Action</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-muted-foreground"
          >
            Explore how different teams use WorkMate AI to automate their daily workflows
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value); setIsSimulating(false); setCurrentStep(0); }}>
            <TabsList className="w-full justify-center gap-2 bg-transparent mb-8">
              {roleDemos.map((demo) => (
                <TabsTrigger
                  key={demo.id}
                  value={demo.id}
                  className="px-6 py-3 rounded-xl data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-lg transition-all"
                >
                  {demo.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {roleDemos.map((demo) => (
              <TabsContent key={demo.id} value={demo.id}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={demo.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid lg:grid-cols-2 gap-8 items-start"
                  >
                    {/* Left: Info & CTA */}
                    <div className="card-elevated p-8">
                      <div className={`inline-flex px-3 py-1.5 rounded-full bg-gradient-to-r ${demo.color} mb-4`}>
                        <span className="text-sm font-medium text-white">{demo.title} Automation</span>
                      </div>
                      <h3 className="text-title mb-2">{demo.subtitle}</h3>
                      <p className="text-muted-foreground mb-6">
                        Watch how WorkMate AI handles this workflow end-to-end, keeping humans informed at every step.
                      </p>
                      
                      <Button
                        onClick={handleSimulate}
                        disabled={isSimulating}
                        className={`gap-2 bg-gradient-to-r ${demo.color} text-white hover:opacity-90`}
                      >
                        {isSimulating ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                            Simulating...
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4" />
                            Simulate Workflow
                          </>
                        )}
                      </Button>

                      {/* Completion message */}
                      <AnimatePresence>
                        {isSimulating && currentStep >= demo.workflow.length - 1 && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-6 p-4 rounded-xl bg-success/10 border border-success/20"
                          >
                            <div className="flex items-center gap-2 text-success">
                              <Check className="w-5 h-5" />
                              <span className="font-medium">Workflow completed!</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Right: Workflow visualization */}
                    <div className="card-elevated p-8">
                      <WorkflowVisualizer
                        demo={demo}
                        isSimulating={isSimulating}
                        currentStep={currentStep}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
