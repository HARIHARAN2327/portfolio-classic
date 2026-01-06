import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, suffix, prefix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

const StatCard = ({ value, suffix, prefix, label, delay = 0 }: StatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center text-center group"
    >
      <div className="relative mb-6">
        <motion.div
          className="font-display text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
        </motion.div>
        <motion.div
          className="absolute -inset-4 bg-primary/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <p className="font-body text-sm md:text-base uppercase tracking-wider text-muted-foreground max-w-[200px]">
        {label}
      </p>
    </motion.div>
  );
};

const StatsSection = () => {
  const [totalSolved, setTotalSolved] = useState<number | null>(null);
  const [easySolved, setEasySolved] = useState<number | null>(null);
  const [mediumSolved, setMediumSolved] = useState<number | null>(null);
  const [hardSolved, setHardSolved] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Unofficial public LeetCode stats API
        const res = await fetch("https://leetcode-stats-api.herokuapp.com/harimng");
        if (!res.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data = await res.json();
        setTotalSolved(typeof data.totalSolved === "number" ? data.totalSolved : 0);
        setEasySolved(typeof data.easySolved === "number" ? data.easySolved : 0);
        setMediumSolved(typeof data.mediumSolved === "number" ? data.mediumSolved : 0);
        setHardSolved(typeof data.hardSolved === "number" ? data.hardSolved : 0);
      } catch (err) {
        console.error("Error fetching LeetCode stats", err);
        setError("Unable to load latest LeetCode stats right now.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-8 py-24">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl uppercase mb-6 tracking-tight">
            LEETCODE
          </h2>
          <p className="font-body text-overlay-text text-lg max-w-2xl mx-auto">
            To See Live Code Stats, {" "}
            <a
              href="https://leetcode.com/u/harimng/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Click here
            </a>
          </p>
          {isLoading && (
            <p className="mt-4 text-sm text-overlay-text">Loading latest stats...</p>
          )}
          {!isLoading && error && (
            <p className="mt-4 text-sm text-red-400">{error}</p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-20">
          <StatCard
            value={totalSolved ?? 0}
            label="Total Problems Solved"
            delay={0.05}
          />
          <StatCard
            value={easySolved ?? 0}
            label="Easy Problems Solved"
            delay={0.1}
          />
          <StatCard
            value={mediumSolved ?? 0}
            label="Medium Problems Solved"
            delay={0.2}
          />
          <StatCard
            value={hardSolved ?? 0}
            label="Hard Problems Solved"
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-dark-section-foreground/20 to-transparent"
        />
      </div>
    </section>
  );
};

export default StatsSection;
