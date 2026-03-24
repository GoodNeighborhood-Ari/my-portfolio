import { useState, useEffect } from "react";

/* ─── Design Tokens ─── */
const ACCENT = "#B7602A";
const ACCENT_LIGHT = "#D4944C";
const GOLD = "#C9A84C";
const BG = "#FAFAF8";
const DARK = "#1A1A1A";
const MID = "#6B6B6B";
const LIGHT_BORDER = "#E8E5E0";

/* ─────────────────────────────────────────────
   IMAGE SETUP
   ───────────────────────────────────────────── */

const projects = [
  {
    id: 1,
    title: "Automated QC Station",
    category: "Quality Control",
    thumbnail: null,
    summary: "A fully automated quality control station — my largest and most impactful project.",
    featured: true,
    description: `The Automated QC Station was born out of a real production bottleneck: manual inspection was slow, inconsistent, and couldn't keep up with the pace of manufacturing. I designed and built this system from the ground up — from the mechanical fixtures and pneumatic actuation to the electronics, firmware, and the software interface that ties it all together.

The station automates the full cartridge testing workflow. An operator loads a cartridge, initiates the sequence, and the system runs through calibration, priming, and a series of electrochemical tests — all without further intervention. Pass/fail results are logged automatically, and the system flags anomalies in real time so they can be caught before product ships.

What I'm most proud of is how this project brought together every discipline I care about: mechanical design, electronics, software, and user-centered thinking. The station had to be reliable enough for daily production use, intuitive enough that any team member could operate it, and robust enough to handle thousands of test cycles without failure.

The impact was immediate. Manual inspection time dropped by over 80%, and the consistency of test results improved dramatically. It also freed up engineering time that was previously spent on manual QC, which could now go toward product development and process improvement.`,

    tags: ["Fusion 360", "Process Design", "Automation", "Lean", "Python", "Firmware", "Pneumatics"],
    images: [
        { src: "/images/big_tony_hero.png",  caption: "Full QC station — front view", layout: "full" },
        { src: "/images/big_tony_main.png",  caption: "Overall system view showing instrument array and fluidic routing", layout: "full" },
        { src: null, caption: "Operator GUI showing live test sequence and pass/fail results", layout: "full" },
        { src: "/images/big_tony_back.png",  caption: "Rear of station — wiring harness and power distribution", layout: "half" },
        { src: null, caption: "Close-up of cartridge seating fixture with alignment features", layout: "half" },
      ],
  },
  {
    id: 2,
    title: "QC Dashboard & Data Tools",
    category: "Software",
    thumbnail: "/images/cartridge_production_tracking.png",
    summary: "A self-updating analytics suite for live production tracking, quality monitoring, and customer data.",
    featured: false,
    description: `As our production volume grew, it became clear that we needed better visibility into what was happening on the floor and in the field. Spreadsheets and manual logs weren't cutting it anymore. I built a suite of internal dashboards from scratch to give the team — from engineers to management — real-time access to the data that matters.

Everything updates automatically. The dashboards pull directly from our production database, so the numbers leadership sees on Monday morning reflect what happened over the weekend without anyone having to manually export or compile anything. Customer data is tracked live as well — as devices run tests in the field, their results feed back into the system in real time, giving us an always-current picture of how our product is performing across the entire install base.

The production overview tracks weekly chip and cartridge output by type, pass rates over time, and yield metrics. It's the first thing leadership checks every week. A separate set of views breaks down test and calibration pass/fail rates month over month, making it easy to spot quality trends at a glance — whether pass rates are improving, holding steady, or need attention.

I also built a dedicated error analysis view with a Pareto-style breakdown that made it immediately obvious where our biggest quality issues were hiding. That single chart drove multiple root cause investigations that meaningfully improved our defect rates. Alongside that, a daily test volume view shows the full history of testing activity, making it easy to correlate spikes in failures with production changes or process updates.

For the support and field teams, the cartridge inspection view lets engineers drill into individual serial numbers, pulling up full calibration and test histories with error codes, timestamps, and trend lines. The customer tracking tool maps usage by user and company, with annotations and activity timelines so the team always has context when working with a customer.

There's also a geographic view that plots where tests are being run across the country, which gives us a quick sense of our device distribution and regional usage patterns.

The entire tool suite is built in Python with Plotly/Dash, pulling from our production database. It's designed to be maintainable and extensible — new views can be added quickly as needs evolve.`,

    tags: ["Python", "Plotly/Dash", "SQL", "Data Visualization", "QC Analytics"],
    images: [
      { src: "/images/cartridge_production_tracking.png", caption: "Weekly production tracking — chip output, cartridge production, and pass rates over time", layout: "full" },
      { src: "/images/failures_pies.png", caption: "Monthly test and calibration pass/fail rates — tracking quality trends at a glance", layout: "full" },
      { src: "/images/test_error_breakdown.png", caption: "Pareto-style error breakdown — this chart drove multiple root cause investigations", layout: "full" },
      { src: "/images/tests_over_time.png", caption: "Daily test volume and failure tracking over the full product history", layout: "full" },
      { src: "/images/cartridge_inspection_dashboard.png", caption: "Per-cartridge drill-down with calibration data, test history, and error timelines", layout: "half" },
      { src: "/images/customer_tracking.png", caption: "Customer-level activity tracking with usage patterns and internal annotations", layout: "half" },
      { src: "/images/map.png", caption: "Geographic view showing where tests are being run across the country", layout: "full" },
      { src: "/images/data_dashboard.png", caption: "High-level KPI overview combining production, yield, and usage metrics", layout: "full" },
    ],
  },
  {
    id: 3,
    title: "Custom PCB Design",
    category: "Hardware",
    thumbnail: "/images/industrial_pcb.png",
    summary: "A custom PCB designed from schematic to layout for industrial sensor control and automation.",
    featured: false,
    description: `This project involved designing a custom PCB from scratch — from schematic capture through board layout — to serve as the main control board for one of our industrial sensor systems. The board needed to handle microcontroller logic, solenoid driving via MOSFETs, power management, and a variety of I/O interfaces, all in a compact form factor suitable for integration into a production enclosure.

The design is built around a Raspberry Pi Pico, with breakout headers for GPIO, UART, and solenoid control. The MOSFET driver circuits handle the switching loads for pneumatic solenoids, with flyback diodes and proper gate drive to ensure reliable operation under continuous use. Multiple configurable power rails allow the board to support different voltage requirements depending on the system configuration.

One of the key goals was modularity. The schematic was designed so that different production configurations could be assembled from the same base board by populating different component sets. This meant the pinout, connector placement, and power routing all had to be flexible enough to accommodate variants without requiring a respin.

The PCB layout itself required careful attention to trace routing — particularly around the high-current solenoid paths and the analog signal lines — to avoid noise coupling and ensure signal integrity. The board went through several design reviews before being sent out for fabrication.

The physical boards are currently being manufactured and will be integrated into the next generation of our testing systems. Photos of the assembled board will be added here once they arrive.`,
    tags: ["KiCad", "PCB Design", "Circuit Design", "Firmware", "C++"],
    images: [
    { src: "/images/industrial_pcb.png",         caption: "PCB layout (IND_PROTO_V1) — dual-layer board with MOSFET drivers, USB, and configurable GPIO", layout: "half" },
    { src: "/images/industrial_pcb_schematic.png", caption: "Full schematic — microcontroller, solenoid driver circuits, power management, and connector interfaces", layout: "half" },
    { src: "/images/industrial_before.png",      caption: "Before: breadboarded prototype driving solenoids prior to custom PCB", layout: "half" },
    { src: "/images/soldered_pcb.png",           caption: "After: IND_PROTO_V1 assembled and populated — Pico 2W with screw terminal I/O", layout: "half" },
    { src: null, caption: "Board integrated into enclosure showing connector alignment", layout: "half" },
    { src: null, caption: "Close-up of MOSFET driver section and power routing", layout: "half" },
  ],
  },
  {
    id: 4,
    title: "Integrated Sensor Chip & Microfluidics",
    category: "Product Design",
    thumbnail: "/images/integrated_chip.png",
    summary: "Microfluidic design work for an integrated sensor chip platform, from prototyping through production.",
    featured: false,
    description: `The integrated sensor chip is the core product our team builds around. It combines microfluidic channel networks, electrochemical sensors, and electronics into a single disposable unit. My primary contribution was the microfluidic design — creating the channel geometries that handle sample routing, reagent mixing, metering, and delivery across the sensor surfaces.

The microfluidic work involved designing channel layouts optimized for the specific flow characteristics our chemistry required. I designed several generations of mold inserts for prototyping different channel configurations, testing each for flow rate, mixing efficiency, and air bubble management. These molds allowed us to iterate quickly on geometry without waiting for production tooling.

While I didn't design the chip's electronics, I did modify the original chip design to accommodate changes in the microfluidic layer and improve manufacturability. Getting reliable seals between the fluidic layer and the sensor substrate — especially at the micro scale — was one of the biggest engineering challenges, and small changes to the chip geometry often had outsized effects on sealing performance.

The integrated cartridge itself is a multi-layer assembly. The bottom substrate carries the electrochemical sensors and electrical traces. The microfluidic layer sits on top, sealed to the substrate, defining the fluid paths. And the housing holds everything together while providing the mechanical interface for the instrument.

The physical prototypes shown here represent different stages of this evolution, from early clear acrylic test pieces used for flow visualization to production-representative units with functional fluidics and fully populated electronics.`,

    tags: ["Microfluidics", "Fusion 360", "Rapid Prototyping", "DFM", "Sensor Integration"],
    images: [
      { src: "/images/integrated_chip.png", caption: "Sensor chip — CAD models (top/bottom) alongside physical prototype with integrated PCB and microfluidics", layout: "full" },
      { src: "/images/Microfluidic_Designs.png", caption: "Microfluidic channel mold designs for prototyping different channel geometries", layout: "full" },
      { src: null, caption: "Flow visualization testing with clear acrylic prototype cartridges", layout: "full" },
      { src: null, caption: "Cross-section of multi-layer assembly showing fluid path routing and sensor interface", layout: "half" },
      { src: null, caption: "Production chip in final housing configuration", layout: "half" },
    ],
  },
  {
    id: 5,
    title: "Valve Inspection Stand",
    category: "Fixtures",
    thumbnail: "/images/valve_inspector.png",
    summary: "A hands-off motorized inspection stand for QC valve inspection under a microscope.",
    featured: false,
    description: `Our QC process required inspecting small valves under a microscope, but the existing workflow had a fundamental problem: a technician couldn't hold and rotate the valve while simultaneously looking through the scope. The valve needed to be turned to inspect all surfaces, but the moment you let go to look through the eyepiece, you lost your orientation. It was slow, inconsistent, and the kind of thing that quietly eats into production time every single day.

I designed a motorized inspection stand that solves this completely. The valve sits in a fixture, and a stepper motor rotates it on command — so the technician can keep their eyes on the scope while stepping through the full rotation. No more picking up and setting down the valve, no more losing track of which surfaces have been inspected, and no more handling-induced variability.

The cross-section CAD model was created as part of this project to help the team understand the valve's internal geometry — where the sealing surfaces are, where material transitions occur, and what to look for during inspection. It became a reference document that QC could use alongside the physical stand.

The stand itself was designed for daily use on the production floor. It mounts securely to the microscope stage, the valve fixture accommodates the specific valve geometry we inspect, and the motor control is simple enough that any technician can operate it without training. The goal was to make inspection faster, more thorough, and completely hands-off.`,

    tags: ["Fusion 360", "Fixture Design", "Stepper Motor", "QC", "3D Printing"],
    images: [
      { src: "/images/valve_inspector.png", caption: "Cross-section CAD view showing internal flow paths, sealing surfaces, and material interfaces — used as QC reference", layout: "full" },
      { src: "/images/valve_for_inspection.png", caption: "Physical valves used in the inspection process", layout: "full" },
      { src: null, caption: "Inspection stand assembly with stepper motor and valve fixture", layout: "full" },
      { src: null, caption: "Stand mounted to microscope stage — operator's view during inspection", layout: "half" },
      { src: null, caption: "Detail view of valve seating fixture and rotational mechanism", layout: "half" },
    ],
  },
  {
    id: 6,
    title: "Wafer Processing Fixture",
    category: "Fixtures",
    thumbnail: "/images/wafer_bottom.png",
    summary: "A fixture designed to hold die through the entire production process, reducing handling and waste.",
    featured: false,
    description: `This fixture was designed to hold our sensor die throughout the entire production process — from start to finish — rather than having them transferred between different holders at each step. The goal was simple but high-impact: reduce handling, save time, and eliminate the product damage that was occurring when die were moved between fixtures at various stages.

The circular layout mirrors a standard wafer geometry, with an array of precisely located pockets for individual die. Each pocket is sized to provide consistent seating with minimal play, and the alignment features around the perimeter ensure the fixture registers correctly to the processing equipment at every station along the line.

Tolerance stack-up analysis was critical. With this many pockets on a single fixture, even small per-pocket errors compound across the array. I worked through the tolerance chain carefully to ensure that the worst-case accumulated error at any pocket still fell within the process requirements.

The fixture was originally designed for machining from stainless steel. However, we ran into material compatibility issues with one of our process chemistries, which meant the fixture had to be redesigned for 3D printing. That transition wasn't trivial — 3D printing has different tolerance capabilities than CNC machining, so the pocket geometry, wall thicknesses, and registration features all had to be reworked to account for the change in manufacturing method while still meeting the positional accuracy requirements.

The fixture also had to be practical for operators. Die are loaded and unloaded by hand, so pocket accessibility and overall fixture weight were key considerations. A fixture that's technically perfect but painful to use every day isn't a good fixture.`,

    tags: ["Fusion 360", "Fixture Design", "GD&T", "Tolerance Analysis", "3D Printing", "DFM"],
    images: [
      { src: "/images/wafer_bottom.png", caption: "Bottom view of wafer fixture — die pocket array with alignment and registration features", layout: "full" },
      { src: null, caption: "Top view showing pocket entry geometry and registration datums", layout: "full" },
      { src: null, caption: "Detail view of individual die pocket with dimensional callouts", layout: "half" },
      { src: null, caption: "Fixture mounted in processing equipment showing registration interface", layout: "half" },
      { src: null, caption: "Comparison of original stainless steel design vs. 3D printed revision", layout: "full" },
    ],
  },
];

