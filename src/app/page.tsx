import type { ReactNode } from "react";
import {
  Shield,
  Database,
  Cpu,
  ArrowRight,
  Activity,
  GitCommit,
  Layers,
  Clock,
  Lock,
  Terminal,
  Zap,
  RotateCcw,
  ShieldCheck,
  Gauge,
} from "lucide-react";

export default function FerroxShowcase() {
  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-blue-900/50 overflow-x-hidden">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
        <div className="absolute -top-[20%] w-[800px] h-[600px] rounded-full bg-blue-900/10 blur-[120px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-slate-800/20 blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex justify-between items-center border-b border-white/5">
        <div className="text-xl sm:text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-linear-to-br from-slate-200 to-slate-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
          FERROX
        </div>
        <a
          href="https://github.com/trnahnh/ferrox"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2"
        >
          View Source <ArrowRight size={16} />
        </a>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-32">
        {/* Hero Section */}
        <div className="max-w-4xl mb-20 sm:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/5 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400">
              Phase 7 Benchmarks Live
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-slate-500 mb-6 sm:mb-8 leading-[1.1]">
            Uncompromising Speed. <br className="hidden sm:block" />
            Absolute Determinism.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
            A high-frequency order matching engine engineered in Rust. Utilizing
            an LMAX-inspired single-threaded core, benchmarked at
            sub-microsecond latency and 4.7M simulated orders/sec on a single
            machine.
          </p>
        </div>

        {/* Premium Metrics "Card" Section */}
        <div className="relative rounded-3xl bg-linear-to-b from-slate-900 to-black p-px mb-20 sm:mb-32 shadow-2xl shadow-blue-900/5">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/8 to-transparent pointer-events-none"></div>

          <div className="relative bg-black/40 backdrop-blur-xl rounded-[23px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent"></div>

            <div className="p-6 sm:p-10 md:p-16">
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-10 md:mb-12 gap-6">
                <div>
                  <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-500">
                    End-to-End Latency Profile
                  </h2>
                  <p className="text-[10px] sm:text-xs text-slate-600 font-mono mt-1">
                    Windows 11 &middot; Rust 2024 &middot; criterion 0.8.2
                    &middot; HdrHistogram &middot; release profile
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <LatencyBadge label="P50" value="100ns" />
                  <LatencyBadge label="P90" value="200ns" />
                  <LatencyBadge label="P99" value="500ns" />
                  <LatencyBadge label="P99.9" value="800ns" />
                  <LatencyBadge label="Mean" value="151ns" />
                  <LatencyBadge label="Max" value="~38µs" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 border-t border-white/5 pt-10 md:pt-12">
                <Metric
                  icon={<Activity size={24} className="text-slate-200" />}
                  value="4.7M"
                  label="Orders / Second"
                  subtext="Single-threaded, local benchmark"
                />
                <Metric
                  icon={<Layers size={24} className="text-slate-200" />}
                  value="Zero"
                  label="Heap Allocations"
                  subtext="Via borrowed &[Fill] slices"
                />
                <Metric
                  icon={<GitCommit size={24} className="text-slate-200" />}
                  value="56ns"
                  label="WAL Overhead"
                  subtext="Encode + CRC32 append"
                />
                <Metric
                  icon={<Shield size={24} className="text-slate-200" />}
                  value="1.4ms"
                  label="Crash Recovery"
                  subtext="10K record deterministic replay"
                />
              </div>

              <p className="text-[10px] sm:text-xs text-slate-600 font-mono mt-8 sm:mt-10 pt-6 border-t border-white/5">
                Cross-validated via criterion: 34&ndash;64 ns/order across
                1K&ndash;100K crossing and mixed workloads
              </p>
            </div>
          </div>
        </div>

        {/* LMAX-Inspired Data Flow Diagram */}
        <SystemDiagram />

        {/* The Phase Timeline */}
        <PhaseTimeline />

        {/* Systems Engineering */}
        <div className="mb-20 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-16 tracking-tight">
            Systems Engineering
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <ArchitectureCard
              icon={<Cpu size={24} className="text-blue-400 sm:w-7 sm:h-7" />}
              title="Lock-Free SPSC Pipeline"
              description="A Disruptor-style ring buffer bridges ingestion to matching. Engineered with atomic Acquire/Release memory ordering and CachePadded structures, delivering an 8.8x throughput increase over standard mpsc channels."
            />
            <ArchitectureCard
              icon={
                <Database size={24} className="text-slate-300 sm:w-7 sm:h-7" />
              }
              title="Arena Memory & Intrusive Lists"
              description="The order book is backed by a pre-allocated 1M-slot arena. Custom intrusive doubly linked lists bypass OS malloc contention entirely. Cancel complexity reduced from O(n) to O(1) via direct index unlinking."
            />
            <ArchitectureCard
              icon={
                <Clock size={24} className="text-slate-300 sm:w-7 sm:h-7" />
              }
              title="BTreeMap Best-Price Tracking"
              description="Replaced naive HashMaps with BTreeMaps for sorted price levels. Best-price recomputation upon level exhaustion improved from an O(n) linear scan to an O(log n) tree lookup, cutting multi-level sweep latency by 67%."
            />
            <ArchitectureCard
              icon={<Lock size={24} className="text-blue-400 sm:w-7 sm:h-7" />}
              title="Cache-Line Optimization"
              description="Structs are meticulously padded to 64 bytes (#[repr(C, align(64))]) to occupy exactly one x86 cache line. This actively prevents false sharing and CPU cache invalidation during multi-threaded ring buffer access."
            />
          </div>

          {/* Resilience — borderless, under the same heading */}
          <div className="border-t border-white/5 mt-10 sm:mt-14 pt-10 sm:pt-14">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12">
              <div>
                <div className="mb-4 sm:mb-5 p-3 sm:p-4 rounded-full bg-black/50 inline-block border border-white/5">
                  <RotateCcw
                    size={24}
                    className="text-blue-400 sm:w-7 sm:h-7"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 tracking-tight">
                  Deterministic Recovery
                </h3>
                <p className="text-slate-400 leading-relaxed font-light text-xs sm:text-sm">
                  Load the latest snapshot, replay the WAL, resume. Recovery
                  completes in under 1.4 milliseconds with bit-exact state
                  reconstruction. The recovered book is identical to pre-crash
                  state.
                </p>
              </div>
              <div>
                <div className="mb-4 sm:mb-5 p-3 sm:p-4 rounded-full bg-black/50 inline-block border border-white/5">
                  <ShieldCheck
                    size={24}
                    className="text-slate-300 sm:w-7 sm:h-7"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 tracking-tight">
                  Data Integrity
                </h3>
                <p className="text-slate-400 leading-relaxed font-light text-xs sm:text-sm">
                  Every WAL record carries a CRC32 checksum. Corrupted records
                  from power loss or disk faults are detected on replay and
                  cleanly truncated to the last valid entry.
                </p>
              </div>
              <div>
                <div className="mb-4 sm:mb-5 p-3 sm:p-4 rounded-full bg-black/50 inline-block border border-white/5">
                  <Gauge size={24} className="text-slate-300 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 tracking-tight">
                  Graceful Back-Pressure
                </h3>
                <p className="text-slate-400 leading-relaxed font-light text-xs sm:text-sm">
                  When the matching engine falls behind ingestion rate, the
                  65,536-slot ring buffer absorbs burst traffic. Inbound orders
                  are delayed via TCP flow control, never dropped.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark Evidence — ruled list */}
        <BenchmarkEvidence />

        {/* Engineering Standards — borderless */}
        <div className="mb-20 sm:mb-32 border-t border-white/5 pt-16 sm:pt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <StandardMetric value="137" label="Tests Passing" />
            <StandardMetric
              value="6"
              label="Unsafe Blocks"
              detail="Each with documented safety invariants"
            />
            <StandardMetric
              value="Zero"
              label="External Dependencies"
              detail="On the matching hot path"
            />
            <StandardMetric
              value="Bit-Exact"
              label="Deterministic Replay"
              detail="Same input always produces same state"
            />
          </div>
        </div>
        {/* Production Horizon */}
        <div className="mb-20 sm:mb-32">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Production Horizon
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light mb-10 sm:mb-14 max-w-2xl">
            Deliberately out of scope for this project &mdash; but engineered
            with these production realities in mind.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-8">
            {[
              {
                term: "DPDK / AF_XDP",
                desc: "Kernel bypass networking for true wire-to-wire latency elimination",
              },
              {
                term: "Multi-Instrument Routing",
                desc: "Gateway distributing orders to per-instrument engine instances",
              },
              {
                term: "Aeron Transport",
                desc: "Reliable UDP multicast with built-in flow control and backpressure",
              },
              {
                term: "FIX Protocol Gateway",
                desc: "Industry-standard order entry interface for external client connectivity",
              },
              {
                term: "Hot-Hot Failover",
                desc: "Secondary engine replaying the same WAL for zero-downtime recovery",
              },
            ].map((item) => (
              <div key={item.term}>
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight mb-1">
                  {item.term}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm bg-slate-500"></div>
            <span className="text-xs sm:text-sm font-medium text-white tracking-widest uppercase">
              Ferrox
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a
              href="mailto:anhdtran.forwork@gmail.com"
              className="text-[10px] sm:text-xs text-slate-500 hover:text-white transition-colors font-mono"
            >
              anhdtran.forwork@gmail.com
            </a>
            <p className="text-[10px] sm:text-xs text-slate-600 font-mono text-center md:text-left">
              &copy; {new Date().getFullYear()} Anh Tran. Engineered in Rust.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PhaseTimeline() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Domain Model & Correctness",
      description:
        "Established the baseline logic with HashMap and VecDeque. Fixed-point i64 prices were implemented on day one to prevent IEEE 754 floating-point rounding errors.",
      metric: "Proptest Baseline",
    },
    {
      phase: "Phase 2",
      title: "Zero Hot-Path Allocations",
      description:
        "Replaced collections with a 1M-slot Arena object pool and custom intrusive doubly linked lists. Eliminated all OS malloc contention.",
      metric: "-58% Cancel Latency",
    },
    {
      phase: "Phase 3",
      title: "Sorted Price Levels",
      description:
        "Swapped HashMaps for BTreeMaps. Best-price recomputation went from an O(n) linear scan to an O(log n) tree lookup upon level exhaustion.",
      metric: "-67% Sweep Latency",
    },
    {
      phase: "Phase 4",
      title: "Lock-Free Concurrency",
      description:
        "Implemented a Disruptor-style SPSC ring buffer for inter-thread communication. Engineered with CachePadded atomics and Acquire/Release memory ordering.",
      metric: "8.8x Throughput",
    },
    {
      phase: "Phase 5",
      title: "Binary Protocol & Multicast",
      description:
        "Dropped JSON overhead for custom fixed-size little-endian structs. Integrated TCP ingestion and UDP multicast execution report broadcasting.",
      metric: "Zero-copy codecs",
    },
    {
      phase: "Phase 6",
      title: "Deterministic Recovery",
      description:
        "Added a memory-mapped Write-Ahead Log (WAL) and bincode snapshots. Ensures bit-exact state recovery in under 1.4 milliseconds after a crash.",
      metric: "56ns WAL append",
    },
    {
      phase: "Phase 7",
      title: "Observability & Proof",
      description:
        "Eliminated the final Vec<Fill> allocation via borrowed slices. Verified architecture limits using HdrHistogram and a custom load generator.",
      metric: "500ns P99 / 4.7M Ops",
    },
  ];

  return (
    <div className="mb-20 sm:mb-32">
      <div className="flex items-center gap-3 mb-10 sm:mb-16">
        <Terminal className="text-blue-500" size={28} />
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Path to Sub-Microsecond
        </h2>
      </div>

      <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-12 pb-4">
        {/* Glowing timeline track */}
        <div className="absolute top-0 bottom-0 -left-px w-[2px] bg-linear-to-b from-blue-500 via-purple-500 to-transparent opacity-50"></div>

        {phases.map((item) => (
          <div key={item.phase} className="relative pl-8 sm:pl-12 group">
            {/* Timeline Node */}
            <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-blue-400 group-hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(96,165,250,0.8)] transition-all"></div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
                  {item.phase}
                </span>
                <span className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                  {item.title}
                </span>
              </div>
              <div className="inline-flex self-start sm:self-auto items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] sm:text-xs font-mono text-emerald-400 whitespace-nowrap">
                <Zap size={12} className="text-emerald-500" /> {item.metric}
              </div>
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light max-w-3xl">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemDiagram() {
  return (
    <div className="mb-20 sm:mb-32">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-16 tracking-tight">
        LMAX-Inspired Data Flow
      </h2>

      <div className="relative p-5 sm:p-10 rounded-3xl bg-white/2 border border-white/5 overflow-hidden">
        {/* Subtle background glow for the diagram */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] sm:w-3/4 h-[150%] sm:h-3/4 bg-blue-500/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Thread 1: Ingestion */}
          <div className="flex-1 w-full bg-black/40 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm relative group hover:border-blue-500/30 transition-colors mt-4 lg:mt-0">
            <div className="absolute -top-3 left-4 sm:left-6 bg-blue-900 text-blue-100 text-[9px] sm:text-[10px] font-mono px-2.5 sm:px-3 py-1 rounded-full border border-blue-500/30 tracking-widest uppercase">
              Thread 1: Ingestion
            </div>
            <div className="flex flex-col items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div className="w-full p-3 rounded-xl bg-white/5 border border-white/5 text-center text-xs sm:text-sm font-medium text-slate-300">
                TCP Network Rx
              </div>
              <ArrowDown />
              <div className="w-full p-3 rounded-xl bg-white/5 border border-white/5 text-center text-xs sm:text-sm font-medium text-slate-300">
                Binary Decoder
              </div>
            </div>
          </div>

          {/* The Bridge: Ring Buffer */}
          <div className="flex flex-col items-center shrink-0">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block w-10 xl:w-16 h-px bg-linear-to-r from-blue-500/50 to-emerald-500/50"></div>
            {/* Mobile Vertical Line */}
            <div className="h-6 sm:h-8 w-px lg:hidden bg-linear-to-b from-blue-500/50 to-emerald-500/50"></div>

            <div className="p-3 sm:p-4 rounded-xl bg-linear-to-br from-slate-800 to-black border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.15)] sm:shadow-[0_0_30px_rgba(59,130,246,0.1)] text-center my-2 sm:my-4 lg:my-0 z-10 w-full sm:w-auto">
              <div className="text-sm sm:text-base text-white font-bold tracking-tight mb-0.5 sm:mb-1">
                SPSC Ring Buffer
              </div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono">
                Atomic Acquire/Release
              </div>
            </div>

            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block w-10 xl:w-16 h-px bg-linear-to-r from-emerald-500/50 to-purple-500/50"></div>
            {/* Mobile Vertical Line */}
            <div className="h-6 sm:h-8 w-px lg:hidden bg-linear-to-b from-emerald-500/50 to-purple-500/50"></div>
          </div>

          {/* Thread 2: Matching */}
          <div className="flex-1 w-full bg-black/40 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm relative group hover:border-purple-500/30 transition-colors mb-2 lg:mb-0">
            <div className="absolute -top-3 right-4 sm:right-6 bg-purple-900 text-purple-100 text-[9px] sm:text-[10px] font-mono px-2.5 sm:px-3 py-1 rounded-full border border-purple-500/30 tracking-widest uppercase">
              Thread 2: Matching
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div className="w-full p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">
                  Matching Engine
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono">
                  BTreeMap & 1M-slot Arena
                </div>
              </div>

              {/* FIXED: Changed to flex-col on mobile, flex-row on SM and up to prevent text wrapping/squishing */}
              <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
                <div className="flex-1 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col items-center justify-center">
                  <span className="text-[11px] sm:text-xs font-medium text-slate-300">
                    mmap WAL
                  </span>
                </div>
                <div className="flex-1 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col items-center justify-center">
                  <span className="text-[11px] sm:text-xs font-medium text-slate-300">
                    UDP Multicast
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-slate-600"
      aria-hidden="true"
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}

function LatencyBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 bg-white/3 border border-white/8 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 shrink-0">
      <span className="text-[10px] sm:text-xs font-medium text-slate-500">
        {label}
      </span>
      <span className="text-xs sm:text-sm font-bold text-white">{value}</span>
    </div>
  );
}

function Metric({
  icon,
  value,
  label,
  subtext,
}: {
  icon: ReactNode;
  value: string;
  label: string;
  subtext: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="mb-4 sm:mb-6 opacity-80">{icon}</div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-1 sm:mb-2">
        {value}
      </div>
      <div className="text-sm font-medium text-slate-300 mb-0.5 sm:mb-1">
        {label}
      </div>
      <div className="text-[10px] sm:text-xs text-slate-500 font-mono">
        {subtext}
      </div>
    </div>
  );
}

function BenchmarkEvidence() {
  const benchmarks = [
    {
      change: "-58%",
      title: "Order Cancellation",
      context: "Middle of 1,000 resting orders",
      before: "2.16 µs",
      after: "0.91 µs",
    },
    {
      change: "-67%",
      title: "Multi-Level Price Sweep",
      context: "100 ask levels exhausted sequentially",
      before: "45.14 µs",
      after: "14.73 µs",
    },
    {
      change: "-82%",
      title: "Worst-Case Cancel",
      context: "1,000 orders across 1,000 distinct prices",
      before: "696.94 µs",
      after: "124.07 µs",
    },
    {
      change: "8.8x",
      title: "Cross-Thread Throughput",
      context: "SPSC ring buffer vs std::sync::mpsc",
      before: "16.35 ms",
      after: "1.85 ms",
    },
  ];

  return (
    <div className="mb-20 sm:mb-32">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-16 tracking-tight">
        Proven Under Pressure
      </h2>

      <div className="divide-y divide-white/5">
        {benchmarks.map((b) => (
          <div
            key={b.title}
            className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-8"
          >
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight mb-0.5">
                {b.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light">
                {b.context}
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono">
                <span className="text-slate-500">{b.before}</span>
                <ArrowRight size={14} className="text-slate-600" />
                <span className="text-slate-300">{b.after}</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight min-w-[4ch] text-right">
                {b.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StandardMetric({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail?: string;
}) {
  return (
    <div className="text-center sm:text-left">
      <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
        {value}
      </div>
      <div className="text-xs sm:text-sm font-medium text-slate-300 mb-0.5">
        {label}
      </div>
      {detail && (
        <div className="text-[10px] sm:text-xs text-slate-500 font-light">
          {detail}
        </div>
      )}
    </div>
  );
}

function ArchitectureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-6 sm:p-8 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/4 hover:border-white/10 transition-all duration-300">
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-full bg-black/50 inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed font-light text-xs sm:text-sm">
        {description}
      </p>
    </div>
  );
}
