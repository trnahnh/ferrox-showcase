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
  FlaskConical,
  Bug,
  Microscope,
  Crosshair,
  Dices,
  GitCompareArrows,
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
              Phase 9 &middot; Verified &amp; Re-measured
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-slate-500 mb-6 sm:mb-8 leading-[1.1]">
            Uncompromising Speed. <br className="hidden sm:block" />
            Absolute Determinism.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
            A high-frequency order matching engine engineered in Rust. An
            LMAX-inspired single-threaded core measured at sub-microsecond
            per-order latency and 4.4M orders/sec on a single machine. Every
            number comes from a command you can rerun: the ring buffer is
            model-checked under the C11 memory model, the persistence layer is
            fault-injected at every byte offset, and the core is ported to C++
            for a like-for-like comparison.
          </p>
        </div>

        {/* Premium Metrics "Card" Section */}
        <div className="relative rounded-3xl bg-linear-to-b from-slate-900 to-black p-px mb-20 sm:mb-32 shadow-2xl shadow-blue-900/5">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/8 to-transparent pointer-events-none"></div>

          <div className="relative bg-black/40 backdrop-blur-xl rounded-[23px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent"></div>

            <div className="p-6 sm:p-10 md:p-16">
              <div className="flex flex-col items-start mb-10 md:mb-12 gap-6">
                <div>
                  <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-500">
                    End-to-End Latency Profile
                  </h2>
                  <p className="text-[10px] sm:text-xs text-slate-600 font-mono mt-1">
                    Ryzen 7 7735HS &middot; Windows 11 &middot; rustc 1.93.1
                    &middot; TSC clock, 0.3 ns step &middot; 3 runs &middot;
                    2026-10-10
                  </p>
                </div>
                <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full xl:flex xl:flex-wrap xl:gap-4">
                  <LatencyBadge label="P50" value="130–210ns" />
                  <LatencyBadge label="P90" value="321–481ns" />
                  <LatencyBadge label="P99" value="0.83–1.06µs" />
                  <LatencyBadge label="P99.9" value="1.4–1.7µs" />
                  <LatencyBadge label="Mean" value="171–257ns" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 border-t border-white/5 pt-10 md:pt-12">
                <Metric
                  icon={<Activity size={24} className="text-slate-200" />}
                  value="4.4M"
                  label="Orders / Second"
                  subtext="4.36–4.41M without timing overhead"
                />
                <Metric
                  icon={<Layers size={24} className="text-slate-200" />}
                  value="Zero"
                  label="Heap Allocations"
                  subtext="Orders & fills; only BTreeMap level nodes allocate"
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

              <p className="text-[10px] sm:text-xs text-slate-600 font-mono mt-8 sm:mt-10 pt-6 border-t border-white/5 leading-relaxed">
                Ring pop &rarr; match &rarr; encode execution report, per order
                over 990,000 orders (63% fill, 37% rest). The earlier published
                100/200/500/800 ns percentiles were quantized by the 100 ns step
                of std::time::Instant on Windows; the load generator now times
                with the x86-64 timestamp counter and prints the clock step it
                observed.
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
              description="A Disruptor-style ring buffer bridges ingestion to matching. Acquire/Release cursors compile to plain MOV instructions, verified from the generated assembly; SeqCst costs 5.4x on the same transfer. 3.2x faster than std::sync::mpsc on 8-byte payloads, and 10–17% faster than its own C++20 port on 48-byte orders (p ≤ 0.003, n = 40, pinned cores)."
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
              description="Structs are padded to 64 bytes (#[repr(C, align(64))]) to occupy exactly one x86 cache line. The cost of getting this wrong was measured, not assumed: removing the padding doubles cross-thread transfer time through false sharing alone, without changing a line of logic."
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
                  reconstruction. After every injected fault and process kill,
                  the recovered book equals a fresh replay of the same input.
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
                  Every WAL record carries a CRC32 checksum, and the snapshot
                  checksum covers every field. Corrupt or torn records are
                  truncated to the longest valid prefix, and the bytes beyond
                  it are zeroed so discarded history can never resurface after
                  new appends.
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

        {/* Verification */}
        <Verification />

        {/* Benchmark Evidence — ruled list */}
        <BenchmarkEvidence />

        {/* Engineering Standards — borderless */}
        <div className="mb-20 sm:mb-32 border-t border-white/5 pt-16 sm:pt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <StandardMetric
              value="148"
              label="Tests Passing"
              detail="Plus 4 loom model checks, 6 C++ tests, 3 fuzz targets"
            />
            <StandardMetric
              value="11"
              label="Unsafe Blocks"
              detail="Plus 4 unsafe impl; each with a documented invariant, checked by Miri and TSan"
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
              {
                term: "Power-Loss Durability",
                desc: "fsync/msync ordering for the WAL and snapshots; the fault-injection harness covers process crashes only",
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
      metric: "3.2x vs std mpsc",
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
        "Eliminated the final Vec<Fill> allocation via borrowed slices. Verified architecture limits using HdrHistogram and a load generator that times each order with the TSC and prints its own clock resolution.",
      metric: "P99 0.83–1.06µs / 4.4M Ops",
    },
    {
      phase: "Phase 8",
      title: "Verify It",
      description:
        "Model-checked the ring under the C11 memory model with loom, added differential property tests against a naive oracle, ported the ring to C++20 for a like-for-like benchmark, and measured what SeqCst, false sharing, cursor caching and bounds checks each cost.",
      metric: "loom: 4 pass, Relaxed caught",
    },
    {
      phase: "Phase 9",
      title: "Break It",
      description:
        "Fault-injected the WAL and snapshots at every byte offset and killed the writer mid-write, finding two silent-corruption defects. Root-caused the single-thread Rust-vs-C++ gap in LLVM IR, settled the cross-thread comparison with pinned, interleaved statistics, and ran Miri, TSan, ASan, UBSan and libFuzzer in CI.",
      metric: "2 defects found & fixed",
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
                Acquire/Release &middot; loom-checked
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

function Verification() {
  const checks = [
    {
      icon: <FlaskConical size={24} className="text-blue-400 sm:w-7 sm:h-7" />,
      title: "Model Checking",
      description:
        "The ring compiles against loom, which explores every interleaving the C11 memory model allows. FIFO across wraparound and backpressure and exactly-once drop pass. Downgrading the cursors to Relaxed is caught immediately: Causality violation.",
      tag: "4 pass · negative control caught",
    },
    {
      icon: <Dices size={24} className="text-slate-300 sm:w-7 sm:h-7" />,
      title: "Differential Testing",
      description:
        "Random add/cancel sequences run through the engine and a flat-Vec reference book. Status, fills, cancels, best prices and full book contents must agree after every step, and replaying the same input must produce the same transcript.",
      tag: "512 cases per property · 0 disagreements",
    },
    {
      icon: <Bug size={24} className="text-blue-400 sm:w-7 sm:h-7" />,
      title: "Crash-Consistency Fault Injection",
      description:
        "The WAL and snapshot files are truncated and corrupted at every byte offset with three patterns, then written to again and recovered again. A writer process is killed mid-write for 12 cycles. This found two silent-corruption defects, both fixed.",
      tag: "3,362 faults · 12 kills · 2 defects fixed",
    },
    {
      icon: <Microscope size={24} className="text-slate-300 sm:w-7 sm:h-7" />,
      title: "Sanitizers & Miri",
      description:
        "ThreadSanitizer, ASan and UBSan on the C++ ring; Miri with strict provenance and a sanitizer-instrumented std on the Rust ring, in CI. Both Relaxed negative controls are caught on the exact access the acquire/release pair orders.",
      tag: "TSan · ASan · UBSan · Miri",
    },
    {
      icon: <Crosshair size={24} className="text-blue-400 sm:w-7 sm:h-7" />,
      title: "Coverage-Guided Fuzzing",
      description:
        "libFuzzer targets for the wire decoder, the WAL loader and the snapshot loader. First CI run found a CRC-valid record that does not decode; the engine now refuses to start rather than guess, and the input is committed as a seed and a unit test.",
      tag: "3 targets · 1 finding · seed committed",
    },
    {
      icon: (
        <GitCompareArrows
          size={24}
          className="text-slate-300 sm:w-7 sm:h-7"
        />
      ),
      title: "C++ Port & Statistics",
      description:
        "A line-for-line C++20 port of the ring with the same compile-time knobs. Pinned cores, interleaved ABBA runs, bootstrap confidence intervals and Mann-Whitney tests. Rust is 10–17% faster on 48-byte transfer; C++ is 1.35x faster single-threaded, mostly the bounds check safe Rust cannot elide.",
      tag: "n = 40 · p ≤ 0.003",
    },
  ];

  const corrections = [
    {
      claim: "P99 latency",
      before: "500 ns",
      after: "0.83–1.06 µs",
      why: "The 100 ns step of std::time::Instant on Windows quantized every percentile. Re-timed with the TSC.",
    },
    {
      claim: "Ring vs std::sync::mpsc",
      before: "8.8x",
      after: "3.2x",
      why: "The original gap came from an unpreserved session and never reproduced. The number shown is the one that does.",
    },
    {
      claim: "Unsafe inventory",
      before: "6 blocks",
      after: "11 blocks + 4 impl",
      why: "A recount found blocks in the tracking allocator and ring internals that the README had left out.",
    },
    {
      claim: "Rust vs C++ cross-thread",
      before: "Tie within noise",
      after: "Rust 10–17% faster",
      why: "Two unpinned runs could not resolve the effect. Forty pinned, interleaved runs do, at p ≤ 0.003.",
    },
  ];

  return (
    <div className="mb-20 sm:mb-32">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
        Verified, Not Asserted
      </h2>
      <p className="text-slate-500 text-sm sm:text-base font-light mb-10 sm:mb-14 max-w-2xl">
        Benchmarks say the engine is fast. Phases 8 and 9 ask whether it is
        right, what each design decision is worth, and which of the earlier
        claims survive re-measurement.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {checks.map((c) => (
          <div
            key={c.title}
            className="group p-6 sm:p-8 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/4 hover:border-white/10 transition-all duration-300 flex flex-col"
          >
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-full bg-black/50 inline-block self-start border border-white/5 group-hover:scale-110 transition-transform duration-300">
              {c.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 tracking-tight">
              {c.title}
            </h3>
            <p className="text-slate-400 leading-relaxed font-light text-xs sm:text-sm mb-4 sm:mb-6 grow">
              {c.description}
            </p>
            <div className="inline-flex self-start max-w-full items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] sm:text-xs font-mono text-emerald-400 leading-snug">
              <Zap size={12} className="text-emerald-500 shrink-0" /> {c.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Corrections — what re-measurement changed */}
      <div className="border-t border-white/5 mt-10 sm:mt-14 pt-10 sm:pt-14">
        <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-500 mb-6 sm:mb-8">
          What re-measurement changed
        </h3>
        <div className="divide-y divide-white/5">
          {corrections.map((c) => (
            <div
              key={c.claim}
              className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-8"
            >
              <div className="sm:max-w-xl">
                <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight mb-0.5">
                  {c.claim}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm font-light">
                  {c.why}
                </p>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono shrink-0">
                <span className="text-slate-500 line-through decoration-slate-700">
                  {c.before}
                </span>
                <ArrowRight size={14} className="text-slate-600" />
                <span className="text-slate-200">{c.after}</span>
              </div>
            </div>
          ))}
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
    <div className="flex items-center justify-between xl:justify-start gap-1.5 sm:gap-2 bg-white/3 border border-white/8 rounded-lg px-2.5 sm:px-3 py-1.5 shrink-0">
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
      change: "3.2x",
      title: "Cross-Thread Throughput",
      context: "SPSC ring vs best std::sync::mpsc, 1M u64, 2026-10-10",
      before: "9.73 ms",
      after: "3.06 ms",
    },
    {
      change: "-42%",
      title: "Single-Thread Push+Pop",
      context:
        "ManuallyDrop<Arc> lets LLVM keep cursors in registers · n = 40, p = 1.4e-14",
      before: "2.752 ns",
      after: "1.610 ns",
    },
    {
      change: "5.4x",
      title: "Acquire/Release vs SeqCst",
      context: "Cost of over-synchronizing · 1M u64 cross-thread, median of 30",
      before: "23.65 ms",
      after: "4.42 ms",
    },
    {
      change: "2.1x",
      title: "Cache-Line Padding",
      context:
        "Cost of false sharing · same transfer, cursors on one line vs padded",
      before: "9.09 ms",
      after: "4.42 ms",
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
