import React from "react";
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
          rel="noreferrer"
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
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-slate-500 mb-6 sm:mb-8 leading-[1.1]">
            Uncompromising Speed. <br className="hidden sm:block" />
            Absolute Determinism.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
            A high-frequency order matching engine engineered in Rust. Utilizing
            an LMAX-inspired single-threaded core for sub-microsecond latency
            and 4.7M orders/sec throughput.
          </p>
        </div>

        {/* Premium Metrics "Card" Section (Centurion/Sapphire Style) */}
        <div className="relative rounded-3xl bg-linear-to-b from-slate-900 to-black p-px mb-20 sm:mb-32 shadow-2xl shadow-blue-900/5">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/8 to-transparent pointer-events-none"></div>

          <div className="relative bg-black/40 backdrop-blur-xl rounded-[23px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent"></div>

            <div className="p-6 sm:p-10 md:p-16">
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-10 md:mb-12 gap-6">
                <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-500">
                  End-to-End Latency Profile
                </h2>
                {/* flex-wrap ensures badges don't overflow on small screens */}
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <LatencyBadge label="P50" value="100ns" />
                  <LatencyBadge label="P90" value="200ns" />
                  <LatencyBadge label="P99" value="500ns" />
                  <LatencyBadge label="P99.9" value="800ns" />
                </div>
              </div>

              {/* Grid adjusts from 1 col (mobile) to 2 cols (tablet) to 4 cols (desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 border-t border-white/5 pt-10 md:pt-12">
                <Metric
                  icon={<Activity size={24} className="text-slate-200" />}
                  value="4.7M"
                  label="Orders / Second"
                  subtext="Single-threaded capacity"
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
            </div>
          </div>
        </div>

        {/* Architecture Grid */}
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
          <p className="text-[10px] sm:text-xs text-slate-600 font-mono text-center md:text-left">
            © {new Date().getFullYear()} Anh Tran. Engineered in Rust.
          </p>
        </div>
      </footer>
    </div>
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
  icon: React.ReactNode;
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

function ArchitectureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
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
