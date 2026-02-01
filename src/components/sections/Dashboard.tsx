import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Pause,
  Check,
  Clock,
  Zap,
  TrendingUp,
  Users,
  FileText,
  RefreshCcw
} from "lucide-react";

interface TaskLog {
  id: string;
  task: string;
  department: string;
  status: "completed" | "processing" | "pending";
  timeSaved: number;
  timestamp: string;
}

const generateMockLogs = (): TaskLog[] => {
  const tasks = [
    { task: "Invoice reconciliation", department: "Finance", timeSaved: 12 },
    { task: "Lead follow-up email", department: "Sales", timeSaved: 8 },
    { task: "Resume screening", department: "HR", timeSaved: 15 },
    { task: "Report generation", department: "Operations", timeSaved: 20 },
    { task: "Meeting notes summary", department: "All Teams", timeSaved: 5 },
    { task: "Data validation", department: "Finance", timeSaved: 10 },
    { task: "Contract review prep", department: "Legal", timeSaved: 18 },
    { task: "Customer inquiry routing", department: "Support", timeSaved: 3 },
  ];

  return tasks.map((t, i) => ({
    id: `task-${i}`,
    ...t,
    status: i < 2 ? "completed" : i < 4 ? "processing" : "pending",
    timestamp: new Date(Date.now() - i * 60000).toLocaleTimeString(),
  }));
};

export const Dashboard = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState<TaskLog[]>(generateMockLogs());
  const [impactScore, setImpactScore] = useState(87);
  const [timeSaved, setTimeSaved] = useState(156);
  const [tasksCompleted, setTasksCompleted] = useState(24);

  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setLogs(prev => {
        const updated = [...prev];
        const processingIndex = updated.findIndex(l => l.status === "processing");
        const pendingIndex = updated.findIndex(l => l.status === "pending");
        
        if (processingIndex !== -1) {
          updated[processingIndex].status = "completed";
          setTimeSaved(t => t + updated[processingIndex].timeSaved);
          setTasksCompleted(t => t + 1);
          setImpactScore(s => Math.min(100, s + 1));
        }
        
        if (pendingIndex !== -1) {
          updated[pendingIndex].status = "processing";
        }

        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const resetSimulation = () => {
    setIsSimulating(false);
    setLogs(generateMockLogs());
    setImpactScore(87);
    setTimeSaved(156);
    setTasksCompleted(24);
  };

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
            Live Dashboard
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-headline mb-4"
          >
            See Your{" "}
            <span className="gradient-text">Value Dashboard</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-muted-foreground"
          >
            Real-time visibility into every automation and its impact
          </motion.p>
        </motion.div>

        {/* Dashboard mock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="card-glass rounded-3xl overflow-hidden border border-border">
            {/* Dashboard header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-highlight/50" />
                  <div className="w-3 h-3 rounded-full bg-success/50" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">WorkMate AI Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={resetSimulation}
                  className="gap-1"
                >
                  <RefreshCcw className="w-3 h-3" />
                  Reset
                </Button>
                <Button
                  size="sm"
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`gap-1 ${isSimulating ? 'bg-destructive hover:bg-destructive/90' : 'gradient-accent'}`}
                >
                  {isSimulating ? (
                    <>
                      <Pause className="w-3 h-3" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3" />
                      Simulate
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6">
              {/* Metrics row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-card p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-xs text-muted-foreground">Impact Score</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {impactScore}<span className="text-muted-foreground text-lg">/100</span>
                  </div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-highlight" />
                    <span className="text-xs text-muted-foreground">Time Saved (min)</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{timeSaved}</div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-success" />
                    <span className="text-xs text-muted-foreground">Tasks Completed</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{tasksCompleted}</div>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-xs text-muted-foreground">Active Users</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">47</div>
                </div>
              </div>

              {/* Activity log */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h4 className="font-semibold">Live Activity Log</h4>
                  {isSimulating && (
                    <div className="flex items-center gap-2 text-sm text-success">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      Live
                    </div>
                  )}
                </div>
                <div className="divide-y divide-border max-h-64 overflow-y-auto scrollbar-thin">
                  {logs.map((log, index) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-4 flex items-center gap-4"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        log.status === 'completed' 
                          ? 'bg-success/20' 
                          : log.status === 'processing'
                          ? 'bg-accent/20'
                          : 'bg-muted'
                      }`}>
                        {log.status === 'completed' ? (
                          <Check className="w-4 h-4 text-success" />
                        ) : log.status === 'processing' ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <RefreshCcw className="w-4 h-4 text-accent" />
                          </motion.div>
                        ) : (
                          <FileText className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{log.task}</p>
                        <p className="text-xs text-muted-foreground">{log.department}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-medium ${
                          log.status === 'completed' ? 'text-success' : 'text-muted-foreground'
                        }`}>
                          {log.status === 'completed' ? `+${log.timeSaved} min` : log.status}
                        </p>
                        <p className="text-xs text-muted-foreground">{log.timestamp}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
