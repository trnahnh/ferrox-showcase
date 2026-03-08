# Ferrox Showcase

A high-performance web showcase for the **Ferrox** order matching engine. Built with Next.js and Tailwind CSS, the site presents validated Phase 7 metrics and systems architecture with a focused, premium aesthetic.

**[View live showcase](https://ferrox-engine.vercel.app)** · **[Ferrox engine source](https://github.com/trnahnh/ferrox)**

---

## Highlights

| Metric | Value |
| ------ | ----- |
| **P99 latency** | 500ns (HdrHistogram verified) |
| **Throughput** | 4.7M orders/second |
| **Heap allocations** | Zero on the critical path |
| **Crash recovery** | &lt;1.4ms via deterministic mmap WAL replay |

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Stack

- **Next.js 16** — App Router, React 19
- **Tailwind CSS 4** — Styling
- **Lucide React** — Icons

---

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

---

## License

© Anh Tran. Engineered in Rust.