const experience = [
  {
    role: "Senior Research and Development Engineer",
    company: "E-SENS",
    period: "2023 – Present",
    bullets: [
      "Developed automated quality control stations to improve throughput and reduce manual inspection time by over 80%",
      "Designed custom fixtures and tooling for production lines",
      "Led 3D printing initiatives for rapid prototyping",
      "Designed and fabricated PCBs for custom sensor prototypes",
      "Authored structured technical documentation, including test protocols, validation reports, customer guides, and design specifications",
      "Conducted root cause analysis and iterative failure testing to improve design robustness and regulatory readiness for existing products",
    ],
  },
  {
    role: "Graduate Research Assistant",
    company: "Department of Veteran Affairs",
    period: "2019 – 2022",
    bullets: [
      "Developed 3D models and digital simulations for implantable prosthetic devices",
      "Developed standardized data workflows to assess prosthetic implant performance",
      "Implemented process improvements using lean principles",
      "Collaborated with surgeons and engineers to ensure clinical relevance",
      "Assisted in drafting figures and sections for peer-reviewed publications",
    ],
  },
  {
    role: "Research Assistant",
    company: "University of Utah, Department of Biomedical Engineering",
    period: "2018 – 2019",
    bullets: [
      "Modeled neural stimulation systems for Parkinson's disease research with highly specialized software",
      "Integrated axon-level models into neural simulations to support system-wide analyses of stimulations",
      "Collaborated with a multidisciplinary team of engineers and neuroscientists to improve model fidelity",
    ],
  },
];

