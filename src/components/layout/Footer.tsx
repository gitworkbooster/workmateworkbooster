import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">WorkMate AI</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm">
              The AI co-worker that multiplies your team's impact. Automate routine tasks while keeping humans in control.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground">Capabilities</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Integrations</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/50 text-center">
          © 2026 WorkMate AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
