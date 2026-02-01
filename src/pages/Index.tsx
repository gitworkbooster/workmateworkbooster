import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Capabilities } from "@/components/sections/Capabilities";
import { RoleDemos } from "@/components/sections/RoleDemos";
import { Metrics } from "@/components/sections/Metrics";
import { Roadmap } from "@/components/sections/Roadmap";
import { Dashboard } from "@/components/sections/Dashboard";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <section id="capabilities">
          <Capabilities />
        </section>
        <section id="role-demos">
          <RoleDemos />
        </section>
        <Metrics />
        <section id="roadmap">
          <Roadmap />
        </section>
        <section id="dashboard">
          <Dashboard />
        </section>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