const navLinks = ["About", "Projects", "Experience", "Contact"];

/* ─── Hooks ─── */
function useScrollSpy(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return active;
}

/* ─── Nav ─── */
function Nav({ scrolled }) {
  const active = useScrollSpy(["about", "projects", "experience", "contact"]);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(250,250,248,0.92)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? `1px solid ${LIGHT_BORDER}` : "1px solid transparent", transition: "all 0.4s ease" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ fontWeight: 700, fontSize: 15, color: scrolled ? DARK : "#FFF", textDecoration: "none", letterSpacing: "0.12em", transition: "color 0.4s ease" }}>
          <span style={{ color: ACCENT }}>⬡</span> ARIANNA LALONDE
        </a>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;
            return (
              <a key={link} href={`#${id}`} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}
                style={{ textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "0.03em", color: isActive ? ACCENT : scrolled ? MID : "rgba(255,255,255,0.6)", borderBottom: isActive ? `2px solid ${ACCENT}` : "2px solid transparent", paddingBottom: 4, transition: "all 0.25s ease" }}>
                {link}
              </a>
            );
          })}
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 22, height: 2, background: scrolled ? DARK : "#FFF", marginBottom: i < 2 ? 5 : 0, borderRadius: 2, transition: "all 0.3s",
              ...(i === 0 && mobileOpen ? { transform: "rotate(45deg) translateY(7px)" } : {}),
              ...(i === 1 ? { opacity: mobileOpen ? 0 : 1 } : {}),
              ...(i === 2 && mobileOpen ? { transform: "rotate(-45deg) translateY(-7px)" } : {}),
            }} />
          ))}
        </button>
      </div>
      {mobileOpen && (
        <div style={{ background: "rgba(250,250,248,0.98)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16, borderBottom: `1px solid ${LIGHT_BORDER}` }}>
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); }}
              style={{ textDecoration: "none", fontSize: 16, fontWeight: 500, color: DARK }}>{link}</a>
          ))}
        </div>
      )}
      <style>{`@media (max-width: 640px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }`}</style>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: `linear-gradient(170deg, ${DARK} 0%, #2C2420 55%, ${ACCENT} 200%)` }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div style={{ textAlign: "center", padding: "0 24px", maxWidth: 720, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1)" }}>
        <div style={{ display: "inline-block", padding: "6px 18px", border: `1px solid rgba(183,96,42,0.4)`, borderRadius: 100, fontSize: 13, fontWeight: 500, color: ACCENT_LIGHT, letterSpacing: "0.06em", marginBottom: 28 }}>
          ENGINEER · MAKER · PROBLEM SOLVER
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, color: "#FFF", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 20px" }}>
          Hi, I'm <span style={{ background: `linear-gradient(135deg, ${ACCENT_LIGHT}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ari!</span>
        </h1>
        <p style={{ fontSize: "clamp(16px, 2.2vw, 20px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 40px", maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
          I design fixtures, build prototypes, and engineer solutions that bridge the gap between concept and production.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ padding: "14px 32px", background: ACCENT, color: "#FFF", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", boxShadow: `0 4px 20px rgba(183,96,42,0.3)` }}>View My Work</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ padding: "14px 32px", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", background: "transparent" }}>Get In Touch</a>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>SCROLL</span>
        <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section id="about" style={{ padding: "120px 24px", maxWidth: 900, margin: "0 auto" }}>
      <SectionLabel>About Me</SectionLabel>
      <h2 style={{ fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", margin: "12px 0 40px" }}>A little about who I am</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
        <div style={{ width: "100%", maxWidth: 360, aspectRatio: "1/1", background: `linear-gradient(135deg, #E8E5E0, #D4D0C8)`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", color: MID, fontSize: 14, fontWeight: 500, border: `1px solid ${LIGHT_BORDER}` }}>
          <img
            src="/images/me.png"
            alt="Arianna LaLonde"
            style={{
              width: "100%",
              maxWidth: 400,
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: 16,
              border: `1px solid #E8E5E0`,
            }}
          />
        </div>
        <div>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 20px" }}>
            I'm an engineer who loves to learn, loves to make, and loves solving problems that have a real impact on people's lives. From designing custom fixtures that streamline production to iterating prototypes that bring concepts to life, I thrive on turning ideas into solutions. My work is thoughtful, novel, and deliberate.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 20px" }}>
            Originally, my plan was to become a Biomedical Engineer. I received my Bachelor's and Master's degree in Biomedical Engineering at the University of Utah, and spent several years working in the medical device space. But over time, I found myself drawn more to the hands-on, tangible aspects of engineering and less to the clinical research side. There is nothing quite like seeing your rough, bread-boarded prototype evolve into a polished, production-ready solution that makes a difference. That's what excites me!
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#444", margin: "0 0 32px" }}>
            There is more to engineering than just solving problems. It's about creativity, expression, and respect for the people who use what you build. I believe the best solutions come from deeply understanding the problem, empathizing with users, and designing with care and intention.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["Fusion 360", "Rapid Prototyping", "PCB Design", "GD&T", "DFM", "Fixture Design", "Python", "C# / C++", "SQL", "Data Visualization", "DOE", "V&V Testing", "Technical Writing", "Statistical Analysis"].map((skill) => (
              <span key={skill} style={{ padding: "8px 16px", background: "#F5F3EF", borderRadius: 100, fontSize: 13, fontWeight: 500, color: "#555", border: `1px solid ${LIGHT_BORDER}` }}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Image with Placeholder Fallback ─── */
function ProjectImage({ src, alt, style, className }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={className} style={{ ...style, background: `linear-gradient(135deg, #2C2420, ${DARK})`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", minHeight: 200 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, rgba(183,96,42,0.06) 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
        <span style={{ fontSize: 36, opacity: 0.15, color: ACCENT_LIGHT }}>⬡</span>
        {alt && <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, marginTop: 8, textAlign: "center", padding: "0 16px", maxWidth: 280 }}>{alt}</p>}
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} style={{ ...style, objectFit: "contain", background: DARK }} />;
}

/* ─── Project Card ─── */
function ProjectCard({ project, onClick, featured }) {
  const [hovered, setHovered] = useState(false);
  if (featured) {
    return (
      <div onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="featured-card"
        style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr 1fr", background: "#FFF", borderRadius: 16, overflow: "hidden", border: `1px solid ${hovered ? ACCENT_LIGHT : LIGHT_BORDER}`, transition: "all 0.35s ease", transform: hovered ? "translateY(-4px)" : "translateY(0)", boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.03)", cursor: "pointer", minHeight: 320 }}>
        <ProjectImage src={project.thumbnail} alt={project.title} style={{ width: "100%", height: "100%", minHeight: 280 }} />
        <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ padding: "4px 12px", background: `${ACCENT}15`, borderRadius: 100, fontSize: 11, fontWeight: 600, color: ACCENT, letterSpacing: "0.04em" }}>FEATURED PROJECT</span>
            <span style={{ fontSize: 12, color: MID }}>{project.category}</span>
          </div>
          <h3 style={{ fontSize: 26, fontWeight: 700, color: DARK, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{project.title}</h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: MID, margin: "0 0 20px" }}>{project.summary}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} style={{ padding: "5px 12px", background: "#F8F6F2", borderRadius: 6, fontSize: 12, fontWeight: 500, color: ACCENT }}>{tag}</span>
            ))}
          </div>
          <div style={{ marginTop: 24, fontSize: 14, fontWeight: 600, color: ACCENT, display: "flex", alignItems: "center", gap: 6 }}>
            View Project <span style={{ transition: "transform 0.2s", transform: hovered ? "translateX(4px)" : "none" }}>→</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "#FFF", borderRadius: 14, overflow: "hidden", border: `1px solid ${hovered ? ACCENT_LIGHT : LIGHT_BORDER}`, transition: "all 0.35s ease", transform: hovered ? "translateY(-4px)" : "translateY(0)", boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.03)", cursor: "pointer" }}>
      <div style={{ width: "100%", aspectRatio: "16/10", position: "relative", overflow: "hidden" }}>
        <ProjectImage src={project.thumbnail} alt={project.title} style={{ width: "100%", height: "100%" }} />
        <span style={{ position: "absolute", top: 12, left: 12, padding: "5px 12px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", borderRadius: 100, fontSize: 11, fontWeight: 600, color: ACCENT_LIGHT, letterSpacing: "0.04em" }}>{project.category}</span>
      </div>
      <div style={{ padding: "20px 22px 22px" }}>
        <h3 style={{ fontSize: 18, fontWeight: 650, color: DARK, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{project.title}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: MID, margin: "0 0 16px" }}>{project.summary}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} style={{ padding: "4px 10px", background: "#F8F6F2", borderRadius: 6, fontSize: 12, fontWeight: 500, color: ACCENT }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Scrollable Project Modal (Case Study) ─── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, []);

  const paragraphs = project.description.split("\n\n");

  const renderImageBlock = (img, key) => {
    return (
      <div key={key}>
        <ProjectImage src={img.src} alt={img.caption} style={{ width: "100%", borderRadius: 10, minHeight: 220 }} />
        {img.caption && <p style={{ fontSize: 13, color: MID, marginTop: 10, lineHeight: 1.5 }}>{img.caption}</p>}
      </div>
    );
  };

  const renderImagePair = (img1, img2, key) => {
    return (
      <div key={key} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="img-pair">
        {renderImageBlock(img1, `${key}-a`)}
        {renderImageBlock(img2, `${key}-b`)}
      </div>
    );
  };

  /* Build ordered content: interleave text and images */
  const buildContent = () => {
    const result = [];
    const imageQueue = [];

    /* Group images into render units */
    let i = 0;
    while (i < project.images.length) {
      const img = project.images[i];
      const next = project.images[i + 1];
      if (img.layout === "half" && next && next.layout === "half") {
        imageQueue.push({ type: "pair", img1: img, img2: next });
        i += 2;
      } else {
        imageQueue.push({ type: "full", img });
        i += 1;
      }
    }

    /* First image block before any text */
    if (imageQueue.length > 0) {
      const first = imageQueue.shift();
      if (first.type === "pair") {
        result.push(renderImagePair(first.img1, first.img2, "img-0"));
      } else {
        result.push(renderImageBlock(first.img, "img-0"));
      }
      result.push(<div key="spacer-0" style={{ height: 32 }} />);
    }

    /* Interleave paragraphs and images */
    let imgIdx = 1;
    paragraphs.forEach((para, pIdx) => {
      result.push(
        <p key={`p-${pIdx}`} style={{ fontSize: 16, lineHeight: 1.85, color: "#444", margin: "0 0 24px" }}>{para}</p>
      );

      /* Insert image after every ~2 paragraphs, or if it's the last paragraph */
      const insertImage = (pIdx > 0 && pIdx % 2 === 1) || pIdx === paragraphs.length - 1;
      if (insertImage && imageQueue.length > 0) {
        const block = imageQueue.shift();
        result.push(<div key={`img-spacer-${imgIdx}`} style={{ height: 8 }} />);
        if (block.type === "pair") {
          result.push(renderImagePair(block.img1, block.img2, `img-${imgIdx}`));
        } else {
          result.push(renderImageBlock(block.img, `img-${imgIdx}`));
        }
        result.push(<div key={`img-spacer-after-${imgIdx}`} style={{ height: 32 }} />);
        imgIdx++;
      }
    });

    /* Any remaining images */
    while (imageQueue.length > 0) {
      const block = imageQueue.shift();
      if (block.type === "pair") {
        result.push(renderImagePair(block.img1, block.img2, `img-end-${imgIdx}`));
      } else {
        result.push(renderImageBlock(block.img, `img-end-${imgIdx}`));
      }
      result.push(<div key={`end-spacer-${imgIdx}`} style={{ height: 24 }} />);
      imgIdx++;
    }

    return result;
  };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 16px", animation: "fadeIn 0.25s ease" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .modal-scroll::-webkit-scrollbar { width: 6px; }
        .modal-scroll::-webkit-scrollbar-thumb { background: #D4D0C8; border-radius: 3px; }
        @media (max-width: 640px) { .img-pair { grid-template-columns: 1fr !important; } }
      `}</style>
      <div onClick={(e) => e.stopPropagation()} className="modal-scroll"
        style={{ background: BG, borderRadius: 20, maxWidth: 860, width: "100%", maxHeight: "92vh", overflowY: "auto", animation: "slideUp 0.3s ease", position: "relative" }}>
        <button onClick={onClose}
          style={{ position: "sticky", top: 16, float: "right", marginRight: 20, marginTop: 16, width: 44, height: 44, borderRadius: "50%", background: "rgba(0,0,0,0.06)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: MID, zIndex: 10, backdropFilter: "blur(8px)" }}>✕</button>
        <div style={{ padding: "52px 48px 0" }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: ACCENT, letterSpacing: "0.08em" }}>{project.category.toUpperCase()}</span>
          <h2 style={{ fontSize: 34, fontWeight: 700, color: DARK, letterSpacing: "-0.025em", margin: "8px 0 8px", lineHeight: 1.15 }}>{project.title}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{ padding: "5px 14px", background: "#F5F3EF", borderRadius: 100, fontSize: 12, fontWeight: 500, color: "#666", border: `1px solid ${LIGHT_BORDER}` }}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={{ padding: "0 48px 20px" }}>{buildContent()}</div>
        
      </div>
    </div>
  );
}

/* ─── Projects Section ─── */
function Projects({ onProjectClick }) {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" style={{ padding: "120px 24px", background: "#F8F7F4", borderTop: `1px solid ${LIGHT_BORDER}`, borderBottom: `1px solid ${LIGHT_BORDER}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Projects</SectionLabel>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", margin: "12px 0 20px" }}>Selected work</h2>
        <p style={{ fontSize: 16, color: MID, margin: "0 0 40px", maxWidth: 540, lineHeight: 1.6 }}>
          A collection of engineering projects — from automated QC systems and data tools to precision fixtures and sensor integration.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {featured && <ProjectCard project={featured} onClick={() => onProjectClick(featured)} featured />}
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ─── */
function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 24px", maxWidth: 800, margin: "0 auto" }}>
      <SectionLabel>Experience</SectionLabel>
      <h2 style={{ fontSize: 36, fontWeight: 700, color: DARK, letterSpacing: "-0.02em", margin: "12px 0 48px" }}>Where I've worked</h2>
      <div style={{ position: "relative", paddingLeft: 32 }}>
        <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: `linear-gradient(to bottom, ${ACCENT}, ${LIGHT_BORDER})`, borderRadius: 2 }} />
        {experience.map((exp, i) => (
          <div key={i} style={{ marginBottom: i < experience.length - 1 ? 48 : 0, position: "relative" }}>
            <div style={{ position: "absolute", left: -28, top: 8, width: 16, height: 16, borderRadius: "50%", background: i === 0 ? ACCENT : "#FFF", border: `2px solid ${ACCENT}` }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: ACCENT, letterSpacing: "0.05em" }}>{exp.period}</span>
            <h3 style={{ fontSize: 20, fontWeight: 650, color: DARK, margin: "6px 0 4px", letterSpacing: "-0.01em" }}>{exp.role}</h3>
            <p style={{ fontSize: 15, color: MID, margin: "0 0 14px", fontStyle: "italic" }}>{exp.company}</p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: 15, color: "#555", lineHeight: 1.7, paddingLeft: 18, position: "relative", marginBottom: 6 }}>
                  <span style={{ position: "absolute", left: 0, top: "0.55em", width: 6, height: 6, borderRadius: "50%", background: LIGHT_BORDER }} />{b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 24px", background: DARK, color: "#FFF", textAlign: "center" }}>
      <SectionLabel light>Get In Touch</SectionLabel>
      <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", margin: "12px 0 16px" }}>Let's work together</h2>
      <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 40px" }}>Have a project in mind, or just want to connect? I'd love to hear from you.</p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="mailto:arianna.lalonde@gmail.com" style={{ padding: "14px 36px", background: ACCENT, color: "#FFF", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", boxShadow: `0 4px 20px rgba(183,96,42,0.3)` }}>Send Me an Email</a>
        <a href="https://www.linkedin.com/in/ariannalalonde/" target="_blank" rel="noopener noreferrer" style={{ padding: "14px 36px", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none", background: "transparent" }}>LinkedIn</a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} Arianna LaLonde · Built with care</p>
      </div>
    </section>
  );
}

function SectionLabel({ children, light }) {
  return <span style={{ display: "inline-block", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: light ? ACCENT_LIGHT : ACCENT, textTransform: "uppercase" }}>{children}</span>;
}

/* ─── App Root ─── */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: BG, color: DARK }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::selection { background: ${ACCENT}33; color: ${DARK}; }
        @media (max-width: 640px) { .featured-card { grid-template-columns: 1fr !important; } }
      `}</style>
      <Nav scrolled={scrolled} />
      <Hero />
      <About />
      <Projects onProjectClick={setActiveProject} />
      <Experience />
      <Contact />
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  );
}